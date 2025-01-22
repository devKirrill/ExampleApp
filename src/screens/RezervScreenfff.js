import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Headerfff from '../components/Headerfff';
import Rezerv from '../components/Rezerv';

const RezervScreen = ({navigation}) => {
  const [rezerv, setRezerv] = useState(false);

  return (
    <View style={{flex: 1}}>
      <Headerfff navigation={navigation} />
      <Text style={style.title}>Резерв столика</Text>
      <View>
        <View style={style.item}>
          <TextInput
            style={style.itemText}
            placeholder="Имя"
            placeholderTextColor={'black'}></TextInput>
        </View>
        <View style={style.item}>
          <TextInput
            style={style.itemText}
            placeholderTextColor={'black'}
            placeholder="Номер телефона"></TextInput>
        </View>
        <View style={style.item}>
          <TextInput
            style={style.itemText}
            placeholderTextColor={'black'}
            placeholder="Столик"></TextInput>
        </View>
        <View style={style.item}>
          <TextInput
            style={style.itemText}
            placeholderTextColor={'black'}
            placeholder="Время"></TextInput>
        </View>
        <View style={style.item}>
          <TextInput
            style={style.itemText}
            placeholderTextColor={'black'}
            placeholder="Дата"></TextInput>
        </View>
      </View>
      <TouchableOpacity style={style.btn} onPress={() => setRezerv(true)}>
        <Text style={style.btnText}>Зарезервировать</Text>
      </TouchableOpacity>
      {rezerv && <Rezerv navigation={navigation} />}
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '500',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  item: {
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderColor: '#FFD31E',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  itemText: {
    fontSize: 17,
    paddingLeft: 20,
    paddingTop: 10,
  },
  btn: {
    backgroundColor: 'black',
    width: '80%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 'auto',
    marginBottom: 40,
  },
  btnText: {
    color: 'white',
    fontSize: 23,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 10,
  },
});
export default RezervScreen;
