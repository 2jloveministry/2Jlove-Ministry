import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import WordLibrary from '@/components/WordLibrary';

export const metadata = {
  title: '말씀 라이브러리 | 2Jlove Ministry',
  description: '2Jlove Ministry의 말씀묵상, 온라인 말씀, 예배자 훈련 콘텐츠',
};

export default function WordPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[linear-gradient(rgba(0,0,0,.78),rgba(0,0,0,.9)),url('/assets/worship-hero-bg.png')] bg-cover bg-fixed bg-center pb-28 pt-36">
        <div className="container-ministry">
          <Reveal className="mx-auto mb-12 max-w-4xl text-center">
            <p className="eyebrow text-ministryGoldSoft">The Word</p>
            <h1 className="mt-4 text-[clamp(48px,8vw,104px)] font-light leading-[1.06] tracking-[-0.075em]">말씀 라이브러리</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-ministryMuted">말씀 위에 세워지는 예배자의 삶. 묵상, 말씀, 예배자 훈련 콘텐츠를 이곳에서 확인하세요.</p>
          </Reveal>
          <Reveal>
            <WordLibrary />
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
