import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import fffMainColors from '../fffMainColors';
import fffMainSizes from '../fffMainSizes';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
const navigation = useNavigation()

  return (
    <View style={style.fffCont}>
      <TouchableOpacity
        style={style.fffBars}
        onPress={() => navigation.push('Homefff')}>
        <FontAwesomeIcon icon={'bars'} size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.bars}
        onPress={() => navigation.push('Cartfff')}>
        <FontAwesomeIcon icon={'cart-plus'} size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  fffCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: fffMainColors.black,
    ...fffMainSizes.headerCont
  },
  fffBars: {
    alignSelf: 'center',
  },
});
export default Header;
