"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Soluções', href: '/solucoes' },
    { name: 'Contatos', href: '/contatos' },
  ];

  return (
    // bg-background utiliza #FAFAFA
    <header className="bg-background shadow-sm sticky top-0 z-50 w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - text-primary (#003366) e text-secondary (#FFC107) */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-black text-primary tracking-tight">
              Max<span className="text-secondary">Fe</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                // text-text-main utiliza #1A1A1A
                className="text-text-main hover:text-primary font-bold transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="primary">Solicitar Orçamento</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-text-main hover:text-primary focus:outline-none transition-colors"
              aria-label="Abrir menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-72 border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-3 bg-background shadow-inner">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="block px-3 py-2 text-base font-bold text-text-main hover:text-primary hover:bg-white/50 rounded-md transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Button variant="primary" className="w-full">Solicitar Orçamento</Button>
          </div>
        </div>
      </div>
    </header>
  );
};