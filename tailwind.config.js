/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8f9fa',
        primary: '#1a1a24',
        accent: '#2f64f2',
        accent_purple: '#8b5cf6',
        sombre: '#334155',
        fantome: '#64748b',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FFD1FF 0%, #E0C3FC 50%, #8EC5FC 100%)',
        'card-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.4))',
      }
    },
  },
  plugins: [],
}
