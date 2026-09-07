import React from 'react';

// Simple Icons for Dashboard
const IconTrendingUp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const IconUsers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconAlertCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const IconCheckCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const IconPlus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconDownload = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// Reusable Donut Chart component for consistency
function DonutChart({
  title,
  center,
  centerLabel,
  segments,
  legend,
}: {
  title: string;
  center: string;
  centerLabel: string;
  segments: { color: string; dash: string; offset: string }[];
  legend: { color: string; glowColor: string; label: string; value: string }[];
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <h4 style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {title}
      </h4>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
        {/* SVG Donut */}
        <div style={{ position: 'relative', width: '140px', height: '140px', flexShrink: 0 }}>
          <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
            <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="rgba(255,255,255,0.06)" strokeWidth="3.5" />
            {segments.map((seg, i) => (
              <circle
                key={i}
                cx="18" cy="18" r="15.91549430918954"
                fill="transparent"
                stroke={seg.color}
                strokeWidth="3.5"
                strokeDasharray={seg.dash}
                strokeDashoffset={seg.offset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dasharray 1s ease' }}
              />
            ))}
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>{center}</span>
            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500, marginTop: '2px' }}>{centerLabel}</span>
          </div>
        </div>
        {/* Legend */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {legend.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color, boxShadow: `0 0 8px ${item.glowColor}`, flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.82rem', color: '#fff', fontWeight: 500 }}>{item.label}</span>
                <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const kpiCards = [
    {
      icon: <IconTrendingUp />,
      iconColor: '#38bdf8',
      accentColor: 'rgba(56,189,248,0.3)',
      label: "Today's Revenue",
      value: '$2,450',
      trend: 'positive' as const,
      trendText: '+12.5% from yesterday',
    },
    {
      icon: <IconUsers />,
      iconColor: '#a78bfa',
      accentColor: 'rgba(167,139,250,0.3)',
      label: 'Patients Seen',
      value: '18',
      valueSuffix: '/ 24 scheduled',
      trend: 'neutral' as const,
      trendText: '6 appointments remaining',
    },
    {
      icon: <IconCheckCircle />,
      iconColor: '#4ade80',
      accentColor: 'rgba(74,222,128,0.3)',
      label: 'Fill Rate',
      value: '92%',
      trend: 'positive' as const,
      trendText: '+4% this week',
    },
    {
      icon: <IconAlertCircle />,
      iconColor: '#f87171',
      accentColor: 'rgba(248,113,113,0.3)',
      label: 'Action Needed',
      value: '3',
      trend: 'negative' as const,
      trendText: '2 No-Shows · 1 Low Stock',
      alert: true,
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="dashboard-topbar">
        <div>
          <h1 className="dashboard-title">Dashboard Overview</h1>
          <p className="dashboard-subtitle">Here&apos;s what&apos;s happening at the clinic today.</p>
        </div>
        <div className="dashboard-actions">
          <button className="action-btn"><IconDownload /> Export Report</button>
          <button className="action-btn primary"><IconPlus /> New Appointment</button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="kpi-grid">
        {kpiCards.map((card, i) => (
          <div
            key={i}
            className="dashboard-card"
            style={{
              borderColor: card.alert ? 'rgba(248,113,113,0.35)' : undefined,
              borderTopWidth: '2px',
              borderTopStyle: 'solid',
              borderTopColor: card.accentColor,
            }}
          >
            <div className="kpi-title">
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30px',
                height: '30px',
                borderRadius: '8px',
                background: `${card.accentColor.replace('0.3', '0.15')}`,
                color: card.iconColor,
                flexShrink: 0,
              }}>
                {card.icon}
              </span>
              {card.label}
            </div>
            <div className="kpi-value">
              {card.value}
              {card.valueSuffix && (
                <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.45)', fontWeight: 400, marginLeft: '0.4rem' }}>
                  {card.valueSuffix}
                </span>
              )}
            </div>
            <div className={`kpi-trend ${card.trend}`}>
              {card.trend === 'positive' && <IconTrendingUp />}
              {card.trendText}
            </div>
          </div>
        ))}
      </div>

      {/* Charts + Activity */}
      <div className="dashboard-sections">
        {/* Charts Card */}
        <div className="dashboard-card" style={{ minHeight: '320px' }}>
          <div className="section-header">Patient Flow &amp; Revenue (Weekly)</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1px 1fr',
            gap: '0',
            alignItems: 'center',
            marginTop: '0.5rem',
          }}>
            {/* Chart 1: Patient Demographics */}
            <DonutChart
              title="Patient Demographics"
              center="124"
              centerLabel="Total"
              segments={[
                { color: '#38bdf8', dash: '45 55', offset: '0' },
                { color: '#a78bfa', dash: '35 65', offset: '-45' },
                { color: '#4ade80', dash: '20 80', offset: '-80' },
              ]}
              legend={[
                { color: '#38bdf8', glowColor: 'rgba(56,189,248,0.5)', label: 'Returning', value: '45%' },
                { color: '#a78bfa', glowColor: 'rgba(167,139,250,0.5)', label: 'New Patients', value: '35%' },
                { color: '#4ade80', glowColor: 'rgba(74,222,128,0.5)', label: 'Consultations', value: '20%' },
              ]}
            />

            {/* Vertical Divider */}
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)', alignSelf: 'stretch', margin: '0 1rem' }} />

            {/* Chart 2: Revenue by Treatment */}
            <DonutChart
              title="Revenue by Treatment"
              center="$8.5k"
              centerLabel="Revenue"
              segments={[
                { color: '#f472b6', dash: '50 50', offset: '0' },
                { color: '#fbbf24', dash: '30 70', offset: '-50' },
                { color: '#60a5fa', dash: '20 80', offset: '-80' },
              ]}
              legend={[
                { color: '#f472b6', glowColor: 'rgba(244,114,182,0.5)', label: 'General', value: '50%' },
                { color: '#fbbf24', glowColor: 'rgba(251,191,36,0.5)', label: 'Orthodontics', value: '30%' },
                { color: '#60a5fa', glowColor: 'rgba(96,165,250,0.5)', label: 'Cosmetic', value: '20%' },
              ]}
            />
          </div>
        </div>

        {/* Upcoming Appointments Card */}
        <div className="dashboard-card" style={{ minHeight: '320px' }}>
          <div className="section-header">
            Upcoming Appointments
            <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.08)', padding: '3px 10px', borderRadius: '12px' }}>
              Today
            </span>
          </div>
          <div className="activity-list">
            {[
              { initials: 'SJ', colorClass: 'blue', name: 'Sarah Jenkins', detail: '02:30 PM · Root Canal · Dr. Smith', status: 'confirmed', statusLabel: 'Confirmed' },
              { initials: 'MC', colorClass: 'purple', name: 'Michael Chen', detail: '03:15 PM · Routine Cleaning', status: 'pending', statusLabel: 'Pending' },
              { initials: 'ED', colorClass: 'pink', name: 'Emily Davis', detail: '04:00 PM · Ortho Consult', status: 'confirmed', statusLabel: 'Confirmed' },
              { initials: 'JD', colorClass: 'green', name: 'John Doe', detail: '09:00 AM · Cavity Filling', status: 'completed', statusLabel: 'Completed' },
            ].map((appt, i) => (
              <div key={i} className="activity-item">
                <div className={`activity-icon ${appt.colorClass}`} style={{ fontSize: '0.75rem', fontWeight: 700 }}>
                  {appt.initials}
                </div>
                <div className="activity-details">
                  <div className="activity-title">{appt.name}</div>
                  <div className="activity-time">{appt.detail}</div>
                </div>
                <div className={`activity-status ${appt.status}`}>{appt.statusLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
