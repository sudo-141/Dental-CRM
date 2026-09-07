'use client';
import React, { useState, useEffect } from 'react';
import Toast, { ToastType } from '../components/Toast';
import Modal from '../components/Modal';
import Skeleton, { ListSkeleton } from '../components/Skeleton';

export default function ConfigurationPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);
  
  const [isFlagsModalOpen, setIsFlagsModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [editingEmail, setEditingEmail] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (message: string, type: ToastType = 'success') => setToast({ message, type });

  const handleSave = () => {
    showToast('System configuration saved successfully!');
  };

  return (
    <>
      <div className="dashboard-topbar">
        <div>
          <h1 className="dashboard-title">System Configuration</h1>
          <p className="dashboard-subtitle">Control global settings such as application configuration, integrations, notifications, email settings, and security policies.</p>
        </div>
        <div className="dashboard-actions">
          <button className="action-btn primary" onClick={handleSave}>Save Changes</button>
        </div>
      </div>

      <div className="dashboard-sections" style={{ gridTemplateColumns: '1fr', marginTop: '1rem', gap: '2rem' }}>
        
        {/* Email Settings */}
        <div>
          <h2 className="section-header">Email SMTP Settings</h2>
          <div className="dashboard-card">
            {isLoading ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <Skeleton height="3rem" />
                <Skeleton height="3rem" />
                <Skeleton height="3rem" />
                <Skeleton height="3rem" />
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label">SMTP Host</label>
                  <input type="text" className="form-input" defaultValue="smtp.mailgun.org" />
                </div>
                <div className="form-group">
                  <label className="form-label">SMTP Port</label>
                  <input type="text" className="form-input" defaultValue="587" />
                </div>
                <div className="form-group">
                  <label className="form-label">SMTP Username</label>
                  <input type="text" className="form-input" defaultValue="postmaster@dentalcrm.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">SMTP Password</label>
                  <input type="password" className="form-input" defaultValue="**********" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Global Settings Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Feature Flags */}
          <div>
            <h2 className="section-header">Feature Flags</h2>
            <div className="dashboard-card">
              {isLoading ? <ListSkeleton rows={1} /> : (
                <div className="sa-list">
                  <div className="sa-list-item">
                    <div className="sa-list-body">
                      <div className="sa-list-title" style={{ fontSize: '1.1rem' }}>Manage Flags</div>
                      <div className="sa-list-meta">Toggle experimental features globally or per org.</div>
                    </div>
                    <div className="sa-list-actions">
                      <button className="action-btn primary" onClick={() => setIsFlagsModalOpen(true)}>Configure</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Email Templates */}
          <div>
            <h2 className="section-header">Email Templates</h2>
            <div className="dashboard-card">
              {isLoading ? <ListSkeleton rows={1} /> : (
                <div className="sa-list">
                  <div className="sa-list-item">
                    <div className="sa-list-body">
                      <div className="sa-list-title" style={{ fontSize: '1.1rem' }}>Global Templates</div>
                      <div className="sa-list-meta">Manage global notification email templates.</div>
                    </div>
                    <div className="sa-list-actions">
                      <button className="action-btn primary" onClick={() => setIsEmailModalOpen(true)}>Manage</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Integrations */}
          <div style={{ gridColumn: '1 / -1' }}>
            <h2 className="section-header">Global Integrations</h2>
            <div className="dashboard-card">
              {isLoading ? <ListSkeleton rows={2} /> : (
                <div className="sa-list">
                  <div className="sa-list-item" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                    <div className="sa-list-body">
                      <div className="sa-list-title" style={{ fontSize: '1.1rem' }}>Twilio SMS</div>
                      <div className="sa-list-meta">Used for appointment reminders globally.</div>
                    </div>
                    <div className="sa-list-actions">
                      <button className="action-btn" onClick={() => showToast('Opening Twilio configuration...', 'info')}>Configure</button>
                    </div>
                  </div>
                  <div className="sa-list-item" style={{ paddingTop: '1rem' }}>
                    <div className="sa-list-body">
                      <div className="sa-list-title" style={{ fontSize: '1.1rem' }}>Stripe Payment Gateway</div>
                      <div className="sa-list-meta">Process subscription payments.</div>
                    </div>
                    <div className="sa-list-actions">
                      <button className="action-btn" onClick={() => showToast('Opening Stripe configuration...', 'info')}>Configure</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>

      {/* Feature Flags Modal */}
      <Modal isOpen={isFlagsModalOpen} onClose={() => setIsFlagsModalOpen(false)} title="Feature Flags">
        <div className="sa-list">
          {['New Billing Engine (v2)', 'AI Appointment Scheduling', 'Advanced Reporting Dashboard'].map((flag, i) => (
            <div key={i} className="sa-list-item" style={{ justifyContent: 'space-between' }}>
              <div className="sa-list-body">
                <div className="sa-list-title">{flag}</div>
                <div className="sa-list-meta">{i === 1 ? 'Enabled for 10% of orgs' : 'Globally enabled'}</div>
              </div>
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '0.5rem' }}>
                <input type="checkbox" defaultChecked={i !== 1} style={{ width: '1.2rem', height: '1.2rem', accentColor: '#ff4444' }} />
                <span style={{ fontSize: '0.85rem', color: '#fff' }}>Enabled</span>
              </label>
            </div>
          ))}
        </div>
      </Modal>

      {/* Email Templates Modal */}
      <Modal isOpen={isEmailModalOpen} onClose={() => { setIsEmailModalOpen(false); setEditingEmail(null); }} title={editingEmail ? `Edit Template: ${editingEmail}` : "Email Templates"}>
        {editingEmail ? (
          <div>
            <div className="form-group">
              <label className="form-label">Subject Line</label>
              <input type="text" className="form-input" defaultValue={`Action Required: ${editingEmail}`} />
            </div>
            <div className="form-group" style={{ marginTop: '1rem' }}>
              <label className="form-label">HTML Content</label>
              <textarea className="form-input" rows={8} defaultValue={`<h1>Hello {{user.name}}</h1>\n<p>This is your ${editingEmail} notification.</p>`}></textarea>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <button className="action-btn primary" onClick={() => { showToast('Template saved'); setEditingEmail(null); }}>Save Template</button>
              <button className="action-btn" onClick={() => setEditingEmail(null)}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="sa-list">
            {['Welcome Email', 'Password Reset', 'Invoice Created', 'Subscription Expiring'].map((template, i) => (
              <div key={i} className="sa-list-item">
                <div className="sa-list-body">
                  <div className="sa-list-title">{template}</div>
                  <div className="sa-list-meta">Updated {i + 2} days ago</div>
                </div>
                <div className="sa-list-actions">
                  <button className="action-btn" onClick={() => setEditingEmail(template)}>Edit</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal>
      
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}

