'use client';
import React, { useState, useMemo } from 'react';
import Modal from '../components/Modal';
import Toast, { ToastType } from '../components/Toast';
import EmptyState from '../components/EmptyState';

const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MOCK_USERS = [
  { id: 1, name: 'Jane Doe', email: 'jane@smileclinic.com', role: 'Admin', org: 'Smile Clinic', status: 'Active', color: 'blue' },
  { id: 2, name: 'John Smith', email: 'john@citydental.com', role: 'Doctor', org: 'City Dental Care', status: 'Active', color: 'purple' },
  { id: 3, name: 'Sarah Connor', email: 'sarah@system.com', role: 'Super Admin', org: 'System', status: 'Active', color: 'pink' },
  { id: 4, name: 'Emily Davis', email: 'emily@familydentistry.com', role: 'Receptionist', org: 'Family Dentistry', status: 'Suspended', color: 'green' }
];

export default function UserManagementPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);
  const [confirmDeactivate, setConfirmDeactivate] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const showToast = (message: string, type: ToastType = 'success') => setToast({ message, type });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddModalOpen(false);
    showToast('New user added successfully!');
  };

  const handleDeactivate = () => {
    setConfirmDeactivate(null);
    showToast('User deactivated successfully.', 'success');
  };

  const filteredUsers = useMemo(() => {
    return MOCK_USERS.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <>
      <div className="dashboard-topbar">
        <div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.25rem' }}>Super Admin &gt; Users</div>
          <h1 className="dashboard-title">User Management</h1>
          <p className="dashboard-subtitle">Create, edit, delete, deactivate, and manage all users across the platform.</p>
        </div>
        <div className="dashboard-actions">
          <button className="action-btn primary" onClick={() => setIsAddModalOpen(true)}>+ Add New User</button>
        </div>
      </div>

      <div className="dashboard-card" style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Search users by name or email..." 
              style={{ minWidth: '300px', padding: '0.6rem 1rem' }} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select className="form-input" style={{ minWidth: '150px', padding: '0.6rem 1rem' }}>
              <option>All Roles</option>
              <option>Super Admin</option>
              <option>Admin</option>
              <option>Doctor</option>
              <option>Receptionist</option>
            </select>
            <select className="form-input" style={{ minWidth: '150px', padding: '0.6rem 1rem' }}>
              <option>All Statuses</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Suspended</option>
            </select>
          </div>
          <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', alignSelf: 'center' }}>
            Showing {filteredUsers.length} of 12,450
          </div>
        </div>

        {filteredUsers.length > 0 ? (
          <div className="sa-list">
            {filteredUsers.map(user => (
              <div key={user.id} className="sa-list-item">
                <div className={`sa-list-icon ${user.color}`}><IconUser /></div>
                <div className="sa-list-body">
                  <div className="sa-list-title">{user.name} ({user.email})</div>
                  <div className="sa-list-meta">Role: {user.role} | Org: {user.org}</div>
                </div>
                <div className="sa-list-actions">
                  <div className={`sa-badge ${user.status === 'Active' ? 'green' : 'red'}`}>{user.status}</div>
                  <button className="action-btn" onClick={() => showToast('Editing user...', 'info')}>Edit</button>
                  {user.status === 'Active' ? (
                    <button className="action-btn" style={{ color: '#ff4444' }} onClick={() => setConfirmDeactivate(user.name)}>Deactivate</button>
                  ) : (
                    <button className="action-btn" style={{ color: '#10b981' }} onClick={() => showToast('User Reactivated', 'success')}>Reactivate</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState 
            title="No users found" 
            message={`We couldn't find any users matching "${searchQuery}". Try adjusting your filters.`}
          />
        )}
      </div>

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add New User">
        <form id="addUserForm" onSubmit={handleAddUser} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Full Name</label>
            <input type="text" required className="form-input" style={{ width: '100%' }} placeholder="e.g. Jane Doe" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Email Address</label>
            <input type="email" required className="form-input" style={{ width: '100%' }} placeholder="jane@example.com" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Role</label>
            <select className="form-input" style={{ width: '100%' }}>
              <option>Admin</option>
              <option>Doctor</option>
              <option>Receptionist</option>
              <option>Super Admin</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>Organization</label>
            <select className="form-input" style={{ width: '100%' }}>
              <option>Smile Clinic</option>
              <option>City Dental Care</option>
              <option>System (Global)</option>
            </select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
            <button type="button" className="action-btn" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
            <button type="submit" className="action-btn primary">Create User</button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={!!confirmDeactivate} onClose={() => setConfirmDeactivate(null)} title="Confirm Deactivation">
        <div style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
          Are you sure you want to deactivate <strong>{confirmDeactivate}</strong>? This user will lose access to the system immediately.
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button className="action-btn" onClick={() => setConfirmDeactivate(null)}>Cancel</button>
          <button className="action-btn" style={{ background: '#ff4444', borderColor: '#ff4444' }} onClick={handleDeactivate}>Deactivate User</button>
        </div>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}

