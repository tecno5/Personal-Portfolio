import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ErrorBoundary from "@/components/ErrorBoundary";
import Script from "next/script";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata = {
  title: "Yash Rao - Digital Product Manager",
  description: "A product-focused developer and student leader at UTA, passionate about creating intuitive solutions that make a real impact.",
  metadataBase: new URL('https://yashrao.dev'),
  openGraph: {
    title: "Yash Rao - Digital Product Manager",
    description: "Building digital experiences with an emphasis on Design and Functionality",
    url: "https://yashrao.dev",
    siteName: "Yash Rao",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Rao - Digital Product Manager",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Rao - Digital Product Manager",
    description: "Building digital experiences with an emphasis on Design and Functionality",
    creator: "@yash_r_rao",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Preload key components */}
        <link 
          rel="preload" 
          href="/ProjectCard.js" 
          as="script"
        />
        <link 
          rel="preload" 
          href="/TestimonialCarousel.js" 
          as="script"
        />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body 
        className={`${geist.variable} font-sans antialiased min-h-[100dvh] overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ErrorBoundary>
          <Navigation />
          <div className="pt-12 md:pt-16 min-h-[100dvh]">
            {children}
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
