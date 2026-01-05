import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  target,
  rel,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all',
    secondary: 'bg-white/10 text-white hover:bg-white/20 focus:ring-white/50 backdrop-blur-sm',
    outline: 'border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary focus:ring-primary backdrop-blur-sm',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={classes}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

