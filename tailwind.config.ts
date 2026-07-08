import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ministryBlack: '#050505',
        ministryCharcoal: '#0c0c0d',
        ministrySurface: '#141314',
        ministryGold: '#D4AF37',
        ministryGoldSoft: '#F0D98A',
        ministryWhite: '#F6F1E8',
        ministryMuted: '#B9AFA1',
        ministryPurple: '#6E5AA8'
      },
      fontFamily: {
        sans: ['var(--font-noto)', 'sans-serif'],
        display: ['var(--font-marcellus)', 'serif']
      },
      boxShadow: {
        ministry: '0 34px 100px rgba(0,0,0,.58)'
      }
    }
  },
  plugins: []
};

export default config;
