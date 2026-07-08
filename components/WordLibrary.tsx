'use client';

import { useMemo, useState } from 'react';
import { wordPosts } from '@/data/wordPosts';

const categories = ['전체', '오늘의 말씀', '묵상', '예배자 훈련'];

export default function WordLibrary() {
  const [category, setCategory] = useState('전체');
  const [query, setQuery] = useState('');

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...wordPosts]
      .sort((a, b) => b.date.localeCompare(a.date))
      .filter((post) => category === '전체' || post.category === category)
      .filter((post) => {
        if (!q) return true;
        return [post.title, post.scripture, post.verse, post.body, post.book, post.category, post.song].join(' ').toLowerCase().includes(q);
      });
  }, [category, query]);

  return (
    <div>
      <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="말씀 제목, 성경, 본문 검색"
          className="min-h-[50px] flex-1 border border-white/15 bg-black/40 px-4 text-ministryWhite outline-none focus:border-ministryGold"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-4 py-2 text-sm transition ${category === item ? 'border-ministryWhite bg-ministryWhite text-black' : 'border-white/15 bg-white/5 text-ministryWhite hover:bg-white/10'}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex min-h-[360px] flex-col border border-white/15 bg-black/55 p-7 backdrop-blur">
            <small className="text-[11px] font-black uppercase tracking-[.16em] text-ministryGoldSoft">{post.category}</small>
            <time className="mt-3 text-sm text-ministryMuted">{post.date}</time>
            <h3 className="mt-5 text-2xl font-light leading-tight tracking-[-.04em]">{post.title}</h3>
            <p className="mt-3 font-bold text-ministryGoldSoft">{post.scripture}</p>
            <blockquote className="my-5 border-l-2 border-ministryGoldSoft pl-4 leading-8 text-ministryGoldSoft">{post.verse}</blockquote>
            <p className="leading-8 text-ministryMuted">{post.body}</p>
            <p className="mt-auto pt-6 font-black text-ministryGoldSoft">추천 찬양 · {post.song}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
