import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Headerfff from '../components/Headerfff';
import products from '../mobx/products';
import Productfff from '../components/Productfff';

const ShopScreenfff = () => {
  const renderProduct = () => {
    return products.list.map(prod => {
        return <Productfff key={prod.image} prod={prod} />;
      });
  };

  return (
    <>
      <Headerfff />
      <View style={{flex:1}}>
        <ScrollView style={style.scrollfff}>{renderProduct()}</ScrollView>
      </View>
    </>
    
  );
};

const style = StyleSheet.create({
  scrollfff: {
    marginTop: 20,
  },
});
export default ShopScreenfff;
