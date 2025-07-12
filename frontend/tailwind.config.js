// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1', // Indigo
          light: '#A5B4FC',
          dark: '#4338CA',
        },
        secondary: {
          DEFAULT: '#0EA5E9', // Sky Blue
          light: '#7DD3FC',
          dark: '#0369A1',
        },
        accent: {
          DEFAULT: '#10B981', // Emerald
          light: '#6EE7B7',
          dark: '#047857',
        },
        background: '#FFFFFF',
        surface: '#F3F4F6',
        text: '#1E293B',
      },
      fontFamily: {
        sans: [
          'Geist',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(99, 102, 241, 0.08)',
      },
    },
  },
  plugins: [],
}; 