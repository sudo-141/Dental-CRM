'use client';
import React, { useState } from 'react';

// Icons
const IconCalendar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const IconPlus = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconUser = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconFilter = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

export default function AppointmentsPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('upcoming');

  const appointments = [
    { id: 1, name: 'Sarah Jenkins', type: 'Root Canal', doctor: 'Dr. Smith', date: 'Today', time: '02:30 PM', status: 'confirmed', statusLabel: 'Confirmed', colorClass: 'blue' },
    { id: 2, name: 'Michael Chen', type: 'Routine Cleaning', doctor: 'Dr. Lee', date: 'Today', time: '03:15 PM', status: 'pending', statusLabel: 'Pending', colorClass: 'purple' },
    { id: 3, name: 'Emily Davis', type: 'Ortho Consult', doctor: 'Dr. Patel', date: 'Today', time: '04:00 PM', status: 'confirmed', statusLabel: 'Confirmed', colorClass: 'pink' },
    { id: 4, name: 'John Doe', type: 'Cavity Filling', doctor: 'Dr. Smith', date: 'Today', time: '09:00 AM', status: 'completed', statusLabel: 'Completed', colorClass: 'green' },
    { id: 5, name: 'Jessica Alba', type: 'Whitening', doctor: 'Dr. Lee', date: 'Tomorrow', time: '10:00 AM', status: 'pending', statusLabel: 'Scheduled', colorClass: 'blue' },
    { id: 6, name: 'Mark Ruffalo', type: 'Wisdom Tooth', doctor: 'Dr. Smith', date: 'Sep 08, 2026', time: '11:30 AM', status: 'completed', statusLabel: 'Cancelled', colorClass: 'pink' },
  ];

  const getTabStyle = (isActive: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    background: isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
    border: `1px solid ${isActive ? 'rgba(255, 255, 255, 0.3)' : 'transparent'}`,
    color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '0.9rem',
    transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease',
  });

  const filteredAppointments = appointments.filter(apt => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return apt.status === 'confirmed' || apt.status === 'pending';
    if (filter === 'past') return apt.status === 'completed';
    return true;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#fff' }}>
      {/* Top Bar */}
      <div className="dashboard-topbar">
        <div>
          <h1 className="dashboard-title">Appointments</h1>
          <p className="dashboard-subtitle">Manage and schedule patient appointments.</p>
        </div>
        <div className="dashboard-actions">
          <button className="action-btn"><IconFilter /> Filter</button>
          <button className="action-btn primary"><IconPlus /> New Appointment</button>
        </div>
      </div>

      <div className="dashboard-card" style={{ flex: 1, minHeight: '500px' }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '0.5rem',
        }}>
          <button onClick={() => setFilter('upcoming')} style={getTabStyle(filter === 'upcoming')}><IconCalendar /> Upcoming</button>
          <button onClick={() => setFilter('past')} style={getTabStyle(filter === 'past')}><IconClock /> Past</button>
          <button onClick={() => setFilter('all')} style={getTabStyle(filter === 'all')}><IconUser /> All</button>
        </div>

        <div className="activity-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appt) => (
              <div key={appt.id} className="activity-item" style={{ 
                padding: '1.25rem', 
                background: 'rgba(255,255,255,0.02)', 
                borderRadius: '12px', 
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'transform 0.2s, background 0.2s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div className={`activity-icon ${appt.colorClass}`} style={{ fontSize: '1rem', fontWeight: 700, width: '48px', height: '48px' }}>
                  {appt.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="activity-details" style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <div className="activity-title" style={{ fontSize: '1.1rem' }}>{appt.name}</div>
                      <div className="activity-time" style={{ fontSize: '0.9rem', marginTop: '0.4rem', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center' }}>
                        <IconClock /> <span style={{ marginLeft: '6px' }}>{appt.date} • {appt.time}</span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <span style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', fontWeight: 500, color: '#fff' }}>{appt.type}</span>
                        <span>{appt.doctor}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
                      <div className={`activity-status ${appt.status}`}>
                        {appt.statusLabel}
                      </div>
                      <button className="action-btn" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'rgba(255,255,255,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <IconCalendar />
              <p>No appointments found for the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
