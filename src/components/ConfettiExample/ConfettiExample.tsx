import React, { useState } from 'react'
import { View, Animated, StyleSheet, Button, Easing } from 'react-native'
import ConfettiBit from './ConfettiBit'

export const CONFETTI_COLORS = ['#f4a236', '#3688f4', '#ffd900']

export default function ConfettiExample() {
  const [animatedValue] = useState(new Animated.Value(0))

  function animateConfetti() {
    animatedValue.setValue(0)
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 10000,
      easing: Easing.quad,
      useNativeDriver: true,
    }).start()
  }

  return (
    <View style={styles.container}>
      {Array(100)
        .fill(null)
        .map((_, i) => {
          return (
            <ConfettiBit
              key={`confetti-bit-${i}`}
              color={CONFETTI_COLORS[i % CONFETTI_COLORS.length]}
            />
          )
        })}
      <Button title="I demand confetti" onPress={animateConfetti} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'white',
  },
  slider: {
    width: 200,
  },
})
