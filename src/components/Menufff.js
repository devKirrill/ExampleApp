import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fffMainSizes from '../fffMainSizes';
import fffMainColors from '../fffMainColors';
import fffLabel from '../fffLabel';

const fffItemsList = [
  {
    name: 'Shopfff',
    title: 'Магазин'
  },
  {
    name: 'Broadcastsfff',
    title: 'Трансляции'
  },
  // {
  //   name: 'Rezervfff',
  //   title: 'Резерв столика'
  // },
  {
    name: 'Contactfff',
    title: 'Контакты'
  },
  {
    name: 'Cartfff',
    title: 'Корзина'
  }
]

const fffMenu = () => {

  const navigation = useNavigation()

  const fffRenderItem = () => {
    return fffItemsList.map(el => (
      <TouchableOpacity
          key={el.name}
          style={style.fffMenuItem}
          onPress={() => navigation.push(el.name)}>
          <Text style={style.fffMenuText}>{el.title}</Text>
        </TouchableOpacity>
    ))
  }

  return (
    <View style={style.fffCont}>
      <View style={style.fffLogoWrp}>
        <Text style={{fontSize: fffLabel.fontSize}}>{fffLabel.text}</Text>
      </View>
      <View style={{flex: 1}}>
       {fffRenderItem()}
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  fffCont: {
    flex:1,
  },
  fffLogoWrp: {
    backgroundColor: fffMainColors.light,
    ...fffMainSizes.fffLogoWrp,
    justifyContent:'center',
    alignItems:'center'
  },
  fffMenuItem: {
    ...fffMainSizes.fffMenuItem,
    bordeColor: fffMainColors.black,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:'auto'
  },
  fffMenuText: {
    color: fffMainColors.black,
    ...fffMainSizes.fffMenuText
  },
});
export default fffMenu;
