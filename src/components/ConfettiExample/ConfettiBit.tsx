import React from 'react'
import { Animated, StyleSheet } from 'react-native'

export const CONFETTI_WIDTH = 20

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
    width: CONFETTI_WIDTH,
    height: 10,
    borderRadius: 5,
  },
})
