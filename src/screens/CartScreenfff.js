import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Headerfff from '../components/Headerfff';
import products from '../mobx/products';
import ProdCartfff from '../components/ProdCartfff';
import {observer} from 'mobx-react-lite';
import EmptyCartfff from '../components/EmptyCartfff';
import Thankfff from '../components/Thankfff';
import currency from '../currency';
import fffMainColors from '../fffMainColors';
import fffMainSizes from '../fffMainSizes';

const CartScreen = ({navigation}) => {
  const [thankfff, setThankfff] = useState(false);

  const renderProduct = () => {
    return products.list
      .filter(el => el.added)
      .map(prod => {
        return <ProdCartfff key={prod.title} prod={prod} />;
      });
  };

  const all = () => {
    return products.list.filter(el => el.added).reduce((acc, el) => acc += el.price * el.count, 0)
  };

  return (
    <>
      <Headerfff navigation={navigation} />

      <>
        { thankfff ? <Thankfff /> : products.list.some(el => el.added) ? (
          <>
            <ScrollView style={{marginTop:10}}>{renderProduct()}</ScrollView>
            <View style={style.fffSumWrp}>
              <View style={style.fffSum}>
                <Text style={style.fffSumText}>Сумма к оплате</Text>
                <Text style={style.fffSumText}>{all()}{currency}</Text>
              </View>
              <TouchableOpacity onPress={() => setThankfff(true)}>
                <View style={style.fffBtn}>
                  <Text style={style.fffBtnText}>Заказать</Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <EmptyCartfff />
        )}
      </>
    </>
  );
};

const style = StyleSheet.create({
  fffSumWrp: {
    marginTop: 'auto',
    marginBottom: 40 + fffMainSizes.num,
  },
  fffSum: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    ...fffMainSizes.cartSumm
  },
  fffSumText: {
    fontSize: fffMainSizes.fontSize + 4,
    fontWeight: '900',
  },
  fffBtn: {
    ...fffMainSizes.cartButton,
    backgroundColor: fffMainColors.black,
    marginHorizontal:'auto',
    alignItems:'center',
    justifyContent:'center'
  },
  fffBtnText: {
    color: 'white',
    fontSize: fffMainSizes.fontSize + 4,
    fontWeight: '700',
  },
});
export default observer(CartScreen);
