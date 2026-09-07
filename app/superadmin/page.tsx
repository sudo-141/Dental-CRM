'use client';
import React, { useState, useEffect } from 'react';
import AnimatedCounter from './components/AnimatedCounter';
import Skeleton, { ListSkeleton } from './components/Skeleton';
import Modal from './components/Modal';

const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconAlert = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const IconInfo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export default function SuperAdminOverview() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="dashboard-topbar">
        <div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' }}>Super Admin &gt; Dashboard</div>
          <h1 className="dashboard-title" style={{ color: '#ff4444' }}>Super Admin Overview</h1>
          <p className="dashboard-subtitle">Global system statistics and controls</p>
        </div>
      </div>

      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <div className="dashboard-card">
          <div className="kpi-title">Total Users</div>
          {isLoading ? <Skeleton width="80px" height="2.5rem" className="kpi-value" /> : (
            <div className="kpi-value"><AnimatedCounter value={12450} /></div>
          )}
          <div className="kpi-trend positive">+15% from last month</div>
        </div>
        <div className="dashboard-card">
          <div className="kpi-title">Active Organizations</div>
          {isLoading ? <Skeleton width="60px" height="2.5rem" className="kpi-value" /> : (
            <div className="kpi-value"><AnimatedCounter value={342} /></div>
          )}
          <div className="kpi-trend positive">+5 this week</div>
        </div>
        <div className="dashboard-card">
          <div className="kpi-title">Active Subscriptions</div>
          {isLoading ? <Skeleton width="60px" height="2.5rem" className="kpi-value" /> : (
            <div className="kpi-value"><AnimatedCounter value={328} /></div>
          )}
          <div className="kpi-trend neutral">-2 this week</div>
        </div>
        <div className="dashboard-card">
          <div className="kpi-title">Monthly Revenue</div>
          {isLoading ? <Skeleton width="100px" height="2.5rem" className="kpi-value" /> : (
            <div className="kpi-value"><AnimatedCounter value={84500} prefix="$" /></div>
          )}
          <div className="kpi-trend positive">+12% from last month</div>
        </div>
        <div className="dashboard-card">
          <div className="kpi-title">Storage Used (TB)</div>
          {isLoading ? <Skeleton width="80px" height="2.5rem" className="kpi-value" /> : (
            <div className="kpi-value"><AnimatedCounter value={4.2} decimals={1} /> TB</div>
          )}
          <div className="kpi-trend neutral">65% capacity</div>
        </div>
        <div className="dashboard-card" style={{ borderColor: 'rgba(248,113,113,0.3)' }}>
          <div className="kpi-title">Failed Logins Today</div>
          {isLoading ? <Skeleton width="50px" height="2.5rem" className="kpi-value" /> : (
            <div className="kpi-value" style={{ color: '#f87171' }}><AnimatedCounter value={47} /></div>
          )}
          <div className="kpi-trend negative">+14 vs average</div>
        </div>
      </div>

      <div className="dashboard-sections" style={{ gridTemplateColumns: '2fr 1fr', marginTop: '1rem' }}>
        <div>
          <h2 className="section-header">Recent System Activity</h2>
          <div className="dashboard-card">
            {isLoading ? <ListSkeleton rows={5} /> : (
              <div className="sa-list">
                <div className="sa-list-item">
                  <div className="sa-list-icon green"><IconCheck /></div>
                  <div className="sa-list-body">
                    <div className="sa-list-title">Organization Created: Smile Clinic</div>
                    <div className="sa-list-meta">By admin@system.com — 2026-09-01 14:30:00</div>
                  </div>
                  <div className="dashboard-actions"><span className="sa-badge green">Success</span></div>
                </div>
                <div className="sa-list-item">
                  <div className="sa-list-icon blue"><IconCheck /></div>
                  <div className="sa-list-body">
                    <div className="sa-list-title">Role Updated: Billing Staff</div>
                    <div className="sa-list-meta">By superadmin@dentalcrm.com — 2026-09-01 13:15:22</div>
                  </div>
                  <div className="sa-list-actions"><span className="sa-badge green">Success</span></div>
                </div>
                <div className="sa-list-item">
                  <div className="sa-list-icon pink"><IconAlert /></div>
                  <div className="sa-list-body">
                    <div className="sa-list-title">Failed Login Attempt</div>
                    <div className="sa-list-meta">IP: 45.22.11.9 — 2026-09-01 11:05:10</div>
                  </div>
                  <div className="sa-list-actions"><span className="sa-badge red">Warning</span></div>
                </div>
                <div className="sa-list-item">
                  <div className="sa-list-icon purple"><IconInfo /></div>
                  <div className="sa-list-body">
                    <div className="sa-list-title">Automated Backup Completed</div>
                    <div className="sa-list-meta">System — 2026-09-01 03:00:00</div>
                  </div>
                  <div className="sa-list-actions"><span className="sa-badge green">Success</span></div>
                </div>
                <div className="sa-list-item">
                  <div className="sa-list-icon green"><IconCheck /></div>
                  <div className="sa-list-body">
                    <div className="sa-list-title">Subscription Upgraded: City Dental Care</div>
                    <div className="sa-list-meta">Stripe Webhook — 2026-08-31 16:45:00</div>
                  </div>
                  <div className="sa-list-actions"><span className="sa-badge green">Success</span></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* New Support Tickets Section */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 className="section-header" style={{ marginBottom: 0 }}>Support Tickets</h2>
              <button 
                className="action-btn" 
                style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', marginBottom: '1rem' }}
                onClick={() => setIsSupportModalOpen(true)}
              >
                View All
              </button>
            </div>
            <div className="dashboard-card">
              {isLoading ? <ListSkeleton rows={3} /> : (
                <div className="sa-list">
                  <div className="sa-list-item" style={{ cursor: 'pointer' }} onClick={() => { setSelectedTicket('#1042'); setIsSupportModalOpen(true); }}>
                    <div className="sa-list-body">
                      <div className="sa-list-title">#1042: Sync Error</div>
                      <div className="sa-list-meta">Org: Smile Clinic</div>
                    </div>
                    <div className="sa-list-actions"><span className="sa-badge red">Open</span></div>
                  </div>
                  <div className="sa-list-item" style={{ cursor: 'pointer' }} onClick={() => { setSelectedTicket('#1043'); setIsSupportModalOpen(true); }}>
                    <div className="sa-list-body">
                      <div className="sa-list-title">#1043: Billing issue</div>
                      <div className="sa-list-meta">Org: City Dental Care</div>
                    </div>
                    <div className="sa-list-actions"><span className="sa-badge blue">In Progress</span></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="section-header">System Health</h2>
            <div className="dashboard-card">
              {isLoading ? <ListSkeleton rows={3} /> : (
                <div className="sa-list">
                  <div className="sa-list-item">
                    <div className="sa-list-body"><div className="sa-list-title">API Services</div></div>
                    <div className="sa-list-actions"><span className="sa-badge green">Operational</span></div>
                  </div>
                  <div className="sa-list-item">
                    <div className="sa-list-body"><div className="sa-list-title">Database Cluster</div></div>
                    <div className="sa-list-actions"><span className="sa-badge green">Operational</span></div>
                  </div>
                  <div className="sa-list-item">
                    <div className="sa-list-body"><div className="sa-list-title">Payment Gateway</div></div>
                    <div className="sa-list-actions"><span className="sa-badge green">Operational</span></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isSupportModalOpen} 
        onClose={() => { setIsSupportModalOpen(false); setSelectedTicket(null); }}
        title={selectedTicket ? `Support Ticket ${selectedTicket}` : 'All Support Tickets'}
      >
        {selectedTicket ? (
          <div style={{ color: '#fff' }}>
            <h3 style={{ marginBottom: '1rem', color: '#ff4444' }}>Sync Error - Smile Clinic</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              The client reported an issue where their local practice management software is not syncing appointments with the cloud CRM. Last successful sync was 2 hours ago.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="action-btn primary" onClick={() => { setIsSupportModalOpen(false); setSelectedTicket(null); }}>Escalate to Engineering</button>
              <button className="action-btn" onClick={() => { setIsSupportModalOpen(false); setSelectedTicket(null); }}>Reply to Customer</button>
            </div>
          </div>
        ) : (
          <div className="sa-list">
            {['#1042: Sync Error', '#1043: Billing issue', '#1044: Role Permissions'].map((title, i) => (
              <div key={i} className="sa-list-item">
                <div className="sa-list-body">
                  <div className="sa-list-title">{title}</div>
                  <div className="sa-list-meta">Opened {i + 1} hours ago</div>
                </div>
                <div className="sa-list-actions">
                  <span className={`sa-badge ${i === 0 ? 'red' : 'blue'}`}>{i === 0 ? 'Open' : 'In Progress'}</span>
                  <button className="action-btn" onClick={() => setSelectedTicket(title.split(':')[0])}>View</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </>
  );
}
