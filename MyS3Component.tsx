import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {SafeAreaView} from 'react-native-safe-area-context'

const MyS3Component = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Hello MyS3Component</Text>
      </View>
    </SafeAreaView>
  )
}

export default MyS3Component

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    marginVertical: 8,
    textAlign: 'center',
  },
})

