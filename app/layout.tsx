import type { Metadata } from 'next';
import { Noto_Sans_KR, Marcellus } from 'next/font/google';
import './globals.css';

const noto = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['300', '400', '500', '700', '900'],
});

const marcellus = Marcellus({
  subsets: ['latin'],
  variable: '--font-marcellus',
  weight: '400',
});

export const metadata: Metadata = {
  title: '2Jlove Ministry | Worship • Word • Mission',
  description: '말씀 위에 세워지고, 예배로 살아가며, 세상을 섬기는 온라인 워십 미니스트리',
  metadataBase: new URL('https://2jloveministry.org'),
  openGraph: {
    title: '2Jlove Ministry',
    description: 'Worship • Word • Mission',
    url: 'https://2jloveministry.org',
    siteName: '2Jlove Ministry',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${noto.variable} ${marcellus.variable}`}>
      <body className="font-sans">
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
