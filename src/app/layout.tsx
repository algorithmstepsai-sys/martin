import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Martin X | Official Website",
  description: "At martin x official channel since 2019 we have delivered exceptional 100% guaranteed outcomes meticulously designed to fully compensate for and recover financial losses. Our advanced and specialized strategies ensure consistent risk protected performance.",
  icons: {
    icon: [
      { url: '/logo2_17_181150-1771344765358.png', type: 'image/png' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
</body>
    </html>
  );
}
