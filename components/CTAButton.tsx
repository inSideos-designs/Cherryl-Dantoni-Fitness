
import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  text: string;
  to?: string;
  toExternal?: boolean;
  externalUrl?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  to,
  toExternal = false,
  externalUrl = 'mailto:Cheryl@DantoniWellness.com',
  variant = 'primary',
  size = 'md'
}) => {
  const baseClasses = 'font-bold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4';
  
  const sizeClasses = {
    sm: 'py-2 px-5 text-sm',
    md: 'py-3 px-8 text-base',
    lg: 'py-4 px-10 text-lg'
  };

  const variantClasses = {
    primary: 'bg-brand-yellow text-brand-blue hover:bg-yellow-400 focus:ring-yellow-300',
    secondary: 'bg-brand-tan text-white hover:bg-amber-600 focus:ring-amber-400'
  };

  const className = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`;

  if (toExternal) {
    return (
      <a href={externalUrl} target="_blank" rel="noopener noreferrer" className={className}>
        {text}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={className}>
        {text}
      </Link>
    );
  }

  return <button className={className}>{text}</button>;
};

export default CTAButton;
