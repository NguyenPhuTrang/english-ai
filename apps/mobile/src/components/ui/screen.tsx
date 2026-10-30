
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  type ScrollViewProps,
  type ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

type ScreenProps = {
  children: React.ReactNode;
  scrollable?: boolean;
  padding?: number;
  backgroundColor?: string;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  scrollViewProps?: Omit<ScrollViewProps, 'contentContainerStyle'>;
};

export function Screen({
  children,
  scrollable = false,
  padding = 20,
  backgroundColor = Colors.light.background,
  style,
  contentContainerStyle,
  scrollViewProps,
}: ScreenProps) {
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor },
        style,
      ]}
    >
      {scrollable ? (
        <ScrollView
          {...scrollViewProps}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.scrollContent,
            { padding },
            contentContainerStyle,
          ]}
        >
          {children}
        </ScrollView>
      ) : (
        <View
          style={[
            styles.content,
            { padding },
            contentContainerStyle,
          ]}
        >
          {children}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },
});
