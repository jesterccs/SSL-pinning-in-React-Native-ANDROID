/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {ReactNode, useState} from 'react';
import {StyleSheet, View, Text, Button, Platform} from 'react-native';

const URL = 'https://jsonplaceholder.typicode.com/posts/1';

const App: () => ReactNode = ()  => {
  const [validationMsg, setValidationMsg] = useState('Waiting');
  const [validationStatus, setValidationStatus] = useState('');
  const onConnectPress =() => {
    console.log('**************');
    fetch(URL)
      .then(res => {
        console.log('**************');
        console.log(res);
        console.log('**************');
        setValidationMsg('Valid certificate, connected.');
        setValidationStatus('success');
      })
      .catch((e: any) => {
        console.log(e)
        setValidationMsg('Certificate does not match, connection refused');
        setValidationStatus('failed');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native SSL Pinning</Text>
      <Text style={styles.title}>({Platform.OS.toUpperCase()})</Text>
      <Text style={styles.header}>Certificate status:</Text>
      <Text
        style={[
          styles.status,
          validationStatus === 'success' && styles.success,
          validationStatus === 'failed' && styles.failed,
        ]}>
        {validationMsg}
      </Text>
      <View style={styles.btnContainer}>
        <Button title={`Test ${URL}`} onPress={onConnectPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    paddingTop: 46,
    fontSize: 18,
    textAlign: 'center',
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  success: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  failed: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginTop: 24,
  },
});

export default App;
