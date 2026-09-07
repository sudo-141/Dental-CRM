'use client';
import React, { useState } from 'react';

const IconChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

const IconDownload = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// Reusable Bar Chart component mockup
function BarChart({ data }: { data: { label: string; value: number; height: string; color: string }[] }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem', height: '200px', padding: '1rem 0', marginTop: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      {data.map((item, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{item.value}</span>
          <div style={{ 
            width: '100%', 
            height: item.height, 
            background: `linear-gradient(180deg, ${item.color} 0%, rgba(255,255,255,0.05) 100%)`,
            borderRadius: '4px 4px 0 0',
            border: `1px solid ${item.color}`,
            borderBottom: 'none'
          }} />
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function ReportsDashboard() {
  const [activeTab, setActiveTab] = useState('revenue');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#fff' }}>
      {/* Top Bar */}
      <div className="dashboard-topbar">
        <div>
          <h1 className="dashboard-title">Reporting & Analytics</h1>
          <p className="dashboard-subtitle">Analyze revenue, patient acquisition, appointments, and operations.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <select style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.6rem 1rem', borderRadius: '8px', outline: 'none' }}>
            <option>Last 30 Days</option>
            <option>This Quarter</option>
            <option>Year to Date</option>
          </select>
          <button className="action-btn primary"><IconDownload /> Export PDF</button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '4px', gap: '4px', width: 'fit-content' }}>
        <button onClick={() => setActiveTab('revenue')} style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', background: activeTab === 'revenue' ? 'rgba(255,255,255,0.1)' : 'transparent', color: activeTab === 'revenue' ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500 }}>
          Financial & Revenue
        </button>
        <button onClick={() => setActiveTab('patients')} style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', background: activeTab === 'patients' ? 'rgba(255,255,255,0.1)' : 'transparent', color: activeTab === 'patients' ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500 }}>
          Patient Acquisition
        </button>
        <button onClick={() => setActiveTab('appointments')} style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', background: activeTab === 'appointments' ? 'rgba(255,255,255,0.1)' : 'transparent', color: activeTab === 'appointments' ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500 }}>
          Appointments & Ops
        </button>
      </div>

      {/* Main Content Areas */}
      {activeTab === 'revenue' && (
        <div className="dashboard-sections">
          <div className="dashboard-card" style={{ flex: 2 }}>
            <div className="section-header">Monthly Revenue Trend</div>
            <BarChart data={[
              { label: 'May', value: 42000, height: '60%', color: 'rgba(56, 189, 248, 0.8)' },
              { label: 'Jun', value: 45000, height: '65%', color: 'rgba(56, 189, 248, 0.8)' },
              { label: 'Jul', value: 41000, height: '58%', color: 'rgba(56, 189, 248, 0.8)' },
              { label: 'Aug', value: 52000, height: '75%', color: 'rgba(56, 189, 248, 0.8)' },
              { label: 'Sep', value: 58000, height: '85%', color: 'rgba(56, 189, 248, 0.8)' },
              { label: 'Oct', value: 64000, height: '100%', color: '#38bdf8' },
            ]} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Total Revenue (YTD)</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>$302,000</div>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Outstanding Dues</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f87171' }}>$12,450</div>
              </div>
            </div>
          </div>

          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="section-header">Revenue by Procedure</div>
            <table style={{ width: '100%', textAlign: 'left', marginTop: '1rem', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Category</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500, textAlign: 'right' }}>Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>General & Exams</td>
                  <td style={{ padding: '1rem 0.75rem', textAlign: 'right' }}>$145,000</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Orthodontics</td>
                  <td style={{ padding: '1rem 0.75rem', textAlign: 'right' }}>$85,000</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Cosmetic (Whitening)</td>
                  <td style={{ padding: '1rem 0.75rem', textAlign: 'right' }}>$42,000</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Oral Surgery</td>
                  <td style={{ padding: '1rem 0.75rem', textAlign: 'right' }}>$30,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'patients' && (
        <div className="dashboard-sections">
          <div className="dashboard-card" style={{ flex: 2 }}>
            <div className="section-header">Patient Acquisition</div>
            <BarChart data={[
              { label: 'May', value: 24, height: '40%', color: 'rgba(167, 139, 250, 0.8)' },
              { label: 'Jun', value: 31, height: '50%', color: 'rgba(167, 139, 250, 0.8)' },
              { label: 'Jul', value: 28, height: '45%', color: 'rgba(167, 139, 250, 0.8)' },
              { label: 'Aug', value: 45, height: '75%', color: 'rgba(167, 139, 250, 0.8)' },
              { label: 'Sep', value: 52, height: '85%', color: 'rgba(167, 139, 250, 0.8)' },
              { label: 'Oct', value: 65, height: '100%', color: '#a78bfa' },
            ]} />
          </div>

          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="section-header">Patient Demographics</div>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                  <span>Returning Patients</span>
                  <span style={{ fontWeight: 600 }}>68%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '68%', height: '100%', background: '#4ade80' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                  <span>New Patients</span>
                  <span style={{ fontWeight: 600 }}>32%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '32%', height: '100%', background: '#a78bfa' }}></div>
                </div>
              </div>
              
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>Top Referral Source</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>Google Search (45%)</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'appointments' && (
        <div className="dashboard-sections">
          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="section-header">Fill Rate & No-Shows</div>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
              <div style={{ flex: 1, textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: '2rem 1rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: '#4ade80' }}>92%</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>Average Fill Rate</div>
                <div style={{ fontSize: '0.8rem', color: '#4ade80', marginTop: '0.5rem' }}>↑ +2% vs last month</div>
              </div>
              <div style={{ flex: 1, textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: '2rem 1rem', borderRadius: '12px', border: '1px solid rgba(248,113,113,0.3)' }}>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: '#f87171' }}>4.5%</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>No-Show Rate</div>
                <div style={{ fontSize: '0.8rem', color: '#f87171', marginTop: '0.5rem' }}>12 Missed Appointments</div>
              </div>
            </div>
          </div>

          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="section-header">Inventory Usage</div>
            <table style={{ width: '100%', textAlign: 'left', marginTop: '1rem', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Category</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500, textAlign: 'right' }}>Monthly Spend</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Consumables (Gloves, Masks)</td>
                  <td style={{ padding: '1rem 0.75rem', textAlign: 'right' }}>$1,200</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Filling Materials</td>
                  <td style={{ padding: '1rem 0.75rem', textAlign: 'right' }}>$850</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Anesthesia</td>
                  <td style={{ padding: '1rem 0.75rem', textAlign: 'right' }}>$400</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
