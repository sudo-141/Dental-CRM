'use client';
import React, { useState } from 'react';
import Modal from '../components/Modal';
import Toast, { ToastType } from '../components/Toast';

const IconBuilding = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
    <path d="M9 22v-4h6v4"/>
    <path d="M8 6h.01"/>
    <path d="M16 6h.01"/>
    <path d="M12 6h.01"/>
    <path d="M12 10h.01"/>
    <path d="M12 14h.01"/>
    <path d="M16 10h.01"/>
    <path d="M16 14h.01"/>
    <path d="M8 10h.01"/>
    <path d="M8 14h.01"/>
  </svg>
);

export default function OrganizationsPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const showToast = (message: string, type: ToastType = 'success') => setToast({ message, type });

  const handleAddOrg = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddModalOpen(false);
    showToast('New organization created successfully!');
  };

  return (
    <>
      <div className="dashboard-topbar">
        <div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' }}>Super Admin &gt; Organizations</div>
          <h1 className="dashboard-title">Organization Management</h1>
          <p className="dashboard-subtitle">Create and manage organizations, companies, branches, or tenants.</p>
        </div>
        <div className="dashboard-actions">
          <button className="action-btn primary" onClick={() => setIsAddModalOpen(true)}>+ Add Organization</button>
        </div>
      </div>

      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: '1rem' }}>
        <div className="dashboard-card" style={{ padding: '1.25rem' }}>
          <div className="kpi-title" style={{ fontSize: '0.85rem' }}>Total Organizations</div>
          <div className="kpi-value" style={{ fontSize: '1.5rem' }}>342</div>
        </div>
        <div className="dashboard-card" style={{ padding: '1.25rem' }}>
          <div className="kpi-title" style={{ fontSize: '0.85rem' }}>Active</div>
          <div className="kpi-value" style={{ fontSize: '1.5rem', color: '#10b981' }}>335</div>
        </div>
        <div className="dashboard-card" style={{ padding: '1.25rem' }}>
          <div className="kpi-title" style={{ fontSize: '0.85rem' }}>Suspended</div>
          <div className="kpi-value" style={{ fontSize: '1.5rem', color: '#f87171' }}>7</div>
        </div>
        <div className="dashboard-card" style={{ padding: '1.25rem' }}>
          <div className="kpi-title" style={{ fontSize: '0.85rem' }}>Total MRR</div>
          <div className="kpi-value" style={{ fontSize: '1.5rem' }}>$84.5k</div>
        </div>
      </div>

      <div className="dashboard-card" style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <input type="text" className="form-input" placeholder="Search by name, ID, or owner..." style={{ maxWidth: '300px', padding: '0.6rem 1rem' }} />
          <select className="form-input" style={{ maxWidth: '150px', padding: '0.6rem 1rem' }}>
            <option>All Plans</option>
            <option>Enterprise</option>
            <option>Professional</option>
            <option>Starter</option>
          </select>
          <select className="form-input" style={{ maxWidth: '150px', padding: '0.6rem 1rem' }}>
            <option>All Statuses</option>
            <option>Active</option>
            <option>Suspended</option>
          </select>
        </div>

        <div style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
          <div className="sa-list">
          <div className="sa-list-item">
            <div className="sa-list-icon blue"><IconBuilding /></div>
            <div className="sa-list-body">
              <div className="sa-list-title">Smile Clinic - Downtown</div>
              <div className="sa-list-meta">Plan: Enterprise | Users: 12 | Created: Oct 12, 2025</div>
            </div>
            <div className="sa-list-actions">
              <div className="sa-badge green">Active</div>
              <button className="action-btn" onClick={() => showToast('Managing org...', 'info')}>Manage</button>
            </div>
          </div>
          
          <div className="sa-list-item">
            <div className="sa-list-icon purple"><IconBuilding /></div>
            <div className="sa-list-body">
              <div className="sa-list-title">City Dental Care</div>
              <div className="sa-list-meta">Plan: Professional | Users: 5 | Created: Jan 05, 2026</div>
            </div>
            <div className="sa-list-actions">
              <div className="sa-badge green">Active</div>
              <button className="action-btn" onClick={() => showToast('Managing org...', 'info')}>Manage</button>
            </div>
          </div>

          <div className="sa-list-item">
            <div className="sa-list-icon pink"><IconBuilding /></div>
            <div className="sa-list-body">
              <div className="sa-list-title">Family Dentistry</div>
              <div className="sa-list-meta">Plan: Starter | Users: 2 | Created: Mar 18, 2026</div>
            </div>
            <div className="sa-list-actions">
              <div className="sa-badge red">Suspended</div>
              <button className="action-btn" onClick={() => showToast('Managing org...', 'info')}>Manage</button>
              <button className="action-btn" style={{ color: '#10b981' }} onClick={() => showToast('Organization Reactivated', 'success')}>Reactivate</button>
            </div>
          </div>
          
          <div className="sa-list-item">
            <div className="sa-list-icon blue"><IconBuilding /></div>
            <div className="sa-list-body">
              <div className="sa-list-title">Eastside Orthodontics</div>
              <div className="sa-list-meta">Plan: Professional | Users: 8 | Created: Apr 22, 2026</div>
            </div>
            <div className="sa-list-actions">
              <div className="sa-badge green">Active</div>
              <button className="action-btn" onClick={() => showToast('Managing org...', 'info')}>Manage</button>
            </div>
          </div>
          
          <div className="sa-list-item">
            <div className="sa-list-icon blue"><IconBuilding /></div>
            <div className="sa-list-body">
              <div className="sa-list-title">Bright Smiles Network</div>
              <div className="sa-list-meta">Plan: Enterprise | Users: 45 | Created: May 02, 2026</div>
            </div>
            <div className="sa-list-actions">
              <div className="sa-badge green">Active</div>
              <button className="action-btn" onClick={() => showToast('Managing org...', 'info')}>Manage</button>
            </div>
          </div>
        </div>
      </div>
    </div>

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add Organization">
        <form onSubmit={handleAddOrg} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Organization Name</label>
            <input type="text" required className="form-input" style={{ width: '100%' }} placeholder="e.g. Acme Dental" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Primary Contact Email</label>
            <input type="email" required className="form-input" style={{ width: '100%' }} placeholder="contact@acme.com" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Subscription Plan</label>
            <select className="form-input" style={{ width: '100%' }}>
              <option>Starter</option>
              <option>Professional</option>
              <option>Enterprise</option>
            </select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
            <button type="button" className="action-btn" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
            <button type="submit" className="action-btn primary">Create Org</button>
          </div>
        </form>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}

