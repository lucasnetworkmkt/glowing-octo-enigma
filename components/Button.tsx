import React from 'react';
import { getWhatsAppLink } from '../constants';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'outline';
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  icon?: 'whatsapp' | 'arrow' | 'none';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  fullWidth = false,
  onClick,
  icon = 'none'
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-heading font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg";
  
  const variants = {
    primary: "bg-brand-accent hover:bg-white text-brand-blue hover:text-brand-blue hover:shadow-neon",
    success: "bg-brand-green hover:bg-white text-brand-blue hover:shadow-brand-green/40",
    outline: "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-blue hover:shadow-neon"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(getWhatsAppLink(), '_blank');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      {icon === 'whatsapp' && <MessageCircle className="w-5 h-5" />}
      {children}
      {icon === 'arrow' && <ArrowRight className="w-5 h-5" />}
    </button>
  );
};

export default Button;
