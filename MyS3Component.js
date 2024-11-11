// MyS3Component.js (CommonJS version)
const React = require('react');
const { StyleSheet, Text, View } = require('react-native');
const { SafeAreaView } = require('react-native-safe-area-context');

const MyS3Component = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Hello MyS3Component</Text>
      </View>
    </SafeAreaView>
  );
};

module.exports = MyS3Component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    marginVertical: 8,
    textAlign: 'center',
  },
});
