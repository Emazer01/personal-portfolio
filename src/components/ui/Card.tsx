import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  interactive = false
}) => {
  return (
    <div
      className={`hud-corner-card rounded-xl ${
        interactive
          ? 'hover:-translate-y-0.5 hover:shadow-editorial'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
