
import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  type PressableProps,
  type ViewStyle,
} from 'react-native';

import { Colors } from '@/constants/theme';

type CardProps = {
  children: React.ReactNode;
  onPress?: PressableProps['onPress'];
  padding?: number;
  style?: ViewStyle;
};

export function Card({
  children,
  onPress,
  padding = 16,
  style,
}: CardProps) {
  const content = (
    <View style={[styles.content, { padding }]}>
      {children}
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.card,
          pressed && styles.pressed,
          style,
        ]}
      >
        {content}
      </Pressable>
    );
  }

  return (
    <View style={[styles.card, style]}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.light.border,
    overflow: 'hidden',
  },

  content: {
    width: '100%',
  },

  pressed: {
    opacity: 0.85,
  },
});
