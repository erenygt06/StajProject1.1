import {StyleSheet, Text, View, Modal} from 'react-native';
import React from 'react';
import {useState} from 'react';
import ButtonComponents from './ButtonComponents';
const ModalCompanent = () => {
  let [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View>
          <View style={ButtonStayles.ModalViev}>
            <Text style={ButtonStayles.ModalTitleText}>Change Password</Text>
            <View style={ButtonStayles.ModalText}>
              <Text style={ButtonStayles.ModalText1}>Password</Text>
            </View>
            <View style={ButtonStayles.PaswordViev}>
              <Text style={ButtonStayles.ModalText1}>Password</Text>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              {children}
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalCompanent;

const styles = StyleSheet.create({});
