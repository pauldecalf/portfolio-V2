import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ThemeProvider } from '../../components/context/ThemeContext';
import { LegalHeader } from '../../components/LegalHeader'

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 flex flex-col">
        <LegalHeader />
        <main className="flex-grow pt-24 pb-16 px-4 flex justify-center">
          <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 md:p-10">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
