
import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from 'react-native';

import { Colors } from '@/constants/theme';

type InputProps = TextInputProps & { // Định nghĩa InputProps
  label?: string;
  error?: string;
  showPasswordToggle?: boolean;
};

export function Input({
  label,
  error,
  showPasswordToggle = false,
  secureTextEntry,
  editable = true,
  style,
  ...props // có nghĩa là truyền tất cả thuộc tính còn lại vào TextInput.
}: InputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const shouldHidePassword =
    secureTextEntry && !passwordVisible;

  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label}
        </Text>
      )}

      <View
        style={[
          styles.inputWrapper,
          error && styles.inputError,
          !editable && styles.inputDisabled,
        ]}
      >
        <TextInput
          {...props}
          editable={editable}
          secureTextEntry={shouldHidePassword}
          placeholderTextColor={Colors.light.textSecondary}
          style={[styles.input, style]}
        />

        {showPasswordToggle && secureTextEntry && (
          <Pressable
            onPress={() => setPasswordVisible((prev) => !prev)}
            style={styles.toggleButton}
            accessibilityRole="button"
            accessibilityLabel={
              passwordVisible ? 'Hide password' : 'Show password'
            }
          >
            <Text style={styles.toggleText}>
              {passwordVisible ? 'Hide' : 'Show'}
            </Text>
          </Pressable>
        )}
      </View>

      {error && (
        <Text style={styles.errorText}>
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 8,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
  },

  inputWrapper: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 12,
    backgroundColor: Colors.light.surface,
    paddingHorizontal: 14,
  },

  input: {
    flex: 1,
    minHeight: 48,
    fontSize: 15,
    color: Colors.light.text,
    paddingVertical: 10,
  },

  inputError: {
    borderColor: Colors.light.error,
  },

  inputDisabled: {
    opacity: 0.5,
  },

  toggleButton: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },

  toggleText: {
    color: Colors.light.primary,
    fontSize: 13,
    fontWeight: '600',
  },

  errorText: {
    color: Colors.light.error,
    fontSize: 12,
  },
});
