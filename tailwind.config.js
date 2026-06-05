/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFBFF',
        surface: '#FFFFFF',
        text: '#1A1A2E',
        'text-muted': '#6B7280',
        accent: '#6C63FF',
        'accent-light': '#8B85FF',
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
        'gradient-primary': 'linear-gradient(135deg, #6C63FF, #8B5CF6, #EC4899, #06B6D4)',
        'gradient-subtle': 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #fce7f3 100%)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(108, 99, 255, 0.08)',
        'glass-hover': '0 12px 40px rgba(108, 99, 255, 0.15)',
        'soft': '0 2px 16px rgba(0, 0, 0, 0.06)',
        'elevated': '0 20px 60px rgba(0, 0, 0, 0.08)',
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
          '0%': { opacity: 0.5, boxShadow: '0 0 20px rgba(108, 99, 255, 0.2)' },
          '100%': { opacity: 1, boxShadow: '0 0 40px rgba(108, 99, 255, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
