import React from 'react';

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
}

const DefaultSearchIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5, color: '#a78bfa' }}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <path d="M11 8v2" />
    <path d="M11 14h.01" />
  </svg>
);

export default function EmptyState({ 
  title = 'No results found', 
  message = 'Try adjusting your search or filters to find what you are looking for.',
  icon = <DefaultSearchIcon />
}: EmptyStateProps) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '4rem 2rem',
      textAlign: 'center',
      border: '1px dashed rgba(255,255,255,0.1)',
      borderRadius: '12px',
      background: 'rgba(255,255,255,0.02)'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '300px', fontSize: '0.9rem', lineHeight: 1.5 }}>
        {message}
      </p>
    </div>
  );
}
