import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { theme } from '../constants/theme';

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.text,
    paddingVertical: 12,
  },
})

