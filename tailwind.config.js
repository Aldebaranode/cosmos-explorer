/** @type {import('tailwindcss').Config} */
console.log(require('daisyui/src/theming/themes')['dracula'])
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yes: '#3fb68b',
        no: '#ff5353',
        info: '#00b2ff',
        main: 'var(--text-main)',
        secondary: 'var(--text-secondary)',
        active: 'var(--bg-active)',
      },
    },
  },
  plugins: [
    require('daisyui'), 
    require('tailwind-scrollbar-daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['fantasy'],
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dracula'],
          // 'base-100': '#31363F',
          // 'base-200': '#222831',
          // // 'base-100': '#2a334c',
          // // 'base-200': '#252d37'
        },
      },
    ],
  },
};
