'use client';
import React, { useState } from 'react';

const IconUsers = () => (
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

const IconTrendingUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

export default function EmployeesDashboard() {
  const [activeTab, setActiveTab] = useState('shifts');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#fff' }}>
      {/* Top Bar */}
      <div className="dashboard-topbar">
        <div>
          <h1 className="dashboard-title">Staff Management</h1>
          <p className="dashboard-subtitle">Manage shifts, performance, commissions, and leave.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="action-btn"><IconTrendingUp /> Performance Report</button>
          <button className="action-btn primary"><IconUsers /> Add Employee</button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '4px', gap: '4px', width: 'fit-content' }}>
        <button 
          onClick={() => setActiveTab('shifts')}
          style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', background: activeTab === 'shifts' ? 'rgba(255,255,255,0.1)' : 'transparent', color: activeTab === 'shifts' ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500 }}
        >
          Shifts & Schedule
        </button>
        <button 
          onClick={() => setActiveTab('performance')}
          style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', background: activeTab === 'performance' ? 'rgba(255,255,255,0.1)' : 'transparent', color: activeTab === 'performance' ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500 }}
        >
          Performance & Commissions
        </button>
        <button 
          onClick={() => setActiveTab('leave')}
          style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', background: activeTab === 'leave' ? 'rgba(255,255,255,0.1)' : 'transparent', color: activeTab === 'leave' ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500 }}
        >
          Leave Management
        </button>
      </div>

      {/* Main Content Areas */}
      {activeTab === 'shifts' && (
        <div className="dashboard-sections">
          <div className="dashboard-card" style={{ flex: 2 }}>
            <div className="section-header">Today's Shift Roster</div>
            <table style={{ width: '100%', textAlign: 'left', marginTop: '1rem', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Employee</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Role</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Shift Time</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Dr. Sarah Smith</td>
                  <td style={{ padding: '1rem 0.75rem', color: 'rgba(255,255,255,0.7)' }}>Lead Dentist</td>
                  <td style={{ padding: '1rem 0.75rem' }}>09:00 AM - 05:00 PM</td>
                  <td style={{ padding: '1rem 0.75rem' }}><span style={{ padding: '4px 10px', background: 'rgba(74, 222, 128, 0.2)', color: '#4ade80', borderRadius: '12px', fontSize: '0.75rem' }}>Clocked In</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Pam Beesly</td>
                  <td style={{ padding: '1rem 0.75rem', color: 'rgba(255,255,255,0.7)' }}>Front Desk</td>
                  <td style={{ padding: '1rem 0.75rem' }}>08:30 AM - 04:30 PM</td>
                  <td style={{ padding: '1rem 0.75rem' }}><span style={{ padding: '4px 10px', background: 'rgba(74, 222, 128, 0.2)', color: '#4ade80', borderRadius: '12px', fontSize: '0.75rem' }}>Clocked In</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Angela Martin</td>
                  <td style={{ padding: '1rem 0.75rem', color: 'rgba(255,255,255,0.7)' }}>Billing</td>
                  <td style={{ padding: '1rem 0.75rem' }}>10:00 AM - 06:00 PM</td>
                  <td style={{ padding: '1rem 0.75rem' }}><span style={{ padding: '4px 10px', background: 'rgba(250, 204, 21, 0.2)', color: '#facc15', borderRadius: '12px', fontSize: '0.75rem' }}>Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="section-header">Weekly Coverage</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', padding: '1rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#f87171', fontWeight: 600, marginBottom: '0.25rem' }}>Short Staffed Alert</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Thursday afternoon lacks a secondary hygienist.</p>
                <button className="action-btn" style={{ marginTop: '0.75rem', fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>Request Coverage</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'performance' && (
        <div className="dashboard-sections">
          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="section-header">Provider Performance (This Month)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', fontSize: '1.2rem', fontWeight: 600 }}>SS</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Dr. Sarah Smith</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
                    <span>Patients: 142</span>
                    <span>Revenue: $24,500</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(167, 139, 250, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa', fontSize: '1.2rem', fontWeight: 600 }}>JD</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Dr. John Doe</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
                    <span>Patients: 98</span>
                    <span>Revenue: $18,200</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="section-header">Incentives & Commissions</div>
            <table style={{ width: '100%', textAlign: 'left', marginTop: '1rem', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Employee</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Target Hit</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Commission</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Dr. Sarah Smith</td>
                  <td style={{ padding: '1rem 0.75rem', color: '#4ade80' }}>110%</td>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 600 }}>$2,450</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Dr. John Doe</td>
                  <td style={{ padding: '1rem 0.75rem', color: '#facc15' }}>90%</td>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 600 }}>$1,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'leave' && (
        <div className="dashboard-sections">
          <div className="dashboard-card" style={{ flex: 2 }}>
            <div className="section-header">Leave Requests</div>
            <table style={{ width: '100%', textAlign: 'left', marginTop: '1rem', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Employee</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Dates</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Type</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Toby Flenderson</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Oct 12 - Oct 14</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Sick Leave</td>
                  <td style={{ padding: '1rem 0.75rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="action-btn" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem', background: 'rgba(74, 222, 128, 0.2)', color: '#4ade80', border: 'none' }}>Approve</button>
                      <button className="action-btn" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem', background: 'rgba(248, 113, 113, 0.2)', color: '#f87171', border: 'none' }}>Deny</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
