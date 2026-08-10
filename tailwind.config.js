/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          950: "#09090B",
          900: "#121215",
          800: "#18181B",
          700: "#27272A",
          600: "#3F3F46",
        },
        gold: {
          300: "#E5C890",
          400: "#D4AF37",
          500: "#C5A880",
          600: "#B38F56",
          700: "#8A6635",
        },
        cream: {
          50: "#FAF9F6",
          100: "#F4F3EE",
          200: "#EBE9E1",
        }
      },
      fontFamily: {
        serif: ['"Libre Bodoni"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
        limelight: ['"Limelight"', 'cursive'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(212, 175, 55, 0.25)',
        'luxe': '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}

