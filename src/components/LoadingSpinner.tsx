const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative">
        {/* Outer ring */}
        <div className="h-20 w-20 rounded-full border-4 border-primary/20 animate-pulse" />
        
        {/* Spinning ring */}
        <div className="absolute inset-0 h-20 w-20 rounded-full border-4 border-transparent border-t-primary animate-spin" />
        
        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-heading font-bold text-primary">
            A<span className="text-gold">+</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
