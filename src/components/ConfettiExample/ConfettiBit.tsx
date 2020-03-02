import React from 'react'
import { Animated, StyleSheet } from 'react-native'

export default function ConfettiBit({
  style,
  color,
}: {
  style?: any
  color: string
}) {
  return (
    <Animated.View
      style={[styles.confettiBit, { backgroundColor: color }, style]}
    />
  )
}

const styles = StyleSheet.create({
  confettiBit: {
    width: 25,
    height: 10,
    borderRadius: 5,
  },
})
