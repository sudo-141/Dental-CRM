'use client';
import React from 'react';

const IconChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

export default function ReportsPage() {
  return (
    <>
      <div className="dashboard-topbar">
        <div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' }}>Super Admin &gt; Reports</div>
          <h1 className="dashboard-title">Reports & Analytics</h1>
          <p className="dashboard-subtitle">Platform-wide analytics, usage metrics, and growth trends.</p>
        </div>
        <div className="dashboard-actions">
          <select className="form-input" style={{ padding: '0.5rem 1rem' }}>
            <option>Last 30 Days</option>
            <option>Last Quarter</option>
            <option>Year to Date</option>
          </select>
          <button className="action-btn primary">Export CSV</button>
        </div>
      </div>

      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: '1rem' }}>
        <div className="dashboard-card">
          <div className="kpi-title">Total Active Users</div>
          <div className="kpi-value">12,450</div>
          <div className="kpi-trend positive">+8% this month</div>
        </div>
        <div className="dashboard-card">
          <div className="kpi-title">Total Platform MRR</div>
          <div className="kpi-value">$84,500</div>
          <div className="kpi-trend positive">+12% this month</div>
        </div>
        <div className="dashboard-card">
          <div className="kpi-title">API Requests (30d)</div>
          <div className="kpi-value">14.2M</div>
          <div className="kpi-trend positive">+2.1M this month</div>
        </div>
        <div className="dashboard-card">
          <div className="kpi-title">Avg Session Length</div>
          <div className="kpi-value">24m 10s</div>
          <div className="kpi-trend neutral">+1m vs avg</div>
        </div>
      </div>

      <div className="dashboard-sections" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '1rem' }}>
        <div>
          <h2 className="section-header">Revenue Growth (YTD)</h2>
          <div className="dashboard-card" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '1rem', left: '1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Monthly MRR ($)</div>
            {/* Mock Chart Area */}
            <div style={{ width: '100%', height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '0 2rem' }}>
              <div style={{ width: '40px', height: '40%', background: 'linear-gradient(to top, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.8))', borderRadius: '4px 4px 0 0' }}></div>
              <div style={{ width: '40px', height: '45%', background: 'linear-gradient(to top, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.8))', borderRadius: '4px 4px 0 0' }}></div>
              <div style={{ width: '40px', height: '60%', background: 'linear-gradient(to top, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.8))', borderRadius: '4px 4px 0 0' }}></div>
              <div style={{ width: '40px', height: '65%', background: 'linear-gradient(to top, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.8))', borderRadius: '4px 4px 0 0' }}></div>
              <div style={{ width: '40px', height: '80%', background: 'linear-gradient(to top, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.8))', borderRadius: '4px 4px 0 0' }}></div>
              <div style={{ width: '40px', height: '95%', background: 'linear-gradient(to top, rgba(16, 185, 129, 0.2), #10b981)', borderRadius: '4px 4px 0 0', boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}></div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="section-header">Active Organizations by Region</h2>
          <div className="dashboard-card" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            {/* Mock Pie/Donut Chart */}
            <div style={{ width: '180px', height: '180px', borderRadius: '50%', background: 'conic-gradient(#38bdf8 0% 45%, #a78bfa 45% 75%, #f472b6 75% 90%, #94a3b8 90% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#0f172a' }}></div>
            </div>
            <div style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#38bdf8' }}></span> North America (45%)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#a78bfa' }}></span> Europe (30%)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f472b6' }}></span> Asia Pacific (15%)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#94a3b8' }}></span> Other (10%)
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="section-header">User Growth (Last 6 Months)</h2>
          <div className="dashboard-card" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '1rem', left: '1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Active Users</div>
            {/* Mock Line Chart Area */}
            <svg width="100%" height="200" style={{ padding: '0 2rem' }} preserveAspectRatio="none">
              <path d="M 0 150 Q 50 120, 100 130 T 200 90 T 300 70 T 400 40 T 500 20" fill="none" stroke="#38bdf8" strokeWidth="4" />
              <circle cx="0" cy="150" r="4" fill="#fff" />
              <circle cx="100" cy="130" r="4" fill="#fff" />
              <circle cx="200" cy="90" r="4" fill="#fff" />
              <circle cx="300" cy="70" r="4" fill="#fff" />
              <circle cx="400" cy="40" r="4" fill="#fff" />
              <circle cx="500" cy="20" r="4" fill="#fff" />
            </svg>
          </div>
        </div>

        <div>
          <h2 className="section-header">Subscription Distribution</h2>
          <div className="dashboard-card" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <span>Enterprise</span>
                  <span>14% (46 orgs)</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                  <div style={{ width: '14%', height: '100%', background: '#ff4444', borderRadius: '4px' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <span>Professional</span>
                  <span>56% (184 orgs)</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                  <div style={{ width: '56%', height: '100%', background: '#a78bfa', borderRadius: '4px' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <span>Starter</span>
                  <span>30% (98 orgs)</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                  <div style={{ width: '30%', height: '100%', background: '#38bdf8', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
