import React, { useState } from 'react'
import { Text, View, Animated, StyleSheet, Button } from 'react-native'
import ConfettiBit from './ConfettiExample/ConfettiBit'
import { CONFETTI_COLORS } from './ConfettiExample/ConfettiExample'

const MOCK_PHONE_WIDTH = 200
const MOCK_PHONE_HEIGHT = 400

const Y_OFFSETS = [35, 70, 105, 140]
const X_OFFSETS = [25, 50, 75, 100]

const ROTATE_START_AMOUNTS = [35, 70, 105, 140]
const ROTATE_END_AMOUNTS = [210, 280, 350, 420]

export default function ConfettiExample() {
  const [animatedValue] = useState(new Animated.Value(0))
  const [step, setStep] = useState(0)

  function goToNextStep() {
    const nextStep = step + 1
    Animated.timing(animatedValue, {
      toValue: nextStep,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      if (nextStep === 4) {
        setStep(0)
        animatedValue.setValue(0)
      } else {
        setStep(nextStep)
      }
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.iPhone}>
        {Array(10)
          .fill(null)
          .map((_, i) => {
            const startX = (MOCK_PHONE_WIDTH / 10) * i
            const startY = i * -10

            const translateX = animatedValue.interpolate({
              inputRange: [0, 1, 2, 3, 4],
              outputRange: [
                0,
                startX,
                startX,
                startX > MOCK_PHONE_WIDTH / 2
                  ? startX - X_OFFSETS[i % X_OFFSETS.length]
                  : startX + X_OFFSETS[i % X_OFFSETS.length],
                0,
              ],
            })

            const translateY = animatedValue.interpolate({
              inputRange: [0, 1, 2, 3, 4],
              outputRange: [
                0,
                startY,
                startY - Y_OFFSETS[i % Y_OFFSETS.length],
                startY + Y_OFFSETS[i % Y_OFFSETS.length] + MOCK_PHONE_HEIGHT,
                0,
              ],
            })

            const rotate = animatedValue.interpolate({
              inputRange: [0, 1, 2, 3, 4],
              outputRange: [
                '0deg',
                '0deg',
                `${ROTATE_START_AMOUNTS[i % ROTATE_START_AMOUNTS.length]}deg`,
                `${ROTATE_END_AMOUNTS[i % ROTATE_END_AMOUNTS.length]}deg`,
                '0deg',
              ],
            })

            const style = {
              transform: [{ translateX }, { translateY }, { rotate }],
            }

            return (
              <ConfettiBit
                key={`confetti-bit-${i}`}
                color={CONFETTI_COLORS[i % CONFETTI_COLORS.length]}
                style={style}
              />
            )
          })}
        <Button title={step === 3 ? 'reset' : 'next'} onPress={goToNextStep} />
        <Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },
  iPhone: {
    width: MOCK_PHONE_WIDTH,
    height: MOCK_PHONE_HEIGHT,
    borderWidth: 4,
    borderRadius: 20,
    marginBottom: 50,
    backgroundColor: 'white',
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
