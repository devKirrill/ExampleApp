import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import products from '../mobx/products';
import currency from '../currency';
import fffMainSizes from '../fffMainSizes';
import fffMainColors from '../fffMainColors';

const Product = ({prod}) => {
  const [pressfff, setPressfff] = useState(prod.added);

  const addProduct = () => {
    setPressfff(true);
    products.addProduct(prod.id, 1);
  };

  return (
    <View style={style.fffCont}>
      <Image source={prod.image} style={style.fffImg} />
      <View style={style.fffProdWrp}>
        <Text style={style.fffTitle}>{prod.title}</Text>
        <Text>{prod.desc}</Text>

        <View style={style.fffWrp}>
          {pressfff ? (
            <TouchableOpacity style={style.fffBtn}>
              <Text style={style.fffBtnText}>Добавлено</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={style.fffButten} onPress={addProduct}>
              <Text style={style.fffButtenText}>Купить</Text>
            </TouchableOpacity>
          )}
          <Text style={style.fffPrice}>{prod.price}{currency}</Text>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  fffCont: {
    flexDirection: 'row',
    borderColor: fffMainColors.black,
    ...fffMainSizes.productCont
  },
  fffImg: {
    ...fffMainSizes.productImage
  },
  fffProdWrp: {
    width: Dimensions.get('window').width - fffMainSizes.productImage.width - 50,
    alignSelf: 'center',
    marginLeft: 10 - fffMainSizes.num,
  },
  fffTitle: {
    fontSize: fffMainSizes.fontSize,
    fontWeight: '700',
    marginBottom: 5,
    color: fffMainColors.lightDark
  },
  fffWrp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  fffButten: {
    backgroundColor: fffMainColors.light,
    alignItems:'center',
    justifyContent:'center',
    ...fffMainSizes.productBuyButton
  },
  fffButtenText: {
    textAlign: 'center',
    paddingTop: 3,
    fontSize: fffMainSizes.fontSize,
    fontWeight: '700',
  },
  fffPrice: {
    fontSize: fffMainSizes.fontSize + 4,
    fontWeight: '700',
    color: fffMainColors.green
  },
  fffBtn: {
    backgroundColor: fffMainColors.green,
    ...fffMainSizes.productDoneButton
  },
  fffBtnText: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 3,
    fontSize: fffMainSizes.fontSize,
    fontWeight: '700',
  },
});
export default Product;
