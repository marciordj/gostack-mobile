import React, {Fragment} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <View style={styles.container}>
        <Text style={styles.text}>Hello Word</Text>
      </View>
    </Fragment>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
