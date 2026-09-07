'use client';
import React, { useState, useEffect } from 'react';
import Toast, { ToastType } from '../components/Toast';

const IconActivity = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

const IconAlert = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export default function AuditPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const showToast = (message: string, type: ToastType = 'success') => setToast({ message, type });

  // Mock filtering effect
  useEffect(() => {
    if (startDate && endDate) {
      showToast(`Filtered logs from ${startDate} to ${endDate}`, 'info');
    } else if (startDate || endDate) {
      showToast('Date filter updated', 'info');
    }
  }, [startDate, endDate]);

  return (
    <>
      <div className="dashboard-topbar">
        <div>
          <h1 className="dashboard-title">Audit & Activity Monitoring</h1>
          <p className="dashboard-subtitle">View system-wide activities and logs to know who performed what action and when.</p>
        </div>
        <div className="dashboard-actions">
          <button className="action-btn" onClick={() => showToast('Exporting logs to CSV...', 'success')}>Export Logs (CSV)</button>
        </div>
      </div>

      <div className="dashboard-card" style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>From</span>
            <input 
              type="date" 
              className="form-input" 
              style={{ maxWidth: '150px', padding: '0.6rem 1rem' }} 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>To</span>
            <input 
              type="date" 
              className="form-input" 
              style={{ maxWidth: '150px', padding: '0.6rem 1rem' }} 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <select className="form-input" style={{ maxWidth: '200px', padding: '0.6rem 1rem' }} onChange={() => showToast('Module filter applied', 'info')}>
            <option>All Modules</option>
            <option>Authentication</option>
            <option>Billing</option>
            <option>Users</option>
          </select>
          <input type="text" className="form-input" placeholder="Search logs..." style={{ flex: 1, padding: '0.6rem 1rem', minWidth: '200px' }} />
        </div>

        <div className="sa-list">
          <div className="sa-list-item">
            <div className="sa-list-icon blue"><IconActivity /></div>
            <div className="sa-list-body">
              <div className="sa-list-title">Viewed Audit Logs - [System]</div>
              <div className="sa-list-meta">By superadmin@dentalcrm.com | IP: 192.168.1.104 | 2026-09-01 21:05:12</div>
            </div>
          </div>
          
          <div className="sa-list-item">
            <div className="sa-list-icon green"><IconActivity /></div>
            <div className="sa-list-body">
              <div className="sa-list-title">Successful Login - [Authentication]</div>
              <div className="sa-list-meta">By admin@dentalcrm.com | IP: 203.0.113.42 | 2026-09-01 20:42:05</div>
            </div>
          </div>
          
          <div className="sa-list-item">
            <div className="sa-list-icon purple"><IconActivity /></div>
            <div className="sa-list-body">
              <div className="sa-list-title">Generated invoices for 12 organizations - [Billing]</div>
              <div className="sa-list-meta">By system@dentalcrm.com | IP: 127.0.0.1 | 2026-09-01 19:15:33</div>
            </div>
          </div>
          
          <div className="sa-list-item">
            <div className="sa-list-icon pink"><IconAlert /></div>
            <div className="sa-list-body">
              <div className="sa-list-title" style={{ color: '#f87171' }}>Failed Login Attempt (admin@dentalcrm.com) - [Authentication]</div>
              <div className="sa-list-meta">By unknown | IP: 45.22.11.9 | 2026-09-01 18:02:11</div>
            </div>
          </div>
        </div>
      </div>
      
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}

