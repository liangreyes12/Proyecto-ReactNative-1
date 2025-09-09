import React, { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Separator = () => <View style={styles.separator} />;

const App = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Button
            title="Mostrar imagen"
            color="#f194ff"
            onPress={() => setShowImage(!showImage)}
          />
          {showImage && (
            <Image
              source={require('../../assets/images/gorda.jpg')}
              style={{ width: 400, height: 400, marginTop: 20 }}
            />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  }, 
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;