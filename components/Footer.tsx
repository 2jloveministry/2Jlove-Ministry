import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="container-ministry grid items-center justify-items-center gap-5 text-center text-ministryMuted md:grid-cols-[80px_1fr_auto] md:justify-items-start md:text-left">
        <Image src="/assets/2jlove-logo.png" alt="2Jlove Ministry" width={76} height={76} className="rounded-full object-cover" />
        <div>
          <strong className="block text-xl text-ministryWhite">2Jlove Ministry</strong>
          <p className="mt-1">Worship • Word • Mission</p>
          <div className="mt-3 flex justify-center gap-4 md:justify-start">
            <Link href="https://www.youtube.com/@2jloveministry" className="text-ministryGoldSoft">YouTube</Link>
            <Link href="https://open.spotify.com/artist/7qIAjV4rsdVzif4QkCEBdm?si=wX_Rt8PeSquaUuYfoSutjQ" className="text-ministryGoldSoft">Spotify</Link>
          </div>
        </div>
        <small>© 2026 2Jlove Ministry. All Rights Reserved.</small>
      </div>
    </footer>
  );
}
