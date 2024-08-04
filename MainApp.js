import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';

export default function MainApp() {

  const [modalVisible, setModalVisible] = useState(false);
  const animation = useRef(null);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <LottieView
              ref={animation}
              source={require('./static/congratulations.json')}
              autoPlay={true}
              loop={true}
              style={styles.animation}
            />
            <Text style={styles.textStyle}>Congratulations!</Text>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show message</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  animation: {
    width: 200,
    height: 200,
  },
  textStyle: {
    color: 'black',
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});