import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Lion & Lamb | Los Angeles Church Demo',
  description: 'Demo one-page church website template for agency portfolio use.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-steel-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
