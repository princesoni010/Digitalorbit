/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        text: '#FFFFFF',
        accent: '#00F5FF',
        primary: {
          100: '#6C63FF',
          200: '#8B5CF6',
          300: '#EC4899',
          400: '#06B6D4'
        }
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #6C63FF, #8B5CF6, #EC4899, #06B6D4)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'orbit': 'orbit 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: 0.5, boxShadow: '0 0 20px rgba(0, 245, 255, 0.2)' },
          '100%': { opacity: 1, boxShadow: '0 0 40px rgba(0, 245, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
