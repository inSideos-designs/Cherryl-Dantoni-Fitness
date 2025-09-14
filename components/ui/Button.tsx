import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, to, variant = 'primary', ...props }) => {
  const baseClasses = "inline-block px-8 py-3 font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    primary: "bg-brand-primary text-white hover:bg-opacity-90 focus:ring-brand-primary",
    secondary: "bg-brand-accent text-brand-text hover:bg-opacity-90 focus:ring-brand-accent",
  };

  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;