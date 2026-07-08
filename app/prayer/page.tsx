import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import PrayerForm from '@/components/PrayerForm';

export const metadata = {
  title: '기도요청 | 2Jlove Ministry',
  description: '2Jlove Ministry와 함께 기도해주세요',
};

export default function PrayerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,.12),transparent_30%)] bg-[#0d0c0d] pb-28 pt-36">
        <div className="container-ministry grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow text-ministryGoldSoft">Prayer</p>
            <h1 className="mt-4 text-[clamp(48px,8vw,104px)] font-light leading-[1.06] tracking-[-0.075em]">함께<br />기도하겠습니다.</h1>
            <p className="mt-6 text-lg leading-9 text-ministryMuted">혼자 기도하지 않도록, 2Jlove Ministry가 함께 중보하겠습니다.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <PrayerForm />
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
