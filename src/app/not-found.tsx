import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-[clamp(3rem,10vw,6rem)] font-medium mb-4">404</h1>
        <p className="text-xl mb-8 text-neutral-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link 
          href="/"
          className="px-6 py-2.5 bg-[#0066FF] text-white text-sm rounded-full font-medium hover:opacity-90 transition-opacity inline-block"
        >
          Return Home →
        </Link>
      </div>
    </div>
  );
} 