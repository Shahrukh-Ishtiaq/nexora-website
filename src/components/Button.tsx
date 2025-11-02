import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all ${className}`}
    >
      {children}
    </button>
  );
}
