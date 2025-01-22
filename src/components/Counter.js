import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import products from '../mobx/products';

const Counter = ({prod}) => {
  const [cnt, setCnt] = useState(1);

  useEffect(() => {
    products.changeCnt(prod.id, cnt)
  }, [cnt])

  const inc = () => {
    setCnt(cnt + 1);
  };

  const dec = () => {
    if (cnt === 1) {
      return;
    }
    setCnt(cnt - 1);
  };
  return (
    <View style={style.cont}>
      <TouchableOpacity style={style.dec} onPress={dec}>
        <Text style={style.text}>-</Text>
      </TouchableOpacity>
      <Text style={style.cnt}>{cnt}</Text>
      <TouchableOpacity style={style.dec} onPress={inc}>
        <Text style={style.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderRadius: 10,
    width: '25%',
    height: 30,
    paddingTop: 3,
  },
  cnt: {
    fontSize: 17,
    fontWeight: '700',
  },
  text: {
    fontSize: 17,
    fontWeight: '700',
  },
});
export default Counter;
