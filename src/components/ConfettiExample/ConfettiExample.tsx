import React, { useState } from 'react'
import {
  View,
  Animated,
  StyleSheet,
  Button,
  Easing,
  Dimensions,
} from 'react-native'
import ConfettiBit from './ConfettiBit'

export const CONFETTI_COLORS = ['#f4a236', '#3688f4', '#ffd900']

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('screen')

const NUM_CONFETTI = 60

const Y_OFFSETS = [
  deviceHeight / 8,
  deviceHeight / 6,
  deviceHeight / 4,
  deviceHeight / 2,
]
const X_OFFSETS = [
  deviceWidth / 8,
  deviceWidth / 6,
  deviceWidth / 4,
  deviceWidth / 2,
]
const ROTATION_START_VALUES = [45, 90, 135, 180, 225]
const ROTATION_END_VALUES = [450, 540, 630, 720, 800]
const NUM_X_ROTATIONS = [3, 6, 9, 12, 15]

export default function ConfettiExample() {
  const [animatedValue] = useState(new Animated.Value(0))

  function animateConfetti() {
    animatedValue.setValue(0)
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.quad,
      useNativeDriver: true,
    }).start()
  }

  return (
    <View style={styles.container}>
      {Array(NUM_CONFETTI)
        .fill(null)
        .map((_, i) => {
          const startX = (deviceWidth / NUM_CONFETTI) * i
          const endX =
            startX < deviceWidth / 2
              ? startX + X_OFFSETS[i % X_OFFSETS.length]
              : startX - X_OFFSETS[i % X_OFFSETS.length]

          const endY = deviceHeight + Y_OFFSETS[i % Y_OFFSETS.length]
          const startY = -Y_OFFSETS[i % Y_OFFSETS.length]

          const rotateStart = `${
            ROTATION_START_VALUES[i % ROTATION_START_VALUES.length]
          }deg`
          const rotateEnd = `${
            ROTATION_END_VALUES[i % ROTATION_END_VALUES.length]
          }deg`

          const rotateXEnd = `${NUM_X_ROTATIONS[i % NUM_X_ROTATIONS.length] *
            360}deg`

          const translateX = animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [startX, endX],
          })
          const translateY = animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [startY, endY],
          })
          const rotate = animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [rotateStart, rotateEnd],
          })
          const rotateX = animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', rotateXEnd],
          })

          const style = {
            position: 'absolute',
            top: 0,
            left: 0,
            transform: [
              { translateX },
              { translateY },
              { rotate },
              { rotateX },
            ],
          }

          return (
            <ConfettiBit
              key={`confetti-bit-${i}`}
              color={CONFETTI_COLORS[i % CONFETTI_COLORS.length]}
              style={style}
            />
          )
        })}
      <View style={{ width: '100%', justifyContent: 'center', marginTop: 100 }}>
        <Button title="I demand confetti" onPress={animateConfetti} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
