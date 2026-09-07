'use client';
import React, { useState } from 'react';

// Icons
const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconCalendar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const IconFile = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const IconMessage = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconCreditCard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2" ry="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);

const IconUpload = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
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

const IconTooth = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5.5c-1.5-2-4-2.5-5.5-1C4 6 4 9 5 11c.8 1.5 1.5 5 2 7 .3 1 1 1 1.5 0 .5-2 1-3 1.5-3s1 1 1.5 3c.5 1 1.2 1 1.5 0 .5-2 1.2-5.5 2-7 1-2 1-5-.5-6.5C13 3 12 4 12 5.5z" />
  </svg>
);

const IconPlus = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function DashboardPages() {
  const [mainView, setMainView] = useState<'portal' | 'crm'>('crm');
  const [crmTab, setCrmTab] = useState<'profile' | 'history' | 'family' | 'docs' | 'logs'>('profile');

  // Shared generic styles for tabs to keep CSS untouched
  const tabContainerStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '0.5rem',
  };

  const getTabStyle = (isActive: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    background: isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
    border: `1px solid ${isActive ? 'rgba(255, 255, 255, 0.3)' : 'transparent'}`,
    color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '0.9rem',
    transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease',
    whiteSpace: 'nowrap' as const,
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#fff' }}>

      {/* Top View Toggle */}
      <div className="dashboard-topbar">
        <div>
          <h1 className="dashboard-title">Patient Management</h1>
          <p className="dashboard-subtitle">Manage CRM profiles or view the patient self-service portal.</p>
        </div>
        <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '4px', gap: '4px' }}>
          <button
            onClick={() => setMainView('crm')}
            style={{ ...getTabStyle(mainView === 'crm'), border: 'none', background: mainView === 'crm' ? 'rgba(255,255,255,0.2)' : 'transparent' }}
          >
            CRM Core (Admin)
          </button>
          <button
            onClick={() => setMainView('portal')}
            style={{ ...getTabStyle(mainView === 'portal'), border: 'none', background: mainView === 'portal' ? 'rgba(255,255,255,0.2)' : 'transparent' }}
          >
            Patient Portal View
          </button>
        </div>
      </div>

      {mainView === 'portal' ? (
        /* ========================================= */
        /*   PATIENT SELF-SERVICE PORTAL VIEW        */
        /* ========================================= */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="dashboard-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Welcome back, Sarah!</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>Your next checkup is due in 12 days.</p>
            </div>
            <button className="action-btn primary" style={{ padding: '0.8rem 1.5rem', fontSize: '1rem' }}>
              <IconCalendar /> Book Appointment
            </button>
          </div>

          <div className="dashboard-sections" style={{ alignItems: 'start' }}>
            <div className="dashboard-card">
              <h3 className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><IconFile /> Upcoming &amp; History</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon blue"><IconCalendar /></div>
                  <div className="activity-details">
                    <div className="activity-title">Routine Checkup - Dr. Smith</div>
                    <div className="activity-time">Sep 15, 2026 • 10:00 AM</div>
                  </div>
                  <div className="activity-status pending">Upcoming</div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon green"><IconTooth /></div>
                  <div className="activity-details">
                    <div className="activity-title">Root Canal Treatment</div>
                    <div className="activity-time">Aug 02, 2026</div>
                  </div>
                  <div className="activity-status completed">Completed</div>
                </div>
              </div>
            </div>

            <div className="dashboard-card">
              <h3 className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><IconCreditCard /> Billing &amp; Payments</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '12px' }}>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Outstanding Balance</p>
                  <h4 style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>$150.00</h4>
                  <button className="action-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>Pay Now</button>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', textAlign: 'center' }}>
                  Last payment: $300 on Aug 02
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================= */
        /*   4.1 PATIENT MANAGEMENT (CRM CORE)       */
        /* ========================================= */
        <div className="dashboard-card" style={{ flex: 1 }}>
          <div style={tabContainerStyle}>
            <button onClick={() => setCrmTab('profile')} style={getTabStyle(crmTab === 'profile')}><IconUser /> Profile</button>
            <button onClick={() => setCrmTab('history')} style={getTabStyle(crmTab === 'history')}><IconFile /> Med History</button>
            <button onClick={() => setCrmTab('family')} style={getTabStyle(crmTab === 'family')}><IconUsers /> Family</button>
            <button onClick={() => setCrmTab('docs')} style={getTabStyle(crmTab === 'docs')}><IconUpload /> Documents</button>
            <button onClick={() => setCrmTab('logs')} style={getTabStyle(crmTab === 'logs')}><IconMessage /> Comms Log</button>
          </div>

          <div style={{ minHeight: '420px', transition: 'all 0.3s ease' }}>
            {crmTab === 'profile' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>SJ</div>
                  <div>
                    <h2 style={{ fontSize: '1.8rem', margin: 0 }}>Sarah Jenkins</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Patient ID: #PT-8492 • Referral: Google Ads</p>
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ padding: '4px 12px', background: 'rgba(250, 204, 21, 0.2)', color: '#facc15', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>VIP</span>
                    <span style={{ padding: '4px 12px', background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>Orthodontic</span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="text" className="form-input" value="sarah.j@example.com" readOnly style={{ background: 'rgba(0,0,0,0.1)' }} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-input" value="+1 (555) 123-4567" readOnly style={{ background: 'rgba(0,0,0,0.1)' }} />
                  </div>
                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="form-label">Emergency Contact</label>
                    <input type="text" className="form-input" value="Mark Jenkins (Husband) - +1 (555) 987-6543" readOnly style={{ background: 'rgba(0,0,0,0.1)' }} />
                  </div>
                </div>
              </div>
            )}

            {crmTab === 'history' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h3 className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Medical Alerts</h3>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                    <span style={{ padding: '6px 14px', background: 'rgba(248, 113, 113, 0.2)', color: '#f87171', border: '1px solid rgba(248,113,113,0.4)', borderRadius: '8px' }}>Penicillin Allergy</span>
                    <span style={{ padding: '6px 14px', background: 'rgba(255, 255, 255, 0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px' }}>Asthma</span>
                  </div>
                </div>
                <div>
                  <h3 className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Past Procedures</h3>
                  <div className="activity-list" style={{ marginTop: '1rem' }}>
                    <div className="activity-item">
                      <div className="activity-icon green"><IconTooth /></div>
                      <div className="activity-details">
                        <div className="activity-title">Root Canal - Tooth #14</div>
                        <div className="activity-time">Dr. Smith • Aug 02, 2026</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {crmTab === 'family' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 className="section-header" style={{ margin: 0 }}>Linked Household Accounts</h3>
                  <button className="action-btn"><IconPlus /> Link Member</button>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(56,189,248,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>MJ</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 600, margin: 0 }}>Mark Jenkins</p>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Husband • #PT-8493</p>
                    </div>
                    <button className="action-btn" style={{ padding: '0.4rem 1rem' }}>View Profile</button>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(167,139,250,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>LJ</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 600, margin: 0 }}>Lily Jenkins</p>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Daughter (Age 8) • #PT-8494</p>
                    </div>
                    <button className="action-btn" style={{ padding: '0.4rem 1rem' }}>View Profile</button>
                  </div>
                </div>
              </div>
            )}

            {crmTab === 'docs' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 className="section-header" style={{ margin: 0 }}>Documents & X-Rays</h3>
                  <button className="action-btn primary"><IconUpload /> Upload File</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '12px', textAlign: 'center' }}>
                    <IconFile />
                    <p style={{ marginTop: '0.5rem', fontWeight: 500 }}>Intake_Form.pdf</p>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Signed on Jan 12, 2026</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '12px', textAlign: 'center' }}>
                    <IconFile />
                    <p style={{ marginTop: '0.5rem', fontWeight: 500 }}>Panorex_Xray.jpg</p>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Uploaded Aug 02, 2026</p>
                  </div>
                </div>
              </div>
            )}

            {crmTab === 'logs' && (
              <div>
                <h3 className="section-header" style={{ marginBottom: '1.5rem' }}>Communication Log</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon blue"><IconMessage /></div>
                    <div className="activity-details">
                      <div className="activity-title" style={{ fontSize: '0.9rem' }}>SMS Reminder Sent</div>
                      <div className="activity-time">"Hi Sarah, your appointment is tomorrow at 10 AM..."</div>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Sep 14, 2026</div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon pink">📞</div>
                    <div className="activity-details">
                      <div className="activity-title" style={{ fontSize: '0.9rem' }}>Outbound Call - Front Desk</div>
                      <div className="activity-time">Called to follow up on insurance clearance. Patient confirmed.</div>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Sep 10, 2026</div>
                  </div>
                </div>
                <button className="action-btn" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>
                  <IconPlus /> Add Log Entry
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
