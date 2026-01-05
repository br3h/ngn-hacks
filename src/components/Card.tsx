interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`glass-effect rounded-2xl p-6 ${
        hover ? 'hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

