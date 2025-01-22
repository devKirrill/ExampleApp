import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const Rezerv = ({navigation}) => {
  return (
    <View style={style.cont}>
      <View style={style.item}>
        <Text style={style.itemText}>Спасибо за резерв!</Text>
      </View>

      <Image style={style.love} source={require('../images/love.png')} />
      <TouchableOpacity
        style={style.btn}
        onPress={() => navigation.push('Home')}>
        <Text style={style.btnText}>На главную</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  cont: {
    position: 'absolute',
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  love: {
    width: 459 / 2,
    height: 459 / 2,
    marginTop: 'auto',
  },
  item: {
    backgroundColor: '#FFD31E',
    width: '100%',
    height: 90,
    marginTop: 'auto',
  },
  itemText: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    paddingTop: 20,
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
export default Rezerv;
