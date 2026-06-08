import React from "react";

// Full-page spinner — used by React.lazy Suspense fallback
export const PageLoader = () => (
  <div className="page-loader">
    <div className="page-loader-spinner" />
  </div>
);

// Skeleton block — mimics a card with lines
export const SkeletonCard = ({ rows = 3 }) => (
  <div className="skeleton-card">
    <div className="skeleton-line skeleton-title" />
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="skeleton-line" style={{ width: `${75 + (i % 3) * 10}%` }} />
    ))}
  </div>
);

// Skeleton table rows
export const SkeletonTable = ({ rows = 5, cols = 4 }) => (
  <div className="skeleton-table-wrap">
    {Array.from({ length: rows }).map((_, r) => (
      <div key={r} className="skeleton-row">
        {Array.from({ length: cols }).map((_, c) => (
          <div key={c} className="skeleton-cell" />
        ))}
      </div>
    ))}
  </div>
);
