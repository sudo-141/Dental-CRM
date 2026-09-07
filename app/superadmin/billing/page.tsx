'use client';
import React, { useState } from 'react';
import Modal from '../components/Modal';
import Toast, { ToastType } from '../components/Toast';

const IconInvoice = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const IconPlan = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

export default function BillingPage() {
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const showToast = (message: string, type: ToastType = 'success') => setToast({ message, type });

  const handleGenerateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    setIsInvoiceModalOpen(false);
    showToast('Invoice generated successfully!');
  };

  const handleCancelSub = () => {
    setIsCancelModalOpen(false);
    showToast('Subscription cancelled successfully.', 'success');
  };

  return (
    <>
      <div className="dashboard-topbar">
        <div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' }}>Super Admin &gt; Billing &amp; Subscriptions</div>
          <h1 className="dashboard-title">Billing & Subscriptions</h1>
          <p className="dashboard-subtitle">Manage subscription plans, payments, invoices, billing information, upgrades, and cancellations.</p>
        </div>
      </div>

      <div className="kpi-grid" style={{ marginTop: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div className="dashboard-card">
          <div className="kpi-title">Monthly Recurring Revenue</div>
          <div className="kpi-value">$84,500</div>
          <div className="kpi-trend positive">+12% vs last month</div>
        </div>
        <div className="dashboard-card">
          <div className="kpi-title">Pending Invoices</div>
          <div className="kpi-value">14</div>
          <div className="kpi-trend negative" style={{ color: '#f87171' }}>$12,400 outstanding</div>
        </div>
        <div className="dashboard-card">
          <div className="kpi-title">Active Subscriptions</div>
          <div className="kpi-value">328</div>
          <div className="kpi-trend neutral">95% retention rate</div>
        </div>
      </div>

      <div className="dashboard-sections" style={{ gridTemplateColumns: '1fr', marginTop: '1rem' }}>
        <div>
          <div className="section-header">
            <span>Recent Invoices</span>
            <button className="action-btn primary" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }} onClick={() => setIsInvoiceModalOpen(true)}>Generate Invoice</button>
          </div>
          <div className="dashboard-card">
            <div className="sa-list">
              <div className="sa-list-item">
                <div className="sa-list-icon green"><IconInvoice /></div>
                <div className="sa-list-body">
                  <div className="sa-list-title">INV-2026-001 - Smile Clinic</div>
                  <div className="sa-list-meta">Sep 01, 2026 | Amount: $4,500.00</div>
                </div>
                <div className="dashboard-actions">
                  <div className="sa-badge green">Paid</div>
                  <button className="action-btn" onClick={() => showToast('Opening invoice...', 'info')}>View</button>
                </div>
              </div>
              <div className="sa-list-item">
                <div className="sa-list-icon green"><IconInvoice /></div>
                <div className="sa-list-body">
                  <div className="sa-list-title">INV-2026-005 - Eastside Orthodontics</div>
                  <div className="sa-list-meta">Sep 01, 2026 | Amount: $1,200.00</div>
                </div>
                <div className="sa-list-actions">
                  <div className="sa-badge green">Paid</div>
                  <button className="action-btn" onClick={() => showToast('Opening invoice...', 'info')}>View</button>
                </div>
              </div>
              <div className="sa-list-item">
                <div className="sa-list-icon pink"><IconInvoice /></div>
                <div className="sa-list-body">
                  <div className="sa-list-title">INV-2026-002 - City Dental Care</div>
                  <div className="sa-list-meta">Aug 15, 2026 | Amount: $2,100.00</div>
                </div>
                <div className="sa-list-actions">
                  <div className="sa-badge red">Overdue</div>
                  <button className="action-btn" onClick={() => showToast('Opening invoice...', 'info')}>View</button>
                </div>
              </div>
              <div className="sa-list-item">
                <div className="sa-list-icon blue"><IconInvoice /></div>
                <div className="sa-list-body">
                  <div className="sa-list-title">INV-2026-003 - Family Dentistry</div>
                  <div className="sa-list-meta">Aug 12, 2026 | Amount: $500.00</div>
                </div>
                <div className="sa-list-actions">
                  <div className="sa-badge green" style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8' }}>Processing</div>
                  <button className="action-btn" onClick={() => showToast('Opening invoice...', 'info')}>View</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <div className="section-header">
            <span>Subscription Plans</span>
            <button className="action-btn" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }} onClick={() => showToast('Edit Plans opened', 'info')}>Edit Plans</button>
          </div>
          <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="dashboard-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div className="sa-list-icon blue" style={{ width: '32px', height: '32px', borderRadius: '8px' }}><IconPlan /></div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Starter</h3>
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>$49<span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>/mo</span></div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', flex: 1 }}>Up to 2 users, basic features, email support.</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="action-btn" style={{ flex: 1, justifyContent: 'center' }} onClick={() => showToast('Manage Plan opened', 'info')}>Manage</button>
                <button className="action-btn" style={{ flex: 1, justifyContent: 'center', color: '#ff4444' }} onClick={() => setIsCancelModalOpen(true)}>Cancel</button>
              </div>
            </div>
            
            <div className="dashboard-card" style={{ display: 'flex', flexDirection: 'column', border: '1px solid rgba(167, 139, 250, 0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div className="sa-list-icon purple" style={{ width: '32px', height: '32px', borderRadius: '8px' }}><IconPlan /></div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Professional</h3>
                <span style={{ background: 'rgba(167, 139, 250, 0.2)', color: '#a78bfa', fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '4px', marginLeft: 'auto' }}>Most Popular</span>
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>$129<span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>/mo</span></div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', flex: 1 }}>Up to 10 users, advanced reporting, priority support.</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="action-btn primary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => showToast('Manage Plan opened', 'info')}>Manage</button>
                <button className="action-btn" style={{ flex: 1, justifyContent: 'center', color: '#ff4444' }} onClick={() => setIsCancelModalOpen(true)}>Cancel</button>
              </div>
            </div>
            
            <div className="dashboard-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div className="sa-list-icon pink" style={{ width: '32px', height: '32px', borderRadius: '8px' }}><IconPlan /></div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Enterprise</h3>
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>$299<span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>/mo</span></div>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', flex: 1 }}>Unlimited users, custom integrations, 24/7 phone support.</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="action-btn" style={{ flex: 1, justifyContent: 'center' }} onClick={() => showToast('Manage Plan opened', 'info')}>Manage</button>
                <button className="action-btn" style={{ flex: 1, justifyContent: 'center', color: '#ff4444' }} onClick={() => setIsCancelModalOpen(true)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isInvoiceModalOpen} onClose={() => setIsInvoiceModalOpen(false)} title="Generate Manual Invoice">
        <form onSubmit={handleGenerateInvoice} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Organization</label>
            <select className="form-input" style={{ width: '100%' }}>
              <option>Smile Clinic - Downtown</option>
              <option>City Dental Care</option>
              <option>Family Dentistry</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Amount ($)</label>
            <input type="number" required className="form-input" style={{ width: '100%' }} placeholder="0.00" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Description</label>
            <textarea className="form-input" required style={{ width: '100%', minHeight: '80px' }} placeholder="Custom service charges, arrears, etc." />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
            <button type="button" className="action-btn" onClick={() => setIsInvoiceModalOpen(false)}>Cancel</button>
            <button type="submit" className="action-btn primary">Generate</button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={isCancelModalOpen} onClose={() => setIsCancelModalOpen(false)} title="Cancel Subscription">
        <div style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
          Are you sure you want to initiate cancellation for this subscription? The organization will lose access at the end of their billing cycle.
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button className="action-btn" onClick={() => setIsCancelModalOpen(false)}>Back</button>
          <button className="action-btn" style={{ background: '#ff4444', borderColor: '#ff4444' }} onClick={handleCancelSub}>Confirm Cancel</button>
        </div>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}

