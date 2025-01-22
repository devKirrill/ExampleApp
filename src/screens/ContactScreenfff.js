import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Headerfff from '../components/Headerfff';
import { useNavigation } from '@react-navigation/native';
import contacts from '../contacts';
import fffMainColors from '../fffMainColors';
import fffMainSizes from '../fffMainSizes';

const ContactScreen = () => {

const navigation = useNavigation()

  return (
    <View>
      <Headerfff />
      <Text style={style.fffTitle}>Контакты</Text>
      <View style={style.fffList}>
        <View style={style.fffItem}>
          <Text style={style.fffItemText}>{contacts.phone}</Text>
        </View>
        <View style={style.fffItem}>
          <Text style={style.fffItemText}>{contacts.sity}</Text>
        </View>
        <View style={style.fffItem}>
          <Text style={style.fffItemText}>{contacts.adress}</Text>
        </View>
        <View style={style.fffItem}>
          <Text style={style.fffItemText}>{contacts.country}</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  fffTitle: {
    fontSize: fffMainSizes.fontSize + 10,
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 20,
    textAlign:'center'
  },
  fffList: {
    alignItems:'center',
    justifyContent:'center'
  },
  fffItem: {
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderColor: fffMainColors.light,
    borderRadius: 10,
    marginBottom: 20,
  },
  fffItemText: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 10,
  },
});
export default ContactScreen;
