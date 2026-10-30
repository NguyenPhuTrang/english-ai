import { Colors } from "@/constants/theme";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type LoadingProps = {
    message?: string,
    fullScreen?: boolean;
    size?: 'small' | 'large';
};

export function Loading({
    message,
    fullScreen = false,
    size = 'large',
}: LoadingProps) {
  return (
    <View
      style={[
        styles.container,
        fullScreen && styles.fullScreen,
      ]}
    >
      <ActivityIndicator
        size={size}
        color={Colors.light.primary}
      />

      {message && (
        <Text style={styles.message}>
          {message}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 16,
  },

  fullScreen: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  message: {
    fontSize: 14,
    color: Colors.light.textSecondary,
    textAlign: 'center',
  },
});