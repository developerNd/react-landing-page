import React from 'react';

export const Button = ({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    default: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900',
    hero: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-900',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
