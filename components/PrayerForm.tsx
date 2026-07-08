'use client';

import { useState } from 'react';

export default function PrayerForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="border border-white/15 bg-white/[.055] p-6 md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label className="mb-5 block text-ministryMuted">
        이름
        <input className="mt-2 w-full border border-white/15 bg-black/35 px-4 py-3 text-ministryWhite outline-none focus:border-ministryGold" placeholder="성함" />
      </label>
      <label className="mb-5 block text-ministryMuted">
        이메일
        <input type="email" className="mt-2 w-full border border-white/15 bg-black/35 px-4 py-3 text-ministryWhite outline-none focus:border-ministryGold" placeholder="email@example.com" />
      </label>
      <label className="mb-5 block text-ministryMuted">
        기도제목 분류
        <select className="mt-2 w-full border border-white/15 bg-black/35 px-4 py-3 text-ministryWhite outline-none focus:border-ministryGold">
          <option>개인기도</option>
          <option>가정</option>
          <option>사역</option>
          <option>치유와 회복</option>
        </select>
      </label>
      <label className="mb-5 block text-ministryMuted">
        기도내용
        <textarea rows={5} className="mt-2 w-full border border-white/15 bg-black/35 px-4 py-3 text-ministryWhite outline-none focus:border-ministryGold" placeholder="기도제목을 적어주세요" />
      </label>
      <button className="btn-primary w-full" type="submit">기도요청 보내기</button>
      <p className="mt-4 text-sm leading-7 text-ministryMuted">
        {sent ? '접수된 것처럼 표시되었습니다. 실제 배포 시 Google Form 또는 이메일 연동을 연결하세요.' : '현재는 시안용 폼입니다. Google Form 또는 이메일로 연결 가능합니다.'}
      </p>
    </form>
  );
}
