/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
      colors: {
        bcdBlue: '#5B57FF'
      },
      animation: {
        glow: 'glow 1.5s ease-in-out infinite',
        gradientFlow: 'gradientFlow 3s ease infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px rgba(59,130,246,1), 0 0 10px rgba(59,130,246,1)' },
          '50%': { textShadow: '0 0 15px rgba(59,130,246,1), 0 0 30px rgba(59,130,246,1)' },
          '100%': { textShadow: '0 0 5px rgba(59,130,246,1), 0 0 10px rgba(59,130,246,1)' },
        },
        gradientFlow: {
          '0%, 100%': {
            'background-size': '150% 150%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '150% 150%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
