'use client';
import React from 'react';

export default function DataManagementPage() {
  return (
    <>
      <div className="dashboard-topbar">
        <div>
          <h1 className="dashboard-title">Data Management</h1>
          <p className="dashboard-subtitle">Access, manage, export, archive, or remove system-wide data when required.</p>
        </div>
      </div>

      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '1rem' }}>
        <div className="dashboard-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <h3 className="section-header" style={{ marginBottom: '0.5rem', justifyContent: 'center' }}>Export Data</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>Download comprehensive system dumps (JSON/CSV) for analysis or compliance.</p>
          </div>
          <button className="action-btn primary" style={{ width: '100%', justifyContent: 'center' }}>New Export</button>
        </div>

        <div className="dashboard-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="21 8 21 21 3 21 3 8"/>
              <rect width="22" height="5" x="1" y="3" rx="1"/>
              <line x1="10" x2="14" y1="12" y2="12"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <h3 className="section-header" style={{ marginBottom: '0.5rem', justifyContent: 'center' }}>Archive Old Data</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>Move records older than 5 years to cold storage to optimize performance.</p>
          </div>
          <button className="action-btn" style={{ width: '100%', justifyContent: 'center' }}>Run Archiver</button>
        </div>

        <div className="dashboard-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem', border: '1px solid rgba(255, 68, 68, 0.3)' }}>
          <div style={{ padding: '1rem', background: 'rgba(255, 68, 68, 0.1)', borderRadius: '50%' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18"/>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
              <line x1="10" x2="10" y1="11" y2="17"/>
              <line x1="14" x2="14" y1="11" y2="17"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <h3 className="section-header" style={{ marginBottom: '0.5rem', justifyContent: 'center', color: '#ff4444' }}>Data Purge</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>Permanently delete inactive organizations and associated data.</p>
          </div>
          <button className="action-btn" style={{ width: '100%', justifyContent: 'center', color: '#ff4444', borderColor: 'rgba(255,68,68,0.5)' }}>Initiate Purge</button>
        </div>
      </div>
    </>
  );
}
