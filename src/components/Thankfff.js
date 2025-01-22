import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import fffMainSizes from '../fffMainSizes';
import fffMainColors from '../fffMainColors';

const Thankfff = () => {
  const navigation = useNavigation()

  return (
    <View style={style.fffCont}>
      <View style={style.fffItem}>
        <Text style={style.fffItemText}>Спасибо за заказ!</Text>
      </View>

      <Image style={style.fffLove} source={require('../images/qr.png')} />
      <TouchableOpacity
        style={style.fffBtn}
        onPress={() => navigation.push('Homefff')}>
        <Text style={style.fffBtnText}>На главную</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  fffCont: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fffLove: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    marginTop: 'auto',
  },
  fffItem: {
    backgroundColor: fffMainColors.light,
    width: '100%',
    height: 90,
    marginTop: 'auto',
    alignItems:'center',
    justifyContent:'center'
  },
  fffItemText: {
    fontSize: fffMainSizes.fontSize + 15,
    fontWeight: '800',
  },
  fffBtn: {
    backgroundColor: fffMainColors.black,
    marginTop: 'auto',
    alignItems:'center',
    justifyContent:'center',
    ...fffMainSizes.cartButton,
    marginBottom:40
  },
  fffBtnText: {
    color: 'white',
    fontSize: fffMainSizes.fontSize + 4,
    fontWeight: '700',
  },
});
export default Thankfff;
