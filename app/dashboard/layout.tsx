'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TopBar from '@/components/TopBar';

// Simple Icons
const IconDashboard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="7" height="9" x="3" y="3" rx="1"/>
    <rect width="7" height="5" x="14" y="3" rx="1"/>
    <rect width="7" height="9" x="14" y="12" rx="1"/>
    <rect width="7" height="5" x="3" y="16" rx="1"/>
  </svg>
);

const IconPatients = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconCalendar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
    <line x1="16" x2="16" y1="2" y2="6"/>
    <line x1="8" x2="8" y1="2" y2="6"/>
    <line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

const IconTooth = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 21v-2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2"/>
    <path d="M12 11c-2 0-3 1-3 1s-1 1-2 1c-1.8 0-3-1.2-3-3s1.2-3 3-3c1 0 2 0 3-1"/>
    <path d="M12 11c2 0 3 1 3 1s1 1 2 1c1.8 0 3-1.2 3-3s-1.2-3-3-3c-1 0-2 0-3-1"/>
    <path d="M6 6c0-2 2-4 4-4s4 2 4 4"/>
  </svg>
);

const IconBilling = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2"/>
    <line x1="2" x2="22" y1="10" y2="10"/>
  </svg>
);

const IconInventory = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7.5 4.27 9 5.15"/>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
    <path d="m3.3 7 8.7 5 8.7-5"/>
    <path d="M12 22V12"/>
  </svg>
);

const IconSettings = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
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

const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

const IconLogout = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);

type Role = 'Admin' | 'Dentist' | 'Front Desk' | 'Hygienist' | 'Billing Staff' | 'Super Admin';

type NavItem = 
  | { type: 'header'; name: string; roles: Role[] }
  | { type: 'link'; name: string; href: string; icon: React.ReactNode; roles: Role[] };

const NAV_ITEMS: NavItem[] = [
  { type: 'header', name: 'OVERVIEW', roles: ['Admin', 'Dentist', 'Front Desk', 'Hygienist', 'Billing Staff'] },
  { type: 'link', name: 'Dashboard', href: '/dashboard', icon: <IconDashboard />, roles: ['Admin', 'Dentist', 'Front Desk', 'Hygienist', 'Billing Staff'] },
  { type: 'link', name: 'Reports', href: '/dashboard/reports', icon: <IconChart />, roles: ['Admin'] },
  
  { type: 'header', name: 'CLINICAL', roles: ['Admin', 'Dentist', 'Hygienist', 'Front Desk'] },
  { type: 'link', name: 'Patients', href: '/dashboard/patients', icon: <IconPatients />, roles: ['Admin', 'Dentist', 'Hygienist', 'Front Desk'] },
  { type: 'link', name: 'Treatments', href: '/dashboard/treatments', icon: <IconTooth />, roles: ['Admin', 'Dentist', 'Hygienist'] },
  
  { type: 'header', name: 'OPERATIONS', roles: ['Admin', 'Front Desk'] },
  { type: 'link', name: 'Appointments', href: '/dashboard/appointments', icon: <IconCalendar />, roles: ['Admin', 'Front Desk'] },
  { type: 'link', name: 'Employees', href: '/dashboard/employees', icon: <IconUsers />, roles: ['Admin', 'Front Desk'] },
  { type: 'link', name: 'Inventory', href: '/dashboard/inventory', icon: <IconInventory />, roles: ['Admin'] },
  
  { type: 'header', name: 'FINANCIAL', roles: ['Admin', 'Billing Staff'] },
  { type: 'link', name: 'Billing', href: '/dashboard/billing', icon: <IconBilling />, roles: ['Admin', 'Billing Staff'] },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(true);
  const [currentRole, setCurrentRole] = useState<Role>('Admin');
  const currentPath = usePathname();

  useEffect(() => {
    const role = localStorage.getItem('userRole') as Role;
    if (role) {
      setCurrentRole(role);
    }
  }, []);

  const filteredNavItems = NAV_ITEMS.filter(item => item.roles.includes(currentRole));

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${expanded ? 'expanded' : 'collapsed'}`} id="tour-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo-text">Dental CRM</div>
          <button 
            className="sidebar-toggle-btn" 
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {expanded ? <IconChevronLeft /> : <IconChevronRight />}
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {filteredNavItems.map((item, index) => {
            if (item.type === 'header') {
              return (
                <div key={index} className="nav-header" style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.05em',
                  padding: '1rem 1rem 0.5rem 1rem',
                  marginTop: index === 0 ? 0 : '0.5rem',
                  opacity: expanded ? 1 : 0,
                  transition: 'opacity 0.2s',
                  display: expanded ? 'block' : 'none'
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
          
          <div style={{ flex: 1 }}></div>
          
          <Link 
            href="/"
            className="nav-item"
            title={!expanded ? 'Log Out' : ''}
            style={{ color: '#ff4444' }}
          >
            <IconLogout />
            <span className="nav-item-text">Log Out</span>
          </Link>

          <Link 
            href="/dashboard/settings"
            className={`nav-item ${currentPath === '/dashboard/settings' ? 'active' : ''}`}
            title={!expanded ? 'Settings' : ''}
          >
            <IconSettings />
            <span className="nav-item-text">Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Right Column: TopBar + Scrollable Content */}
      <div className="dashboard-content-wrapper">
        <TopBar />
        <main className="dashboard-main" id="tour-main">
          {children}
        </main>
      </div>
    </div>
  );
}
