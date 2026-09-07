import React from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Skeleton({ 
  width = '100%', 
  height = '1rem', 
  borderRadius = '4px',
  className = '',
  style = {}
}: SkeletonProps) {
  return (
    <div 
      className={`skeleton-shimmer ${className}`}
      style={{ width, height, borderRadius, ...style }}
    />
  );
}

// A pre-built list skeleton for .sa-list
export function ListSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="sa-list">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="sa-list-item" style={{ gap: '1rem' }}>
          <Skeleton width="38px" height="38px" borderRadius="10px" />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <Skeleton width="40%" height="1rem" />
            <Skeleton width="25%" height="0.8rem" />
          </div>
          <Skeleton width="60px" height="28px" borderRadius="20px" />
        </div>
      ))}
    </div>
  );
}
