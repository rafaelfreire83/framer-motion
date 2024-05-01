import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',
      gray: {
        900: '#1B1B1B',
        800: '#333333'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Inter, sans-serif'],
      },
      container: {
        center: true,        
      }
    },
  },
  plugins: [],
}
export default config
