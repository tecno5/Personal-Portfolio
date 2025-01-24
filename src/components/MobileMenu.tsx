import Link from 'next/link';

export default function MobileMenu() {
  return (
    <div className="space-y-4">
      <Link href="/" className="block text-lg">Home</Link>
      <Link href="/about" className="block text-lg">About</Link>
      <Link href="/#projects" className="block text-lg">Projects</Link>
      <Link 
        href="https://read.cv/yashrao" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block text-lg"
      >
        Resume
      </Link>
      <Link 
        href="mailto:hello@yashrao.dev" 
        className="block text-lg"
      >
        Contact
      </Link>
    </div>
  );
} 