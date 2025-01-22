import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Menufff from '../components/Menufff';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Menufff navigation={navigation} />
    </View>
  );
};

const style = StyleSheet.create({});
export default HomeScreen;
