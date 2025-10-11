/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom purple palette for MemeSenseX
        'memesense': {
          50: '#faf5ff',
          100: '#f3e8ff', 
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',  // Primary dark purple
          900: '#581c87',  // Darker purple
          950: '#3C1064',  // Footer/deepest purple
        },
        // Gradient colors
        'gradient-start': '#8B5CF6',
        'gradient-end': '#3B82F6',
      },
      
      // Custom animations
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      
      // Custom shadows
      boxShadow: {
        'purple': '0 4px 14px 0 rgba(139, 92, 246, 0.39)',
        'purple-lg': '0 10px 25px -3px rgba(139, 92, 246, 0.35)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      
      // Custom gradients
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-memesense': 'linear-gradient(135deg, #8B5CF6 0%, #6B21A8 100%)',
        'gradient-hero': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      
      // Custom spacing for specific layouts
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Custom z-index values
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.btn-memesense': {
          '@apply bg-memesense-800 hover:bg-memesense-900 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]': {},
        },
        '.card-memesense': {
          '@apply bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-memesense-200': {},
        },
        '.gradient-card': {
          '@apply bg-gradient-to-br from-white to-memesense-50': {},
        },
      })
    },
  ],
}

