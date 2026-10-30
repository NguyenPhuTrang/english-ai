
export const Palette = {
  primary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },

  secondary: {
    50: '#ECFEFF',
    100: '#CFFAFE',
    500: '#06B6D4',
    600: '#0891B2',
    700: '#0E7490',
  },

  neutral: {
    white: '#FFFFFF',
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    black: '#000000',
  },

  success: '#16A34A',
  warning: '#D97706',
  error: '#DC2626',
  info: '#2563EB',
} as const;

export const SemanticColors = {
  light: {
    text: Palette.neutral[900],
    textSecondary: Palette.neutral[500],
    background: Palette.neutral[50],
    surface: Palette.neutral.white,
    border: Palette.neutral[200],
    primary: Palette.primary[600],
    secondary: Palette.secondary[500],
    success: Palette.success,
    warning: Palette.warning,
    error: Palette.error,
  },

  dark: {
    text: Palette.neutral[50],
    textSecondary: Palette.neutral[400],
    background: Palette.neutral[900],
    surface: Palette.neutral[800],
    border: Palette.neutral[700],
    primary: Palette.primary[400],
    secondary: Palette.secondary[500],
    success: '#4ADE80',
    warning: '#FBBF24',
    error: '#F87171',
  },
} as const;
