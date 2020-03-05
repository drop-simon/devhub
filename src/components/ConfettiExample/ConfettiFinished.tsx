import React, { useState } from 'react'
import {
  View,
  Animated,
  StyleSheet,
  Easing,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native'
import ConfettiBit, { CONFETTI_WIDTH } from './ConfettiBit'

export const CONFETTI_COLORS = [
  '#f4a236',
  '#3688f4',
  '#ff0024',
  '#ff66c7',
  '#3ef882',
  '#ffdb00',
]
const NUM_CONFETTI = 100

export default function ConfettiFinished() {
  const { width: deviceWidth, height: deviceHeight } = Dimensions.get('screen')

  const [animatedValue] = useState(new Animated.Value(0))
  const [confettiStyles] = useState(
    Array(NUM_CONFETTI)
      .fill(null)
      .map(() => {
        const startX = Math.random() * deviceWidth
        const endX = Math.random() * deviceWidth
        const translateX = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [startX, endX],
        })

        const startY = -CONFETTI_WIDTH - Math.random() * deviceHeight
        const endY =
          deviceHeight + CONFETTI_WIDTH + Math.random() * deviceHeight
        const translateY = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [startY, endY],
        })

        const rotateStart = `${Math.random() * 360}deg`
        const rotateEnd = `${Math.random() * 5 * 360}deg`
        const rotate = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [rotateStart, rotateEnd],
        })

        const rotateXStart = `${Math.random() * 360}deg`
        const rotateXEnd = `${Math.random() * 15 * 360}deg`
        const rotateX = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [rotateXStart, rotateXEnd],
        })

        return {
          position: 'absolute',
          top: 0,
          left: 0,
          transform: [{ translateX }, { translateY }, { rotate }, { rotateX }],
        }
      })
  )

  function animateConfetti() {
    animatedValue.setValue(0)
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start()
  }

  return (
    <View style={styles.container}>
      {confettiStyles.map((style, index) => (
        <ConfettiBit
          key={`confetti-bit-${index}`}
          color={CONFETTI_COLORS[index % CONFETTI_COLORS.length]}
          style={style}
        />
      ))}
      <View style={{ width: '100%', alignItems: 'center', marginTop: 400 }}>
        <TouchableOpacity onPress={animateConfetti}>
          <Text style={{ fontSize: 64 }}>🎊</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
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
