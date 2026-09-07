'use client';
import React, { useState } from 'react';

const IconInventory = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7.5 4.27 9 5.15"/>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
    <path d="m3.3 7 8.7 5 8.7-5"/>
    <path d="M12 22V12"/>
  </svg>
);

const IconAlertCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export default function InventoryDashboard() {
  const [activeTab, setActiveTab] = useState('stock');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#fff' }}>
      {/* Top Bar */}
      <div className="dashboard-topbar">
        <div>
          <h1 className="dashboard-title">Inventory & Supplies</h1>
          <p className="dashboard-subtitle">Manage dental materials, suppliers, purchase orders, and expiries.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="action-btn"><IconInventory /> Generate PO</button>
          <button className="action-btn primary"><IconInventory /> Add Item</button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '4px', gap: '4px', width: 'fit-content' }}>
        <button 
          onClick={() => setActiveTab('stock')}
          style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', background: activeTab === 'stock' ? 'rgba(255,255,255,0.1)' : 'transparent', color: activeTab === 'stock' ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500 }}
        >
          Stock & Alerts
        </button>
        <button 
          onClick={() => setActiveTab('expiry')}
          style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', background: activeTab === 'expiry' ? 'rgba(255,255,255,0.1)' : 'transparent', color: activeTab === 'expiry' ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500 }}
        >
          Expiry Tracking
        </button>
        <button 
          onClick={() => setActiveTab('suppliers')}
          style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', background: activeTab === 'suppliers' ? 'rgba(255,255,255,0.1)' : 'transparent', color: activeTab === 'suppliers' ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500 }}
        >
          Suppliers & POs
        </button>
      </div>

      {/* Main Content Areas */}
      {activeTab === 'stock' && (
        <div className="dashboard-sections">
          <div className="dashboard-card" style={{ flex: 2 }}>
            <div className="section-header">Material Stock Levels</div>
            <table style={{ width: '100%', textAlign: 'left', marginTop: '1rem', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Item Name</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Category</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Stock Qty</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Lidocaine 2%</td>
                  <td style={{ padding: '1rem 0.75rem', color: 'rgba(255,255,255,0.7)' }}>Anesthesia</td>
                  <td style={{ padding: '1rem 0.75rem' }}>14 boxes</td>
                  <td style={{ padding: '1rem 0.75rem' }}><span style={{ padding: '4px 10px', background: 'rgba(74, 222, 128, 0.2)', color: '#4ade80', borderRadius: '12px', fontSize: '0.75rem' }}>Healthy</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Nitrile Gloves (M)</td>
                  <td style={{ padding: '1rem 0.75rem', color: 'rgba(255,255,255,0.7)' }}>Consumables</td>
                  <td style={{ padding: '1rem 0.75rem', color: '#f87171', fontWeight: 600 }}>2 boxes</td>
                  <td style={{ padding: '1rem 0.75rem' }}><span style={{ padding: '4px 10px', background: 'rgba(248, 113, 113, 0.2)', color: '#f87171', borderRadius: '12px', fontSize: '0.75rem' }}>Low Stock</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Composite Resin (A2)</td>
                  <td style={{ padding: '1rem 0.75rem', color: 'rgba(255,255,255,0.7)' }}>Filling Material</td>
                  <td style={{ padding: '1rem 0.75rem' }}>8 syringes</td>
                  <td style={{ padding: '1rem 0.75rem' }}><span style={{ padding: '4px 10px', background: 'rgba(250, 204, 21, 0.2)', color: '#facc15', borderRadius: '12px', fontSize: '0.75rem' }}>Reorder Soon</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dashboard-card" style={{ flex: 1, borderColor: 'rgba(248,113,113,0.3)' }}>
            <div className="section-header" style={{ color: '#f87171' }}><IconAlertCircle /> Critical Alerts</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ background: 'rgba(248,113,113,0.1)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ fontWeight: 600, color: '#f87171' }}>Nitrile Gloves (M)</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.25rem' }}>Only 2 boxes left. Expected usage: 3 boxes/week.</div>
                <button className="action-btn" style={{ marginTop: '0.75rem', fontSize: '0.8rem', padding: '0.4rem 0.8rem', width: '100%', justifyContent: 'center' }}>Quick Reorder</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'expiry' && (
        <div className="dashboard-sections">
          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="section-header">Expiring Materials (Next 90 Days)</div>
            <table style={{ width: '100%', textAlign: 'left', marginTop: '1rem', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Item Name</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Batch No.</th>
                  <th style={{ padding: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Expiry Date</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Articaine 4%</td>
                  <td style={{ padding: '1rem 0.75rem', color: 'rgba(255,255,255,0.7)' }}>BTH-4921</td>
                  <td style={{ padding: '1rem 0.75rem', color: '#f87171', fontWeight: 600 }}>Oct 15, 2026 (15 days)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 500 }}>Fluoride Varnish</td>
                  <td style={{ padding: '1rem 0.75rem', color: 'rgba(255,255,255,0.7)' }}>BTH-1109</td>
                  <td style={{ padding: '1rem 0.75rem', color: '#facc15' }}>Nov 20, 2026 (51 days)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'suppliers' && (
        <div className="dashboard-sections">
          <div className="dashboard-card" style={{ flex: 1 }}>
            <div className="section-header">Pending Purchase Orders</div>
            <div className="activity-list" style={{ marginTop: '1rem' }}>
              <div className="activity-item" style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                <div className="activity-details">
                  <div className="activity-title">PO #1042 - DentalSupply Co.</div>
                  <div className="activity-time">Submitted 2 days ago • Expected Delivery: Oct 02</div>
                  <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                    Items: Nitrile Gloves (10x), Saliva Ejectors (5x)
                  </div>
                </div>
                <div className="activity-status pending">In Transit</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
