import React from 'react';
import { TextInput, View, Text, StyleSheet, TextInputProps } from 'react-native';
import { FONT_FAMILY_GOTHIC_A1 } from '../constants/fonts';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ label, error, style, ...props }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, style, error && styles.inputError]}
        placeholderTextColor="#999"
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    fontFamily: FONT_FAMILY_GOTHIC_A1,
  },
  input: {
   
    height: 48,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    fontSize: 18,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
    // Bottom shadow only
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 4,
  },
  inputError: {
    borderColor: '#ff4d4f',
  },
  error: {
    color: '#ff4d4f',
    fontSize: 13,
    marginTop: 4,
  },
});

export default CustomTextInput;
