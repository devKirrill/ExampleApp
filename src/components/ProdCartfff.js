import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import products from '../mobx/products';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Counter from './Counter';
import currency from '../currency';
import fffMainSizes from '../fffMainSizes';
import fffMainColors from '../fffMainColors';

const ProdCartfff = ({prod}) => {
  return (
    <View style={style.fffCont}>
      <Image source={prod.image} style={style.fffImg} />
      <View style={style.fffProdWrp}>
        <Text style={style.fffTitle}>{prod.title}</Text>
        <Text>{prod.desc}</Text>

        <View style={style.fffWrp}>
          <Text style={style.fffPrice}>{prod.price}{currency}</Text>
          <Counter prod={prod} />
          <TouchableOpacity onPress={() => products.removeProduct(prod.id)}>
            <FontAwesomeIcon icon={'trash'} color={fffMainColors.red} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  fffCont: {
    flexDirection: 'row',
    ...fffMainSizes.cartProdCont
  },
  fffImg: {
    ...fffMainSizes.cartProdImage
  },
  fffProdWrp: {
    ...fffMainSizes.cartProdWrapper
  },
  fffTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 5,
  },
  fffWrp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    marginTop: 10,
  },
  fffPrice: {
    fontSize: 20,
    fontWeight: '700',
  },
});
export default ProdCartfff;
