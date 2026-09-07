import React, { useEffect } from 'react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => onClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const bg = type === 'success' ? 'rgba(16, 185, 129, 0.9)' : 
             type === 'error' ? 'rgba(239, 68, 68, 0.9)' : 
             'rgba(59, 130, 246, 0.9)';

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      background: bg,
      color: '#fff',
      padding: '1rem 1.5rem',
      borderRadius: '8px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      animation: 'slideUpToast 0.3s ease-out forwards',
      backdropFilter: 'blur(8px)',
      fontWeight: 500
    }}>
      <style>{`
        @keyframes slideUpToast {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      {type === 'success' && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      )}
      {type === 'error' && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      )}
      
      <span>{message}</span>
      
      <button onClick={onClose} style={{
        background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', marginLeft: '0.5rem', display: 'flex', alignItems: 'center'
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  );
}
