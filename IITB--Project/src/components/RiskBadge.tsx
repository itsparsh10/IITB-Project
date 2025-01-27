import React from 'react';

interface RiskBadgeProps {
  level: 'low' | 'medium' | 'high' | number;
}

export function RiskBadge({ level }: RiskBadgeProps) {
  const getBadgeColor = () => {
    if (typeof level === 'string') {
      switch (level) {
        case 'low':
          return 'bg-green-100 text-green-800';
        case 'medium':
          return 'bg-yellow-100 text-yellow-800';
        case 'high':
          return 'bg-red-100 text-red-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    } else {
      if (level < 0.3) return 'bg-green-100 text-green-800';
      if (level < 0.7) return 'bg-yellow-100 text-yellow-800';
      return 'bg-red-100 text-red-800';
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm font-medium ${getBadgeColor()}`}>
      {typeof level === 'string' ? level.charAt(0).toUpperCase() + level.slice(1) : `${(level * 100).toFixed(0)}%`}
    </span>
  );
}