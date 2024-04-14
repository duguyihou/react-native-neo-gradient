import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import Gradient from 'react-native-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <Gradient style={styles.box} colors={['red', 'blue']} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
