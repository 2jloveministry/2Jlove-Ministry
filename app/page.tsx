import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import WordLibrary from '@/components/WordLibrary';
import PrayerForm from '@/components/PrayerForm';
import { ministries } from '@/data/ministries';
import { wordPosts } from '@/data/wordPosts';

const today = [...wordPosts].sort((a, b) => b.date.localeCompare(a.date))[0];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="relative grid min-h-screen place-items-center overflow-hidden px-5 py-28 text-center">
          <div className="absolute inset-0 animate-[slowZoom_16s_ease-in-out_infinite_alternate] bg-[linear-gradient(to_bottom,rgba(0,0,0,.18),rgba(0,0,0,.84)),url('/assets/worship-hero-bg.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(212,175,55,.20),transparent_28%),radial-gradient(circle_at_70%_15%,rgba(110,90,168,.18),transparent_30%),rgba(0,0,0,.35)]" />
          <Reveal className="relative z-10 max-w-5xl">
            <Image src="/assets/2jlove-logo.png" alt="2Jlove Ministry logo" width={118} height={118} className="mx-auto mb-6 rounded-full border border-ministryGold/30 object-cover shadow-[0_0_55px_rgba(212,175,55,.22)]" />
            <p className="eyebrow">2Jlove Ministry</p>
            <h1 className="text-[clamp(44px,8vw,102px)] font-light leading-[1.08] tracking-[-0.075em] drop-shadow-[0_24px_80px_rgba(0,0,0,.78)]">
              하나님은 영이시니<br />예배하는 자가<br />신령과 진정으로<br />예배할지니라
            </h1>
            <p className="mt-6 font-black tracking-[.08em] text-ministryGoldSoft">요한복음 4:24</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="https://www.youtube.com/@2jloveministry" target="_blank" className="btn-primary">온라인 예배</Link>
              <Link href="#worship" className="btn-secondary">찬양 듣기</Link>
            </div>
          </Reveal>
          <Link href="#today" className="absolute bottom-8 z-10 text-[11px] uppercase tracking-[.2em] text-ministryMuted">Scroll</Link>
        </section>

        <section id="today" className="border-y border-white/10 bg-gradient-to-b from-[#070707] to-[#101011] py-14">
          <div className="container-ministry grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
            <Reveal className="border border-white/15 bg-white/[.055] p-7 shadow-ministry md:p-9">
              <p className="eyebrow text-ministryGoldSoft">Today's Word</p>
              <h2 className="mt-4 text-[clamp(32px,4vw,56px)] font-light leading-tight tracking-[-.055em]">{today.title}</h2>
              <p className="mt-4 font-bold text-ministryGoldSoft">{today.scripture}</p>
              <blockquote className="my-5 border-l-2 border-ministryGoldSoft pl-4 leading-8 text-ministryGoldSoft">{today.verse}</blockquote>
              <p className="leading-8 text-ministryMuted">{today.body}</p>
              <Link href="/word" className="mt-6 inline-block font-black text-ministryGoldSoft">말씀 아카이브 보기 →</Link>
            </Reveal>
            <Reveal className="border border-white/15 bg-white/[.055] p-7 shadow-ministry md:p-9" delay={0.1}>
              <p className="eyebrow text-ministryGoldSoft">Recommended Worship</p>
              <h3 className="mt-4 text-4xl font-light tracking-[-.05em]">{today.song}</h3>
              <p className="mt-3 leading-8 text-ministryMuted">오늘의 말씀과 함께 묵상하기 좋은 찬양</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="https://open.spotify.com/artist/7qIAjV4rsdVzif4QkCEBdm?si=wX_Rt8PeSquaUuYfoSutjQ" target="_blank" className="rounded-full border border-white/15 px-4 py-2 text-ministryGoldSoft">Spotify</Link>
                <Link href="https://www.youtube.com/@2jloveministry" target="_blank" className="rounded-full border border-white/15 px-4 py-2 text-ministryGoldSoft">YouTube</Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="vision" className="bg-[radial-gradient(circle_at_20%_20%,rgba(110,90,168,.22),transparent_36%)] py-28 md:py-36">
          <Reveal className="container-ministry max-w-5xl text-center">
            <p className="eyebrow text-ministryGoldSoft">Vision</p>
            <h2 className="mt-5 text-[clamp(44px,7vw,92px)] font-light leading-[1.1] tracking-[-0.075em]">말씀 위에 세워지고,<br />예배로 살아가며,<br />세상을 섬기는 공동체</h2>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-ministryMuted">우리는 예배를 통해 하나님을 만나고, 말씀 안에서 성장하며, 선교를 통해 세상으로 나아가는 예배자를 세웁니다.</p>
          </Reveal>
        </section>

        <section id="about" className="bg-[#0b0b0c] py-28 md:py-36">
          <div className="container-ministry grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
            <Reveal>
              <p className="eyebrow text-ministryGoldSoft">About 2Jlove</p>
              <h2 className="section-title mt-4">예배하고<br />섬기고<br />사랑합니다.</h2>
            </Reveal>
            <Reveal className="border-white/10 text-lg leading-10 text-ministryMuted lg:border-l lg:pl-9" delay={0.1}>
              <p>2JLove Ministry는 하나님의 말씀을 중심으로 예배하고, 섬기고, 사랑하며 빛과 소금의 역할을 감당하는 선교단체입니다.</p>
              <p className="mt-6">우리는 교회와 다음세대, 열방을 섬기기 위해 말씀과 찬양, 기도와 훈련을 통해 예배자를 세워갑니다.</p>
            </Reveal>
          </div>

          <Reveal className="container-ministry mt-20 border-t border-white/15">
            {ministries.map((ministry) => (
              <article key={ministry.no} className="grid gap-2 border-b border-white/15 py-6 md:grid-cols-[70px_1fr_1fr] md:gap-6 md:items-center">
                <span className="font-display text-3xl text-ministryGoldSoft">{ministry.no}</span>
                <strong className="text-xl font-medium tracking-[-.03em]">{ministry.title}</strong>
                <em className="not-italic text-ministryMuted">{ministry.en}</em>
              </article>
            ))}
          </Reveal>
        </section>

        <section id="word" className="bg-[linear-gradient(rgba(0,0,0,.78),rgba(0,0,0,.88)),url('/assets/worship-hero-bg.png')] bg-cover bg-fixed bg-center py-28 md:py-36">
          <div className="container-ministry">
            <Reveal className="mx-auto mb-12 max-w-3xl text-center">
              <p className="eyebrow text-ministryGoldSoft">The Word</p>
              <h2 className="section-title mt-4">말씀 라이브러리</h2>
              <p className="mt-5 text-lg leading-8 text-ministryMuted">말씀묵상, 온라인 말씀, 예배자 훈련 콘텐츠를 계속 쌓아갈 수 있는 구조입니다.</p>
            </Reveal>
            <Reveal>
              <WordLibrary />
            </Reveal>
          </div>
        </section>

        <section id="worship" className="bg-[#080808] py-28 md:py-36">
          <div className="container-ministry grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
            <Reveal>
              <p className="eyebrow text-ministryGoldSoft">Worship</p>
              <h2 className="section-title mt-4">찬양과<br />예배</h2>
              <p className="mt-5 text-lg leading-8 text-ministryMuted">Spotify와 YouTube를 통해 2Jlove Ministry의 예배와 찬양을 함께 나눕니다.</p>
            </Reveal>
            <div className="grid gap-5">
              {[
                ['SH', 'Steven Hyung', 'https://open.spotify.com/artist/2vw9uNuRhSASCiMZwKBzI1?si=7VLRevwLQtOcjcQ-KSeWPA'],
                ['2J', '2Jlove', 'https://open.spotify.com/artist/7qIAjV4rsdVzif4QkCEBdm?si=wX_Rt8PeSquaUuYfoSutjQ'],
              ].map(([mark, title, href], index) => (
                <Reveal key={title} delay={index * 0.08}>
                  <Link href={href} target="_blank" className="grid grid-cols-[84px_1fr] items-center gap-5 border border-white/15 bg-white/[.055] p-4 no-underline transition hover:translate-x-2 hover:bg-white/10 md:grid-cols-[104px_1fr_36px]">
                    <div className={`grid h-[84px] w-[84px] place-items-center font-display text-3xl ${mark === '2J' ? 'bg-gradient-to-br from-[#dbcfff] to-ministryPurple text-white' : 'bg-gradient-to-br from-ministryGoldSoft to-[#80601f] text-black'} md:h-[104px] md:w-[104px]`}>{mark}</div>
                    <div>
                      <small className="text-[11px] font-black uppercase tracking-[.14em] text-ministryGoldSoft">Spotify Artist</small>
                      <h3 className="mt-2 text-3xl font-light tracking-[-.05em]">{title}</h3>
                      <p className="text-ministryMuted">Listen on Spotify</p>
                    </div>
                    <span className="hidden text-3xl text-ministryGoldSoft md:block">→</span>
                  </Link>
                </Reveal>
              ))}
              <Reveal delay={0.16}>
                <Link href="https://www.youtube.com/@2jloveministry" target="_blank" className="grid grid-cols-[84px_1fr] items-center gap-5 border border-white/15 bg-white/[.055] p-4 no-underline transition hover:translate-x-2 hover:bg-white/10 md:grid-cols-[104px_1fr]">
                  <div className="grid h-[84px] w-[84px] place-items-center rounded-full bg-white text-2xl text-black md:h-[104px] md:w-[104px]">▶</div>
                  <div>
                    <small className="text-[11px] font-black uppercase tracking-[.14em] text-ministryGoldSoft">Official YouTube Channel</small>
                    <h3 className="mt-2 text-3xl font-light tracking-[-.05em]">@2jloveministry</h3>
                    <p className="text-ministryMuted">온라인 예배와 찬양 영상을 확인하세요.</p>
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="prayer" className="bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,.12),transparent_30%)] bg-[#0d0c0d] py-28 md:py-36">
          <div className="container-ministry grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
            <Reveal>
              <p className="eyebrow text-ministryGoldSoft">Prayer</p>
              <h2 className="section-title mt-4">함께<br />기도하겠습니다.</h2>
              <p className="mt-5 text-lg leading-8 text-ministryMuted">혼자 기도하지 않도록, 2Jlove Ministry가 함께 중보하겠습니다.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <PrayerForm />
            </Reveal>
          </div>
        </section>

        <section id="contact" className="bg-[#090909] py-28 text-center md:py-36">
          <Reveal className="container-ministry max-w-4xl">
            <p className="eyebrow text-ministryGoldSoft">Contact</p>
            <h2 className="mt-5 text-[clamp(44px,7vw,92px)] font-light leading-[1.1] tracking-[-0.075em]">2Jlove Ministry와 함께하세요.</h2>
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-ministryMuted">예배팀 지원, 찬양집회, 세미나, 기도회, 영어예배, 차세대 예배자 훈련 문의를 남겨주세요.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="https://www.youtube.com/@2jloveministry" target="_blank" className="rounded-full border border-white/15 px-5 py-3 text-ministryGoldSoft">YouTube</Link>
              <Link href="https://open.spotify.com/artist/7qIAjV4rsdVzif4QkCEBdm?si=wX_Rt8PeSquaUuYfoSutjQ" target="_blank" className="rounded-full border border-white/15 px-5 py-3 text-ministryGoldSoft">Spotify</Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
