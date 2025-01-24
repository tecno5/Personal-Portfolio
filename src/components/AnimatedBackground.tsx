export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <svg 
        className="background--custom" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        style={{
          WebkitTransform: 'translateZ(0)', // Force hardware acceleration
          transform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
        }}
      >
        <path 
          fill="#FFFF00" 
          fillOpacity="0.7" 
          d="M-100 -100L200 -100L200 50L-100 50Z" 
          style={{ animation: "path0 5s linear infinite alternate" }}
        />
        <path 
          fill="#00FFFF" 
          fillOpacity="0.7" 
          d="M-100 -100L200 -100L200 50L-100 50Z" 
          style={{ animation: "path1 12.5s linear infinite alternate" }}
        />
        <path 
          fill="#FF00FF" 
          fillOpacity="0.2" 
          d="M-100 -100L200 -100L200 20L-100 20Z" 
          style={{ animation: "path2 30s linear infinite alternate" }}
        />
      </svg>
    </div>
  );
} 