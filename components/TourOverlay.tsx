'use client';
import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';

export interface TourStep {
  target: string;
  title: string;
  content: string;
}

interface TourOverlayProps {
  steps: TourStep[];
  run: boolean;
  onFinish: () => void;
}

interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
  bottom: number;
  right: number;
}

const PAD = 10;

export default function TourOverlay({ steps, run, onFinish }: TourOverlayProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [rect, setRect] = useState<Rect | null>(null);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});

  const measure = useCallback(() => {
    if (!run || currentStep >= steps.length) return;
    const el = document.querySelector(steps[currentStep].target);
    if (!el) return;
    const r = el.getBoundingClientRect();
    const measured: Rect = { top: r.top, left: r.left, width: r.width, height: r.height, bottom: r.bottom, right: r.right };
    setRect(measured);
    const TOOLTIP_W = 340;
    const TOOLTIP_H = 200;
    const viewW = window.innerWidth;
    const viewH = window.innerHeight;
    const style: React.CSSProperties = { width: TOOLTIP_W };
    if (r.bottom + PAD + TOOLTIP_H + 16 < viewH) { style.top = r.bottom + PAD + 8; }
    else { style.bottom = viewH - r.top + PAD + 8; }
    const idealLeft = r.left;
    if (idealLeft + TOOLTIP_W > viewW - 16) { style.right = 16; }
    else { style.left = Math.max(16, idealLeft); }
    setTooltipStyle(style);
  }, [run, currentStep, steps]);

  useLayoutEffect(() => {
    if (!run) { setCurrentStep(0); setRect(null); return; }
    measure();
  }, [run, measure]);

  useEffect(() => {
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure, true);
    return () => { window.removeEventListener('resize', measure); window.removeEventListener('scroll', measure, true); };
  }, [measure]);

  useEffect(() => {
    if (!run) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onFinish();
      if (e.key === 'ArrowRight' || e.key === 'Enter') handleNext();
      if (e.key === 'ArrowLeft') handleBack();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run, currentStep]);

  // These must be defined before the early return so the keyboard handler
  // closure (set up in the useEffect above) can always reference them without
  // hitting the Temporal Dead Zone when rect is still null.
  const step = steps[currentStep];
  const isLast = currentStep === steps.length - 1;
  const isFirst = currentStep === 0;

  function handleNext() { if (isLast) { onFinish(); } else { setCurrentStep(s => s + 1); } }
  function handleBack() { if (!isFirst) setCurrentStep(s => s - 1); }

  if (!run || !rect) return null;

  // rect is guaranteed non-null below this point
  const spotLeft = rect.left - PAD;
  const spotTop = rect.top - PAD;
  const spotW = rect.width + PAD * 2;
  const spotH = rect.height + PAD * 2;

  return (
    <>
      <div style={{ position: 'fixed', inset: 0, zIndex: 9000, pointerEvents: 'none' }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, display: 'block' }}>
          <defs>
            <mask id="tour-spotlight-mask">
              <rect width="100%" height="100%" fill="white" />
              <rect x={spotLeft} y={spotTop} width={spotW} height={spotH} rx={10} ry={10} fill="black" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="rgba(0,0,0,0.72)" mask="url(#tour-spotlight-mask)" />
        </svg>
        <div style={{ position: 'absolute', left: spotLeft, top: spotTop, width: spotW, height: spotH, borderRadius: 10, border: '2px solid #3b82f6', boxShadow: '0 0 0 4px rgba(59,130,246,0.25), 0 0 24px rgba(59,130,246,0.4)', transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)' }} />
      </div>
      <div style={{ position: 'fixed', inset: 0, zIndex: 8999, cursor: 'default' }} aria-hidden />
      <div role="dialog" aria-modal="false" aria-label={'Tour step ' + (currentStep + 1) + ' of ' + steps.length + ': ' + step.title} style={{ position: 'fixed', ...tooltipStyle, zIndex: 9001, background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(16px)', border: '1px solid rgba(59,130,246,0.35)', borderRadius: 14, padding: '1.25rem 1.5rem', boxShadow: '0 24px 60px rgba(0,0,0,0.7),0 0 0 1px rgba(255,255,255,0.05)', color: '#fff', fontFamily: 'inherit', animation: 'tour-fadein 0.25s ease' }}>
        <div style={{ display: 'flex', gap: 5, marginBottom: '1rem' }}>
          {steps.map((_, i) => (<div key={i} style={{ flex: 1, height: 3, borderRadius: 999, background: i < currentStep ? '#1d4ed8' : i === currentStep ? '#3b82f6' : 'rgba(255,255,255,0.15)', transition: 'background 0.3s' }} />))}
        </div>
        <div style={{ fontSize: '0.7rem', color: '#60a5fa', fontWeight: 600, letterSpacing: '0.06em', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Step {currentStep + 1} of {steps.length}</div>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{step.title}</h3>
        <p style={{ margin: '0 0 1.25rem 0', fontSize: '0.875rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65 }}>{step.content}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
          <button onClick={onFinish} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', cursor: 'pointer', padding: '4px 0', fontFamily: 'inherit', transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')} onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>Skip tour</button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {!isFirst && (<button onClick={handleBack} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)', fontSize: '0.825rem', cursor: 'pointer', padding: '6px 14px', borderRadius: 7, fontFamily: 'inherit', transition: 'background 0.2s' }} onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')} onMouseOut={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}>← Back</button>)}
            <button onClick={handleNext} style={{ background: isLast ? 'linear-gradient(135deg,#22c55e,#16a34a)' : 'linear-gradient(135deg,#3b82f6,#1d4ed8)', border: 'none', color: '#fff', fontSize: '0.825rem', fontWeight: 600, cursor: 'pointer', padding: '6px 16px', borderRadius: 7, fontFamily: 'inherit', transition: 'opacity 0.2s,transform 0.15s', boxShadow: '0 4px 12px rgba(59,130,246,0.35)' }} onMouseOver={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }} onMouseOut={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}>{isLast ? '✓ Done' : 'Next →'}</button>
          </div>
        </div>
      </div>
      <style>{'@keyframes tour-fadein { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }'}</style>
    </>
  );
}
