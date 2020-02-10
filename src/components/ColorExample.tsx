import React, { useState } from 'react'
import { View, Text, Animated, Slider, StyleSheet } from 'react-native'

export default function ColorExample() {
  const [animatedValue] = useState(new Animated.Value(0))
  const [value, setValue] = useState(0)

  function handleValueChange(value: number) {
    animatedValue.setValue(value)
    setValue(value)
  }

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'blue'],
  })

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50],
  })

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          { backgroundColor, transform: [{ translateY }] },
        ]}
      />

      <Slider
        minimumValue={0}
        maximumValue={1}
        step={0.01}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="red"
        onValueChange={handleValueChange}
        style={styles.slider}
      />
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
