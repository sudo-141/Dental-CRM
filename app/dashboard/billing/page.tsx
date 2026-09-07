'use client';
import React, { useState } from 'react';

const IconBilling = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2"/>
    <line x1="2" x2="22" y1="10" y2="10"/>
  </svg>
);

const IconTrendingUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

export default function BillingDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#fff' }}>
      <div className="dashboard-topbar">
        <div>
          <h1 className="dashboard-title">Billing & Accounts Portal</h1>
          <p className="dashboard-subtitle">Manage invoicing, insurance claims, and payment collections.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="action-btn"><IconTrendingUp /> Revenue Report</button>
          <button className="action-btn primary"><IconBilling /> Generate Invoice</button>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="dashboard-card" style={{ flex: 2 }}>
          <div className="section-header">Pending Insurance Claims</div>
          <table style={{ width: '100%', textAlign: 'left', marginTop: '1rem', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Patient</th>
                <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Provider</th>
                <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Amount</th>
                <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Status</th>
                <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem 0.75rem' }}>Michael Scott</td>
                <td style={{ padding: '1rem 0.75rem' }}>Delta Dental</td>
                <td style={{ padding: '1rem 0.75rem', fontWeight: 600 }}>$1,250.00</td>
                <td style={{ padding: '1rem 0.75rem' }}>
                  <span style={{ padding: '4px 10px', background: 'rgba(250, 204, 21, 0.2)', color: '#facc15', borderRadius: '12px', fontSize: '0.8rem' }}>Pending</span>
                </td>
                <td style={{ padding: '1rem 0.75rem' }}><button className="action-btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Review</button></td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem 0.75rem' }}>Dwight Schrute</td>
                <td style={{ padding: '1rem 0.75rem' }}>Cigna</td>
                <td style={{ padding: '1rem 0.75rem', fontWeight: 600 }}>$450.00</td>
                <td style={{ padding: '1rem 0.75rem' }}>
                  <span style={{ padding: '4px 10px', background: 'rgba(248, 113, 113, 0.2)', color: '#f87171', borderRadius: '12px', fontSize: '0.8rem' }}>Denied</span>
                </td>
                <td style={{ padding: '1rem 0.75rem' }}><button className="action-btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Appeal</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="dashboard-card" style={{ flex: 1 }}>
          <div className="section-header">Overdue Accounts</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600, color: '#f87171' }}>Angela Martin</span>
                <span style={{ fontWeight: 700 }}>$350.00</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>45 days overdue</div>
              <button className="action-btn" style={{ width: '100%', justifyContent: 'center' }}>Send Reminder</button>
            </div>
            
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600 }}>Toby Flenderson</span>
                <span style={{ fontWeight: 700 }}>$120.00</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>15 days overdue</div>
              <button className="action-btn" style={{ width: '100%', justifyContent: 'center' }}>Send Reminder</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
