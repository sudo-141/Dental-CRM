'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import TourOverlay, { TourStep } from '@/components/TourOverlay';

const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const TOUR_STEPS: TourStep[] = [
  {
    target: '#tour-sidebar',
    title: 'Navigation Sidebar',
    content: 'Use this sidebar to navigate between all Super Admin sections — users, organizations, security, billing, and more.',
  },
  {
    target: '#tour-profile',
    title: 'Profile & Settings',
    content: 'Access your profile, adjust text size preferences, start this tour again, or sign out from here.',
  },
  {
    target: '#tour-main',
    title: 'Main Content Area',
    content: 'All system data and management pages are displayed here. Use the sidebar on the left to navigate between sections.',
  },
];

export default function SuperAdminTopBar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [fontSize, setFontSize] = useState('2');
  const [runTour, setRunTour] = useState(false);
  const router = useRouter();

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('userRole');
    router.push('/');
  };

  const handleTour = () => {
    setProfileOpen(false);
    setTimeout(() => setRunTour(true), 150);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = e.target.value;
    setFontSize(size);
    if (size === '1') document.documentElement.style.fontSize = '14px';
    else if (size === '2') document.documentElement.style.fontSize = '16px';
    else if (size === '3') document.documentElement.style.fontSize = '18px';
  };

  return (
    <>
      <TourOverlay steps={TOUR_STEPS} run={runTour} onFinish={() => setRunTour(false)} />

      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '0.75rem 2rem',
        gap: '1.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        {/* Profile */}
        <div style={{ position: 'relative' }} ref={profileRef}>
          <button
            id="tour-profile"
            onClick={() => setProfileOpen(!profileOpen)}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <IconUser />
          </button>

          {profileOpen && (
            <div style={{
              position: 'absolute',
              top: '50px',
              right: '0',
              width: '260px',
              background: '#171717',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '12px',
              padding: '0.5rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              color: '#fff',
              zIndex: 100,
            }}>
              <Link
                href="/superadmin/users"
                style={{ padding: '0.6rem 1rem', color: '#fff', textDecoration: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '0.95rem' }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                onClick={() => setProfileOpen(false)}
              >
                Profile
              </Link>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '0.25rem 0' }}></div>

              <div style={{ padding: '0.4rem 1rem', fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                preferences
              </div>

              <Link
                href="/superadmin/configuration"
                style={{ padding: '0.6rem 1rem', color: '#fff', textDecoration: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '0.95rem' }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                onClick={() => setProfileOpen(false)}
              >
                Settings
              </Link>

              <div style={{ padding: '0.75rem 1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>
                  <span>Text Font Size</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{fontSize === '1' ? 'Small' : fontSize === '2' ? 'Mid' : 'Large'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="1"
                  value={fontSize}
                  onChange={handleFontSizeChange}
                  style={{ width: '100%', cursor: 'pointer', accentColor: '#fff' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.4rem' }}>
                  <span>A</span>
                  <span>A</span>
                  <span style={{ fontSize: '0.9rem' }}>A</span>
                </div>
              </div>

              <button
                onClick={handleTour}
                style={{ padding: '0.6rem 1rem', color: '#fff', background: 'transparent', border: 'none', textAlign: 'left', borderRadius: '8px', cursor: 'pointer', fontSize: '0.95rem', fontFamily: 'inherit' }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                🗺 Tour
              </button>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '0.25rem 0' }}></div>

              <button
                onClick={handleSignOut}
                style={{ padding: '0.6rem 1rem', color: '#ff4444', background: 'transparent', border: 'none', textAlign: 'left', borderRadius: '8px', cursor: 'pointer', fontSize: '0.95rem', fontFamily: 'inherit', fontWeight: 500 }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,0,0,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
