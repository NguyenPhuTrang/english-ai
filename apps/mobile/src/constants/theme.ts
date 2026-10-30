import '@/global.css';

import { Platform } from 'react-native';
import { Palette, SemanticColors } from './colors';

export const Colors = {
  light: {
    ...SemanticColors.light,
    backgroundElement: Palette.neutral[100],
    backgroundSelected: Palette.primary[100],
  },
  dark: {
    ...SemanticColors.dark,
    backgroundElement: Palette.neutral[800],
    backgroundSelected: Palette.primary[900],
  },
} as const;

export type ThemeColor = keyof typeof Colors.light &
  keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({
  ios: 50,
  android: 80,
}) ?? 0;

export const MaxContentWidth = 800;