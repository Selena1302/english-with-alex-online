
import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}) => {
  const baseClasses = "px-8 py-4 font-inter font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-lg";
  
  const variantClasses = variant === 'primary' 
    ? "bg-brown text-white hover:bg-brown-light" 
    : "bg-transparent border-2 border-brown text-brown hover:bg-brown hover:text-white";
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
