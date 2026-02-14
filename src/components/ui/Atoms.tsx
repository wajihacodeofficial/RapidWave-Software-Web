import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'btn';
  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'bg-transparent hover:bg-white/5 opacity-60 hover:opacity-100',
  };
  const sizes = {
    sm: 'px-4 py-2 text-[0.6rem]',
    md: 'px-8 py-3 text-[0.75rem]',
    lg: 'px-12 py-4 text-[0.9rem]',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = 'var(--accent-primary)',
}) => (
  <span
    className="px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase border"
    style={{ borderColor: `${color}44`, color: color }}
  >
    {children}
  </span>
);

export const SectionHeader: React.FC<{
  label: string;
  title: string;
  accent?: string;
}> = ({ label, title, accent }) => (
  <div className="section-intro">
    <span className="section-label">{label}</span>
    <h2 className="section-title">
      {title} {accent && <span className="accent-text">{accent}</span>}
    </h2>
  </div>
);
