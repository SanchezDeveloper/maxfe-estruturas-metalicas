import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) => {

  const baseStyles =
    "px-6 py-3 rounded-md font-bold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase tracking-tight text-sm";

  const variants = {
    primary:
      "bg-primary text-white hover:opacity-90 focus:ring-primary shadow-md",
    secondary:
      "bg-secondary text-primary hover:brightness-110 focus:ring-secondary shadow-md",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};