import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  href?: string; // Propriedade para definir o destino
}

export const Button = ({
  variant = 'primary',
  children,
  className = '',
  href = '/contatos', // Padrão definido para sua página de contatos
}: ButtonProps) => {

  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-md font-bold transition-all duration-300 ease-in-out uppercase tracking-tight text-sm text-center select-none";

  const variants = {
    // Azul Escuro (#003366)
    primary:
      "bg-primary text-white hover:opacity-90 shadow-md",
    
    // Dourado (#FFC107) com texto Azul
    secondary:
      "bg-secondary text-primary hover:brightness-110 shadow-md",
    
    // Borda Azul
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <Link 
      href={href} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
};