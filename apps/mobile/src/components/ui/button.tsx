
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  type PressableProps,
  type ViewStyle,
} from 'react-native';

import { Colors } from '@/constants/theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = Omit<PressableProps, 'children' | 'ref'> & {// Omit<Type, 'key'> là một công cụ có sẵn của TypeScript: lấy một kiểu có sẵn rồi bỏ bớt một (hoặc vài) thuộc tính ra khỏi nó.
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
};

export function Button({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  style,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading; // Nút sẽ bị vô hiệu hóa nếu disabled là true hoặc đang loading. Mục đích: khi đang tải, người dùng không bấm thêm lần nữa được.
 
  return (
    <Pressable
      {...props}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        styles[size],
        styles[variant],
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        pressed && !isDisabled && styles.pressed,
        style as ViewStyle,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'outline' || variant === 'ghost' ? Colors.light.primary : '#FFFFFF'}
        />
      ) : (
        <Text
          style={[
            styles.label,
            styles[`${variant}Label`],
            styles[`${size}Label`],
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    gap: 8,
  },

  sm: {
    minHeight: 36,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  md: {
    minHeight: 48,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  lg: {
    minHeight: 56,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },

  primary: {
    backgroundColor: Colors.light.primary,
  },

  secondary: {
    backgroundColor: Colors.light.secondary,
  },

  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.light.primary,
  },

  ghost: {
    backgroundColor: 'transparent',
  },

  fullWidth: {
    width: '100%',
  },

  disabled: {
    opacity: 0.5,
  },

  pressed: {
    opacity: 0.8,
  },

  label: {
    fontWeight: '600',
    textAlign: 'center',
  },

  primaryLabel: {
    color: '#FFFFFF',
  },

  secondaryLabel: {
    color: '#FFFFFF',
  },

  outlineLabel: {
    color: Colors.light.primary,
  },

  ghostLabel: {
    color: Colors.light.primary,
  },

  smLabel: {
    fontSize: 13,
  },

  mdLabel: {
    fontSize: 15,
  },

  lgLabel: {
    fontSize: 17,
  },
});
