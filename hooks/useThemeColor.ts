import { useState, useEffect, useCallback } from 'react';
import { useColorScheme, ColorSchemeName } from 'react-native';

interface ThemeColors {
  background: string;
  text: string;
}

const generateRandomColor = (colorScheme: ColorSchemeName): string => {
  // Define lightness factor based on the color scheme
  const lightness = colorScheme === 'light' ? 0.9 : 0.2;

  // Generate random RGB values and adjust based on lightness
  const [r, g, b] = [0, 0, 0].map(() => Math.round(Math.random() * 255 * lightness));

  // Convert adjusted RGB values to HEX
  return `#${[r, g, b].map(c => c.toString(16).padStart(2, '0')).join('')}`;
};


export function useThemeColor(): [ThemeColors, () => void] {
  const colorScheme = useColorScheme() ?? 'light';

  const [colors, setColors] = useState<ThemeColors>(() => ({
    background: generateRandomColor(colorScheme),
    text: colorScheme === 'light' ? '#000000' : '#FFFFFF',
  }));

  useEffect(() => {
    setColors({
      text: colorScheme === 'light' ? '#000000' : '#FFFFFF',
      background: generateRandomColor(colorScheme),
    });
  }, [colorScheme]);

  const updateColors = useCallback(() => {
    setColors({
      text: colorScheme === 'light' ? '#000000' : '#FFFFFF',
      background: generateRandomColor(colorScheme),
    });
  }, [colorScheme]);

  return [colors, updateColors];
}
