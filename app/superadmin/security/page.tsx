'use client';
import React, { useState } from 'react';
import Modal from '../components/Modal';
import Toast, { ToastType } from '../components/Toast';

const IconMonitor = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const IconShieldAlert = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

export default function SecurityPage() {
  const [sessionToTerminate, setSessionToTerminate] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const showToast = (message: string, type: ToastType = 'success') => setToast({ message, type });

  const handleTerminate = () => {
    setSessionToTerminate(null);
    showToast('Session terminated successfully.', 'success');
  };

  return (
    <>
      <div className="dashboard-topbar">
        <div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' }}>Super Admin &gt; Security</div>
          <h1 className="dashboard-title">Security & Access Control</h1>
          <p className="dashboard-subtitle">Monitor login activity, manage sessions, enforce security rules, and control privileged access.</p>
        </div>
        <div className="dashboard-actions">
          <button className="action-btn primary" onClick={() => showToast('Policies updated successfully!', 'success')}>Update Policies</button>
        </div>
      </div>

      <div className="dashboard-sections" style={{ gridTemplateColumns: '1fr', marginTop: '1rem' }}>
        <div>
          <h2 className="section-header">Global Security Policies</h2>
          <div className="dashboard-card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', fontSize: '1.05rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked className="remember-checkbox" /> 
                <span>Require Two-Factor Authentication (2FA) for all Super Admins</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', fontSize: '1.05rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked className="remember-checkbox" /> 
                <span>Require 2FA for all users</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', fontSize: '1.05rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked className="remember-checkbox" /> 
                <span>Enforce strong passwords (min 12 chars, numbers, symbols)</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', fontSize: '1.05rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked className="remember-checkbox" /> 
                <span>Auto-block IP after 5 failed login attempts</span>
              </label>
              
              <div className="form-group" style={{ marginTop: '1.5rem', maxWidth: '300px' }}>
                <label className="form-label">Session Timeout (minutes)</label>
                <input type="number" className="form-input" defaultValue={60} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
          <div>
            <h2 className="section-header">IP Whitelisting (Super Admin)</h2>
            <div className="dashboard-card">
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>Restrict Super Admin logins to these IP addresses.</p>
              <div className="sa-list">
                <div className="sa-list-item" style={{ padding: '0.75rem 0' }}>
                  <div className="sa-list-body">
                    <div className="sa-list-title" style={{ fontSize: '1rem' }}>192.168.1.104</div>
                    <div className="sa-list-meta">HQ Office Network</div>
                  </div>
                  <div className="sa-list-actions">
                    <button className="action-btn" style={{ color: '#ff4444' }} onClick={() => showToast('IP removed from whitelist.', 'info')}>Remove</button>
                  </div>
                </div>
                <div className="sa-list-item" style={{ padding: '0.75rem 0' }}>
                  <div className="sa-list-body">
                    <div className="sa-list-title" style={{ fontSize: '1rem' }}>203.0.113.42</div>
                    <div className="sa-list-meta">VPN Gateway</div>
                  </div>
                  <div className="sa-list-actions">
                    <button className="action-btn" style={{ color: '#ff4444' }} onClick={() => showToast('IP removed from whitelist.', 'info')}>Remove</button>
                  </div>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <input type="text" className="form-input" placeholder="e.g. 198.51.100.0/24" style={{ flex: 1, padding: '0.5rem 1rem' }} />
                  <button className="action-btn primary" style={{ padding: '0.5rem 1rem' }} onClick={() => showToast('IP added to whitelist!', 'success')}>Add IP</button>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="section-header">Blocked IPs</h2>
            <div className="dashboard-card">
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>IPs currently blocked due to suspicious activity.</p>
              <div className="sa-list">
                <div className="sa-list-item" style={{ padding: '0.75rem 0' }}>
                  <div className="sa-list-icon pink" style={{ width: '32px', height: '32px' }}><IconShieldAlert /></div>
                  <div className="sa-list-body">
                    <div className="sa-list-title" style={{ fontSize: '1rem' }}>45.22.11.9</div>
                    <div className="sa-list-meta">Blocked: Today, 11:05 AM (Multiple failed logins)</div>
                  </div>
                  <div className="sa-list-actions">
                    <button className="action-btn" onClick={() => showToast('IP unblocked.', 'success')}>Unblock</button>
                  </div>
                </div>
                <div className="sa-list-item" style={{ padding: '0.75rem 0' }}>
                  <div className="sa-list-icon pink" style={{ width: '32px', height: '32px' }}><IconShieldAlert /></div>
                  <div className="sa-list-body">
                    <div className="sa-list-title" style={{ fontSize: '1rem' }}>185.15.22.100</div>
                    <div className="sa-list-meta">Blocked: Yesterday, 03:22 PM (API abuse)</div>
                  </div>
                  <div className="sa-list-actions">
                    <button className="action-btn" onClick={() => showToast('IP unblocked.', 'success')}>Unblock</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h2 className="section-header">Active Super Admin & Admin Sessions</h2>
          <div className="dashboard-card">
            <div className="sa-list">
              <div className="sa-list-item">
                <div className="sa-list-icon blue"><IconMonitor /></div>
                <div className="sa-list-body">
                  <div className="sa-list-title">superadmin@dentalcrm.com</div>
                  <div className="sa-list-meta">IP: 192.168.1.104 | Device: Mac OS / Chrome | Last Active: Just now</div>
                </div>
                <div className="sa-list-actions">
                  <div className="sa-badge green">Current Session</div>
                </div>
              </div>
              
              <div className="sa-list-item">
                <div className="sa-list-icon purple"><IconMonitor /></div>
                <div className="sa-list-body">
                  <div className="sa-list-title">admin@citydental.com</div>
                  <div className="sa-list-meta">IP: 203.0.113.42 | Device: Windows / Firefox | Last Active: 10 mins ago</div>
                </div>
                <div className="sa-list-actions">
                  <button className="action-btn" style={{ color: '#ff4444' }} onClick={() => setSessionToTerminate('admin@citydental.com')}>Terminate</button>
                </div>
              </div>

              <div className="sa-list-item">
                <div className="sa-list-icon purple"><IconMonitor /></div>
                <div className="sa-list-body">
                  <div className="sa-list-title">admin@smileclinic.com</div>
                  <div className="sa-list-meta">IP: 198.51.100.12 | Device: iOS / Safari | Last Active: 45 mins ago</div>
                </div>
                <div className="sa-list-actions">
                  <button className="action-btn" style={{ color: '#ff4444' }} onClick={() => setSessionToTerminate('admin@smileclinic.com')}>Terminate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={!!sessionToTerminate} onClose={() => setSessionToTerminate(null)} title="Terminate Session">
        <div style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
          Are you sure you want to terminate the session for <strong>{sessionToTerminate}</strong>? They will be logged out immediately.
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button className="action-btn" onClick={() => setSessionToTerminate(null)}>Cancel</button>
          <button className="action-btn" style={{ background: '#ff4444', borderColor: '#ff4444' }} onClick={handleTerminate}>Terminate Session</button>
        </div>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}

