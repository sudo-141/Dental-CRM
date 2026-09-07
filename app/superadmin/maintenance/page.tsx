'use client';
import React from 'react';

const IconTool = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function MaintenancePage() {
  return (
    <>
      <div className="dashboard-topbar">
        <div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' }}>Super Admin &gt; System Maintenance</div>
          <h1 className="dashboard-title">System Maintenance</h1>
          <p className="dashboard-subtitle">Platform health, background jobs, cache management, and system updates.</p>
        </div>
      </div>

      <div className="dashboard-sections" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '1rem' }}>
        <div>
          <h2 className="section-header">System Controls</h2>
          <div className="dashboard-card">
            <div className="sa-list">
              <div className="sa-list-item">
                <div className="sa-list-icon blue"><IconTool /></div>
                <div className="sa-list-body">
                  <div className="sa-list-title">Clear Global Cache</div>
                  <div className="sa-list-meta">Frees up memory. Last cleared: 2 days ago</div>
                </div>
                <div className="dashboard-actions">
                  <button className="action-btn">Clear Now</button>
                </div>
              </div>
              <div className="sa-list-item">
                <div className="sa-list-icon purple"><IconTool /></div>
                <div className="sa-list-body">
                  <div className="sa-list-title">Rebuild Search Indexes</div>
                  <div className="sa-list-meta">Optimizes search queries across all tenants</div>
                </div>
                <div className="sa-list-actions">
                  <button className="action-btn">Start Rebuild</button>
                </div>
              </div>
              <div className="sa-list-item">
                <div className="sa-list-icon pink"><IconTool /></div>
                <div className="sa-list-body">
                  <div className="sa-list-title">Enable Maintenance Mode</div>
                  <div className="sa-list-meta">Temporarily blocks all non-admin logins</div>
                </div>
                <div className="sa-list-actions">
                  <button className="action-btn" style={{ color: '#ff4444' }}>Enable</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="section-header">Scheduled Jobs</h2>
          <div className="dashboard-card">
            <div className="sa-list">
              <div className="sa-list-item">
                <div className="sa-list-icon green" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}><IconClock /></div>
                <div className="sa-list-body">
                  <div className="sa-list-title">Daily Automated Backups</div>
                  <div className="sa-list-meta">Runs every day at 03:00 UTC | Next run: in 6 hours</div>
                </div>
                <div className="sa-list-actions">
                  <div className="sa-badge green">Active</div>
                  <button className="action-btn">Edit</button>
                </div>
              </div>
              <div className="sa-list-item">
                <div className="sa-list-icon green" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}><IconClock /></div>
                <div className="sa-list-body">
                  <div className="sa-list-title">Billing & Invoice Generation</div>
                  <div className="sa-list-meta">Runs on 1st of every month | Next run: Oct 1, 2026</div>
                </div>
                <div className="sa-list-actions">
                  <div className="sa-badge green">Active</div>
                  <button className="action-btn">Edit</button>
                </div>
              </div>
              <div className="sa-list-item">
                <div className="sa-list-icon blue" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}><IconClock /></div>
                <div className="sa-list-body">
                  <div className="sa-list-title">Weekly Analytics Aggregation</div>
                  <div className="sa-list-meta">Runs every Sunday at 00:00 UTC | Next run: in 2 days</div>
                </div>
                <div className="sa-list-actions">
                  <div className="sa-badge green">Active</div>
                  <button className="action-btn">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
