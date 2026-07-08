import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Worship | 2Jlove Ministry',
  description: '2Jlove Ministry의 Spotify, YouTube 찬양 콘텐츠',
};

export default function WorshipPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ministryBlack pb-28 pt-36">
        <div className="container-ministry">
          <Reveal className="mb-16 max-w-4xl">
            <p className="eyebrow text-ministryGoldSoft">Worship</p>
            <h1 className="mt-4 text-[clamp(48px,8vw,104px)] font-light leading-[1.06] tracking-[-0.075em]">찬양과 예배</h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-ministryMuted">2Jlove Ministry의 찬양은 일상의 감사, 회복, 헌신, 그리고 주님의 마음을 노래합니다.</p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-3">
            <Reveal>
              <Link href="https://open.spotify.com/artist/2vw9uNuRhSASCiMZwKBzI1?si=7VLRevwLQtOcjcQ-KSeWPA" target="_blank" className="block min-h-[360px] border border-white/15 bg-white/[.055] p-8 no-underline transition hover:-translate-y-2 hover:bg-white/10">
                <div className="mb-10 grid h-28 w-28 place-items-center bg-gradient-to-br from-ministryGoldSoft to-[#80601f] font-display text-4xl text-black">SH</div>
                <small className="text-[11px] font-black uppercase tracking-[.14em] text-ministryGoldSoft">Spotify Artist</small>
                <h2 className="mt-4 text-4xl font-light tracking-[-.05em]">Steven Hyung</h2>
                <p className="mt-4 text-ministryMuted">Listen on Spotify</p>
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="https://open.spotify.com/artist/7qIAjV4rsdVzif4QkCEBdm?si=wX_Rt8PeSquaUuYfoSutjQ" target="_blank" className="block min-h-[360px] border border-white/15 bg-white/[.055] p-8 no-underline transition hover:-translate-y-2 hover:bg-white/10">
                <div className="mb-10 grid h-28 w-28 place-items-center bg-gradient-to-br from-[#dbcfff] to-ministryPurple font-display text-4xl text-white">2J</div>
                <small className="text-[11px] font-black uppercase tracking-[.14em] text-ministryGoldSoft">Spotify Artist</small>
                <h2 className="mt-4 text-4xl font-light tracking-[-.05em]">2Jlove</h2>
                <p className="mt-4 text-ministryMuted">Listen on Spotify</p>
              </Link>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="https://www.youtube.com/@2jloveministry" target="_blank" className="block min-h-[360px] border border-white/15 bg-[linear-gradient(to_bottom,rgba(0,0,0,.12),rgba(0,0,0,.85)),url('/assets/worship-hero-bg.png')] bg-cover bg-center p-8 no-underline transition hover:-translate-y-2">
                <div className="mb-10 grid h-28 w-28 place-items-center rounded-full bg-white text-3xl text-black">▶</div>
                <small className="text-[11px] font-black uppercase tracking-[.14em] text-ministryGoldSoft">YouTube Channel</small>
                <h2 className="mt-4 text-4xl font-light tracking-[-.05em]">@2jloveministry</h2>
                <p className="mt-4 text-ministryMuted">온라인 예배와 찬양 영상</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
