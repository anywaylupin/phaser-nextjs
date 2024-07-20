import type { Config } from 'tailwindcss';
import { colors, plugins } from './themes';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        azure: {
          DEFAULT: colors.azure
        },
        turquoise: {
          DEFAULT: colors.turquoise
        },
        light: {
          DEFAULT: colors.light
        },
        dark: {
          DEFAULT: colors.dark
        }
      }
    }
  },
  plugins
} satisfies Config;
