import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TawktoChat from '../components/TawktoChat';
import GoogleAnalytics from '../components/GoogleAnalytics';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paul Decalf | Développeur Fullstack PHP/Symfony",
  description: "Développeur freelance PHP/Symfony basé en Île-de-France. Spécialisé dans la création d'applications web robustes et évolutives.",
  keywords: ["développeur", "php", "symfony", "fullstack", "freelance", "web", "applications", "développement"],
  authors: [{ name: "Paul Decalf" }],
  creator: "Paul Decalf",
  publisher: "Paul Decalf",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pauldecalf.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Paul Decalf | Développeur Fullstack PHP/Symfony",
    description: "Développeur freelance PHP/Symfony basé en Île-de-France. Spécialisé dans la création d'applications web robustes et évolutives.",
    url: "https://pauldecalf.fr",
    siteName: "Paul Decalf",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paul Decalf - Développeur Fullstack PHP/Symfony",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Decalf | Développeur Fullstack PHP/Symfony",
    description: "Développeur freelance PHP/Symfony basé en Île-de-France. Spécialisé dans la création d'applications web robustes et évolutives.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <GoogleAnalytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <TawktoChat />
      </body>
    </html>
  );
}
