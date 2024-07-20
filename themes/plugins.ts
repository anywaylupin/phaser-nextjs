import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

export const VariablesForColors = ({ addBase, theme }: any) => {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({ ':root': newVars });
};

export const plugins = [VariablesForColors];
