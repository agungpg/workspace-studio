import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'monis.rent | Workspace Builder',
  description: 'Design and rent your Bali workspace setup visually.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
