/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // App directory
    "./pages/**/*.{js,ts,jsx,tsx}",     // Pages directory (if you still have it)
    "./components/**/*.{js,ts,jsx,tsx}" // Components directory
  ],
  theme: {
    extend: {
      slideUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      fontFamily: {
       codenso: ["'Condenso'", "sans-serif"],
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"], // Geist default
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"], // Geist mono
      creato: ["'CreatoDisplay'", "sans-serif"],
}

      },
      animation: {
        slideUp: 'slideUp 0.7s ease-out forwards',
      },
    },
  },
  plugins:
   [require('@tailwindcss/line-clamp'),],
};
