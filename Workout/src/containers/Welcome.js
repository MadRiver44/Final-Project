import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export const Welcome = () => (
  <View style={{ flex: 1 }}>
    <LinearGradient
      colors={['#4A148C', '#880E4F']}
      style={styles.container}
      >

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Workout
        </Text>
      </View>

      <View style={styles.lastWorkoutContainer}>
        <Text style={styles.lastWorkoutTitle}>
          Your last Workout
        </Text>
      </View>
      <View style={{padding: 30}}>
      <Button
        onPress={props.onStartWorkout}
        style={styles.button}
        textStyle={styles.buttonText}
        children={'Start Workout'}
        />
        </View>
      </LinearGradient>
  </View>


  )
