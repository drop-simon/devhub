import React from 'react'
import { View, StyleSheet } from 'react-native'
import ConfettiBit from './ConfettiBit'

export const CONFETTI_COLORS = [
  '#f4a236',
  '#3688f4',
  '#ff0024',
  '#ff66c7',
  '#3ef882',
  '#ffdb00',
]
const NUM_CONFETTI = 100

export default function ConfettiExample() {
  return (
    <View style={styles.container}>
      {Array(NUM_CONFETTI)
        .fill(null)
        .map((_, index) => {
          return (
            <ConfettiBit
              key={`confetti-${index}`}
              color={CONFETTI_COLORS[index % CONFETTI_COLORS.length]}
            />
          )
        })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
})
