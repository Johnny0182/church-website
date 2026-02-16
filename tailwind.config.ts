import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        steel: {
          50: '#f4f7fb',
          100: '#dce5f0',
          300: '#a9bfd4',
          500: '#7f99b2',
          700: '#56697b'
        },
        sand: '#f5ecd9',
        slategreen: '#5f6762'
      },
      boxShadow: {
        glow: '0 10px 40px rgba(65, 93, 120, 0.2)'
      }
    }
  },
  plugins: []
};

export default config;
