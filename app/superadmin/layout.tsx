'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import SuperAdminTopBar from '@/components/SuperAdminTopBar';

// Simple Icons
const IconDashboard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="7" height="9" x="3" y="3" rx="1"/>
    <rect width="7" height="5" x="14" y="3" rx="1"/>
    <rect width="7" height="9" x="14" y="12" rx="1"/>
    <rect width="7" height="5" x="3" y="16" rx="1"/>
  </svg>
);

const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconBuilding = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
    <path d="M9 22v-4h6v4"/>
    <path d="M8 6h.01"/>
    <path d="M16 6h.01"/>
    <path d="M12 6h.01"/>
    <path d="M12 10h.01"/>
    <path d="M12 14h.01"/>
    <path d="M16 10h.01"/>
    <path d="M16 14h.01"/>
    <path d="M8 10h.01"/>
    <path d="M8 14h.01"/>
  </svg>
);

const IconCreditCard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2"/>
    <line x1="2" x2="22" y1="10" y2="10"/>
  </svg>
);

const IconSettings = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const IconLock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const IconActivity = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

const IconDatabase = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const IconChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

const IconTool = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const IconChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const IconChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const IconLogout = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);



type NavItem = 
  | { type: 'header'; name: string }
  | { type: 'link'; name: string; href: string; icon: React.ReactNode };

const NAV_ITEMS: NavItem[] = [
  { type: 'header', name: 'OVERVIEW' },
  { type: 'link', name: 'Dashboard', href: '/superadmin', icon: <IconDashboard /> },
  
  { type: 'header', name: 'ADMINISTRATION' },
  { type: 'link', name: 'Users', href: '/superadmin/users', icon: <IconUsers /> },
  { type: 'link', name: 'Roles & Permissions', href: '/superadmin/roles', icon: <IconShield /> },
  { type: 'link', name: 'Organizations', href: '/superadmin/organizations', icon: <IconBuilding /> },
  
  { type: 'header', name: 'SYSTEM' },
  { type: 'link', name: 'Configuration', href: '/superadmin/configuration', icon: <IconSettings /> },
  { type: 'link', name: 'Security', href: '/superadmin/security', icon: <IconLock /> },
  { type: 'link', name: 'Audit & Activity', href: '/superadmin/audit', icon: <IconActivity /> },
  { type: 'link', name: 'Data Management', href: '/superadmin/data', icon: <IconDatabase /> },
  { type: 'link', name: 'System Maintenance', href: '/superadmin/maintenance', icon: <IconTool /> },
  
  { type: 'header', name: 'BUSINESS' },
  { type: 'link', name: 'Billing & Subscriptions', href: '/superadmin/billing', icon: <IconCreditCard /> },
  { type: 'link', name: 'Reports & Analytics', href: '/superadmin/reports', icon: <IconChart /> },
];

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(true);
  const [mounted, setMounted] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Check if user is actually Super Admin
    const role = localStorage.getItem('userRole');
    if (role !== 'Super Admin') {
      router.push('/');
    } else {
      setMounted(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  return (
    <div className="dashboard-layout">
      {/* Sidebar with a slight tint for Super Admin to distinguish */}
      <aside className={`dashboard-sidebar ${expanded ? 'expanded' : 'collapsed'}`} style={{ borderRight: '1px solid rgba(255, 68, 68, 0.2)' }}>
        <div className="sidebar-header">
          <div className="sidebar-logo-text" style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ⚡ DentalCRM 
            <span style={{ background: '#ff4444', color: '#fff', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>SA</span>
          </div>
          <button 
            className="sidebar-toggle-btn" 
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {expanded ? <IconChevronLeft /> : <IconChevronRight />}
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item, index) => {
            if (item.type === 'header') {
              if (!expanded) return null;
              return (
                <div key={index} className="nav-header" style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.05em',
                  padding: '1rem 1rem 0.5rem 1rem',
                  marginTop: index === 0 ? 0 : '0.5rem',
                }}>
                  {item.name}
                </div>
              );
            }
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`nav-item ${currentPath === item.href ? 'active' : ''}`}
                title={!expanded ? item.name : ''}
              >
                {item.icon}
                <span className="nav-item-text">{item.name}</span>
              </Link>
            );
          })}
          
          <div style={{ flex: 1, minHeight: '2rem' }}></div>

          <Link 
            href="/"
            onClick={() => localStorage.removeItem('userRole')}
            className="nav-item"
            title={!expanded ? 'Log Out' : ''}
            style={{ color: '#ff4444' }}
          >
            <IconLogout />
            <span className="nav-item-text">Log Out</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main sa-main" style={{ position: 'relative' }}>
        <SuperAdminTopBar />
        {children}
        
      </main>
    </div>
  );
}
