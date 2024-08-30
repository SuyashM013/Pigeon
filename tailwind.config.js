/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#00FFF5',
        'back1': '#1a2a47',
        'hover': '#393E46',
        'add': '#00ADB5',
        'gr1': '#141e30',
        'gr2': '#243b55',
        'p': '#36C2CE',
        'codebg': '#2f3033'


      },
      scale: {
        '102': '1.02',
      },
      fontFamily: {
        'display': ["Chakra Petch", 'sans-serif'],
        'Heading': ["Bona Nova SC", 'serif'],
        'headR': ["Preahvihear", 'sans-serif'],
        'code': ["Source Code Pro", 'monospace']
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(1%)' },
          '50%': { transform: 'translateY(0)' },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        'pulse-fast': 'pulse 0.8s cubic-bezier(0,0,0,4)  infinite',
        'bounce': 'bounce 1s linear infinite',
        'slidein': "slidein 1s ease 300ms",
        'slidein500': "slidein 1s ease 500ms",
        'slidein700': "slidein 1s ease 700ms",
      },
      backgroundImage: {
        'back': "url('/pngs/bac.jpg')",

      },

    },
  },
  plugins: [],
}

