'use client';
import React, { useState } from 'react';

const IconTooth = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-2-2-5-2-7 0a4 4 0 0 1-5-6c1-5 2-6 3-10a4 4 0 0 1 8 0c1 4 2 5 3 10a4 4 0 0 1-5 6z" />
    <path d="M12 21v-4" />
  </svg>
);

const IconFileText = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const IconPlus = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function TreatmentsDashboard() {
  const [activeTab, setActiveTab] = useState('chart');

  // Simple Odontogram mock data
  const teeth = Array.from({ length: 16 }, (_, i) => i + 1);
  const bottomTeeth = Array.from({ length: 16 }, (_, i) => i + 17);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#fff' }}>
      {/* Top Bar */}
      <div className="dashboard-topbar">
        <div>
          <h1 className="dashboard-title">Clinical & Treatments</h1>
          <p className="dashboard-subtitle">Manage dental charts, treatment plans, prescriptions, and lab orders.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Active Patient:</span>
            <span style={{ fontWeight: 600 }}>Michael Scott</span>
            <button style={{ background: 'transparent', border: 'none', color: '#38bdf8', cursor: 'pointer', fontSize: '0.8rem', marginLeft: '0.5rem' }}>Change</button>
          </div>
          <button className="action-btn primary"><IconPlus /> New Plan</button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '4px', gap: '4px', width: 'fit-content' }}>
        <button onClick={() => setActiveTab('chart')} style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', background: activeTab === 'chart' ? 'rgba(255,255,255,0.1)' : 'transparent', color: activeTab === 'chart' ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500 }}>
          Digital Chart
        </button>
        <button onClick={() => setActiveTab('plans')} style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', background: activeTab === 'plans' ? 'rgba(255,255,255,0.1)' : 'transparent', color: activeTab === 'plans' ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500 }}>
          Treatment Plans
        </button>
        <button onClick={() => setActiveTab('notes')} style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', background: activeTab === 'notes' ? 'rgba(255,255,255,0.1)' : 'transparent', color: activeTab === 'notes' ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500 }}>
          Clinical Notes
        </button>
        <button onClick={() => setActiveTab('prescriptions')} style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', background: activeTab === 'prescriptions' ? 'rgba(255,255,255,0.1)' : 'transparent', color: activeTab === 'prescriptions' ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500 }}>
          Prescriptions & Labs
        </button>
      </div>

      {/* Main Content Areas */}
      {activeTab === 'chart' && (
        <div className="dashboard-sections">
          <div className="dashboard-card" style={{ flex: 2 }}>
            <div className="section-header">Odontogram (Tooth Chart)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', marginTop: '2rem', paddingBottom: '1rem' }}>
              
              {/* Upper Arch */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {teeth.map(t => (
                  <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{t}</div>
                    <div style={{ 
                      width: '32px', height: '40px', 
                      background: t === 3 ? 'rgba(248,113,113,0.2)' : t === 8 ? 'rgba(96,165,250,0.2)' : 'rgba(255,255,255,0.05)', 
                      border: `1px solid ${t === 3 ? '#f87171' : t === 8 ? '#60a5fa' : 'rgba(255,255,255,0.2)'}`, 
                      borderRadius: '4px',
                      cursor: 'pointer', transition: 'all 0.2s'
                    }} />
                  </div>
                ))}
              </div>
              
              {/* Lower Arch */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {bottomTeeth.map(t => (
                  <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ 
                      width: '32px', height: '40px', 
                      background: t === 19 ? 'rgba(74,222,128,0.2)' : 'rgba(255,255,255,0.05)', 
                      border: `1px solid ${t === 19 ? '#4ade80' : 'rgba(255,255,255,0.2)'}`, 
                      borderRadius: '4px',
                      cursor: 'pointer', transition: 'all 0.2s'
                    }} />
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{t}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: '12px', height: '12px', background: '#f87171', borderRadius: '2px' }}></div> <span style={{ fontSize: '0.8rem' }}>Decay / Cavity</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: '12px', height: '12px', background: '#60a5fa', borderRadius: '2px' }}></div> <span style={{ fontSize: '0.8rem' }}>Filling Present</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: '12px', height: '12px', background: '#4ade80', borderRadius: '2px' }}></div> <span style={{ fontSize: '0.8rem' }}>Crown</span></div>
              </div>
            </div>
          </div>

          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="section-header">Procedure Log</div>
            <div className="activity-list" style={{ marginTop: '1rem' }}>
              <div className="activity-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                <div className="activity-details">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="activity-title" style={{ color: '#60a5fa' }}>Composite Filling (Tooth #8)</div>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Oct 12, 2025</span>
                  </div>
                  <div className="activity-time" style={{ marginTop: '0.5rem' }}>Dr. Sarah Smith</div>
                </div>
              </div>
              <div className="activity-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                <div className="activity-details">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="activity-title">Comprehensive Exam & X-Ray</div>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Apr 05, 2025</span>
                  </div>
                  <div className="activity-time" style={{ marginTop: '0.5rem' }}>Dr. John Doe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'plans' && (
        <div className="dashboard-sections">
          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="section-header">Treatment Plan Builder</div>
            <table style={{ width: '100%', textAlign: 'left', marginTop: '1rem', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Tooth</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Procedure</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Est. Cost</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Status</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem' }}>#3</td>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Root Canal Therapy</td>
                  <td style={{ padding: '1rem 0.75rem' }}>$850.00</td>
                  <td style={{ padding: '1rem 0.75rem' }}><span style={{ padding: '4px 10px', background: 'rgba(250, 204, 21, 0.2)', color: '#facc15', borderRadius: '12px', fontSize: '0.75rem' }}>Proposed</span></td>
                  <td style={{ padding: '1rem 0.75rem' }}><button className="action-btn" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}>Edit</button></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem' }}>#3</td>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Porcelain Crown</td>
                  <td style={{ padding: '1rem 0.75rem' }}>$1,200.00</td>
                  <td style={{ padding: '1rem 0.75rem' }}><span style={{ padding: '4px 10px', background: 'rgba(250, 204, 21, 0.2)', color: '#facc15', borderRadius: '12px', fontSize: '0.75rem' }}>Proposed</span></td>
                  <td style={{ padding: '1rem 0.75rem' }}><button className="action-btn" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}>Edit</button></td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Total Estimate</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>$2,050.00</div>
                <button className="action-btn primary" style={{ marginTop: '0.5rem' }}>Send to Billing</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'notes' && (
        <div className="dashboard-sections">
          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="section-header">Clinical Notes (SOAP)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>Subjective (S)</h4>
                  <p style={{ fontSize: '0.9rem', color: '#fff' }}>Patient complains of sharp pain in upper right quadrant, especially when chewing or drinking cold liquids. Pain started 3 days ago.</p>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>Objective (O)</h4>
                  <p style={{ fontSize: '0.9rem', color: '#fff' }}>Tooth #3 sensitive to percussion and cold. Deep carious lesion visible on mesial surface. No swelling or sinus tract.</p>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>Assessment (A)</h4>
                  <p style={{ fontSize: '0.9rem', color: '#fff' }}>Irreversible pulpitis with symptomatic apical periodontitis #3.</p>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>Plan (P)</h4>
                  <p style={{ fontSize: '0.9rem', color: '#fff' }}>Discussed RCT vs extraction. Patient opted for RCT. Prescribed Amoxicillin 500mg. RCT scheduled for next week.</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                <button className="action-btn">Load Template</button>
                <button className="action-btn primary">Save Notes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'prescriptions' && (
        <div className="dashboard-sections">
          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="section-header">Active Prescriptions</div>
            <table style={{ width: '100%', textAlign: 'left', marginTop: '1rem', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Medication</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Dosage / Instructions</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Date Prescribed</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Provider</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Amoxicillin 500mg</td>
                  <td style={{ padding: '1rem 0.75rem', color: 'rgba(255,255,255,0.8)' }}>1 cap PO TID for 7 days</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Today</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Dr. Sarah Smith</td>
                </tr>
              </tbody>
            </table>
            <button className="action-btn" style={{ marginTop: '1rem' }}><IconPlus /> New Prescription</button>
          </div>

          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="section-header">Lab Orders</div>
            <div className="activity-list" style={{ marginTop: '1rem' }}>
              <div className="activity-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                <div className="activity-details">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="activity-title">PFM Crown (Tooth #19)</div>
                    <span style={{ padding: '4px 10px', background: 'rgba(250, 204, 21, 0.2)', color: '#facc15', borderRadius: '12px', fontSize: '0.75rem' }}>In Lab</span>
                  </div>
                  <div className="activity-time" style={{ marginTop: '0.5rem' }}>Sent to: Apex Dental Labs • Est Return: Oct 15</div>
                </div>
              </div>
            </div>
            <button className="action-btn" style={{ marginTop: '1rem' }}><IconPlus /> Create Lab Order</button>
          </div>
        </div>
      )}
    </div>
  );
}
