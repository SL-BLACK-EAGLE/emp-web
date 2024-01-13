import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fc8b23',
        'secondary': '#120E0B',
        'txt-gray': '#8D8B89',
        'white': '#fffeee',
        'green': '#00f099',
        'yellow': '#f0ff00',
        'h1': '#123456',
        'h2': '#234567',
        'h3': '#345678',
        'h4': '#456789',
        'h5': '#567890',
        'p': '#678901',
        'span': '#8D8B89',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2' }],
        'h2': ['2rem', { lineHeight: '1.25' }],
        'h3': ['1.75rem', { lineHeight: '1.3' }],
        'h4': ['1.5rem', { lineHeight: '1.35' }],
        'h5': ['1.25rem', { lineHeight: '1.45' }],
        'span': ['1.2rem', { lineHeight: '1.5' }],
        'p': ['1rem', { lineHeight: '1.5' }],
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('flowbite/plugin'),
      nextui({
    themes: {
      "purple-dark": {
        extend: "dark", // <- inherit default values from dark theme
        colors: {
          background: "#0D001A",
          foreground: "#ffffff",
          primary: {
            50: "#3B096C",
            100: "#520F83",
            200: "#7318A2",
            300: "#9823C2",
            400: "#c031e2",
            500: "#DD62ED",
            600: "#F182F6",
            700: "#FCADF9",
            800: "#FDD5F9",
            900: "#FEECFE",
            DEFAULT: "#DD62ED",
            foreground: "#ffffff",
          },
          focus: "#F182F6",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
    },
  }),
    function ({ addBase }: { addBase: (styles: Record<string, any>) => void }) {
      addBase({
        'h1': { color: '#123456', fontSize: '3.5rem', lineHeight: '1.25' },
        'h2': { color: '#234567', fontSize: '2.5rem', lineHeight: '1.3' },
        'h3': { color: '#345678', fontSize: '2rem', lineHeight: '1.35' },
        'h4': { color: '#dedede' , fontSize: '1.75rem', lineHeight: '1.45'},
        'h5': { color: '#567890', fontSize: '1.5rem', lineHeight: '1.5' },
        'span': { color: '#8D8B89', fontSize: '1.2rem', lineHeight: '1.5' },
        'p': { color: '#678901', fontSize: '1rem', lineHeight: '1.5' },
      })
    }
    ],
}
export default config
