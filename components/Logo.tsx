import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src="/Logo.jpg"
    alt="Dantoni Wellness Logo"
    className={className}
    width="260"
    height="150"
  />
);

export default Logo;

