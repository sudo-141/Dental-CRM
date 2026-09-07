'use client';
import React, { useState } from 'react';
import Modal from '../components/Modal';
import Toast, { ToastType } from '../components/Toast';

export default function RolesPermissionsPage() {
  const [isAddRoleModalOpen, setIsAddRoleModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const showToast = (message: string, type: ToastType = 'success') => setToast({ message, type });

  const handleCreateRole = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddRoleModalOpen(false);
    showToast('Custom role created successfully!');
  };

  return (
    <>
      <div className="dashboard-topbar">
        <div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' }}>Super Admin &gt; Roles &amp; Permissions</div>
          <h1 className="dashboard-title">Role & Permission Management</h1>
          <p className="dashboard-subtitle">Create roles and decide what each role can access or perform in the system.</p>
        </div>
        <div className="dashboard-actions">
          <button className="action-btn primary" onClick={() => setIsAddRoleModalOpen(true)}>+ Create Custom Role</button>
        </div>
      </div>

      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '1rem' }}>
        <div className="dashboard-card" style={{ borderTop: '3px solid #ff4444' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h3 className="section-header" style={{ margin: 0 }}>Super Admin</h3>
            <span style={{ fontSize: '0.7rem', color: '#ff4444', border: '1px solid #ff4444', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>Level 1</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', minHeight: '3rem' }}>Full system access including configuration, billing, and global data across all organizations.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem', minHeight: '4.5rem' }}>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,68,68,0.1)', color: '#ff4444', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>All Permissions</span>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Global Settings</span>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Manage Tenants</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="sa-badge green" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}>System Locked</span>
            <button className="action-btn" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }} onClick={() => showToast('System roles cannot be edited', 'error')}>View Details</button>
          </div>
        </div>
        
        <div className="dashboard-card" style={{ borderTop: '3px solid #a78bfa' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h3 className="section-header" style={{ margin: 0 }}>Admin</h3>
            <span style={{ fontSize: '0.7rem', color: '#a78bfa', border: '1px solid #a78bfa', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>Level 2</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', minHeight: '3rem' }}>Tenant-level access for managing a specific organization, its users, and settings.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem', minHeight: '4.5rem' }}>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Manage Org Users</span>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Org Settings</span>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Full Medical Records</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="sa-badge green" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}>System Default</span>
            <button className="action-btn" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }} onClick={() => showToast('Opening permissions editor...', 'info')}>Edit Permissions</button>
          </div>
        </div>

        <div className="dashboard-card" style={{ borderTop: '3px solid #38bdf8' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h3 className="section-header" style={{ margin: 0 }}>Doctor</h3>
            <span style={{ fontSize: '0.7rem', color: '#38bdf8', border: '1px solid #38bdf8', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>Level 3</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', minHeight: '3rem' }}>Access to patient records, treatments, and appointments for their specific tenant.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem', minHeight: '4.5rem' }}>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>View/Edit Patients</span>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Manage Appointments</span>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Create Prescriptions</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="sa-badge green" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}>System Default</span>
            <button className="action-btn" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }} onClick={() => showToast('Opening permissions editor...', 'info')}>Edit Permissions</button>
          </div>
        </div>

        <div className="dashboard-card" style={{ borderTop: '3px solid #4ade80' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h3 className="section-header" style={{ margin: 0 }}>Receptionist</h3>
            <span style={{ fontSize: '0.7rem', color: '#4ade80', border: '1px solid #4ade80', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>Level 4</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', minHeight: '3rem' }}>Front-desk capabilities: scheduling, basic patient info, and invoicing.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem', minHeight: '4.5rem' }}>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Manage Appointments</span>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Basic Patient Info</span>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>View Invoices</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="sa-badge green" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}>System Default</span>
            <button className="action-btn" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }} onClick={() => showToast('Opening permissions editor...', 'info')}>Edit Permissions</button>
          </div>
        </div>

        <div className="dashboard-card" style={{ borderTop: '3px solid #94a3b8' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h3 className="section-header" style={{ margin: 0 }}>Auditor (Custom)</h3>
            <span style={{ fontSize: '0.7rem', color: '#94a3b8', border: '1px solid #94a3b8', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>Level Custom</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', minHeight: '3rem' }}>Read-only access across all organizations for compliance and auditing purposes.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem', minHeight: '4.5rem' }}>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Read-Only Records</span>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>View Audit Logs</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="sa-badge red" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}>Custom Role</span>
            <button className="action-btn" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }} onClick={() => showToast('Opening permissions editor...', 'info')}>Edit Permissions</button>
          </div>
        </div>
      </div>

      <Modal isOpen={isAddRoleModalOpen} onClose={() => setIsAddRoleModalOpen(false)} title="Create Custom Role">
        <form onSubmit={handleCreateRole} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Role Name</label>
            <input type="text" required className="form-input" style={{ width: '100%' }} placeholder="e.g. Data Analyst" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Description</label>
            <textarea className="form-input" style={{ width: '100%', minHeight: '80px' }} placeholder="Brief description of the role's responsibilities" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
            <button type="button" className="action-btn" onClick={() => setIsAddRoleModalOpen(false)}>Cancel</button>
            <button type="submit" className="action-btn primary">Create Role</button>
          </div>
        </form>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}

