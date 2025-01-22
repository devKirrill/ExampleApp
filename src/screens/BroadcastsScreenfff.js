import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Headerfff from '../components/Headerfff';
import trunsList from '../data/trunsList';
import { useNavigation } from '@react-navigation/native';
import fffMainColors from '../fffMainColors';
import fffMainSizes from '../fffMainSizes';

const BroadcastsScreenfff = () => {
const navigation = useNavigation()

  const renderItem = () => {
    return trunsList
      .map(el => (
        <View style={style.fffCont}>
          <Text style={style.fffLiga}>{el.liga}</Text>
          <View style={style.fffWrp}>
            <Text style={style.fffDate}>{el.date}.02.2025 </Text>
            <Text style={style.fffTime}>{el.time}</Text>
            <View style={style.fffSolid}></View>
            <Text style={style.fffTeam}>{el.team1}</Text>
            <Text style={style.fffTeam}>{el.team2}</Text>
          </View>
        </View>
      ));
  };

  return (
    <>
      <Headerfff navigation={navigation} />
      <Text style={style.fffTitle}> Трансляции</Text>
      <View style={{flex:1}}>
        <ScrollView>{renderItem()}</ScrollView>
      </View>
    </>
    
  );
};

const style = StyleSheet.create({
  fffCont: {
    width: 90 +  + fffMainSizes.num + '%',
    height: 120 + fffMainSizes.num,
    borderWidth: 2,
    borderColor: fffMainColors.light,
    borderRadius: 10 + fffMainSizes.num,
    marginBottom: 20 + fffMainSizes.num,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fffLiga: {
    fontSize: fffMainSizes.fontSize + 5,
    fontWeight: '700',
    alignSelf: 'center',
    width: 40 + fffMainSizes.num + '%',
  },
  fffTitle: {
    fontSize: fffMainSizes.fontSize + 10,
    fontWeight: '500',
    alignSelf: 'center',
    paddingTop: 10 + fffMainSizes.num,
    paddingBottom: 20 + fffMainSizes.num,
  },
  fffWrp: {
    alignSelf: 'center',
    width: 50 + fffMainSizes.num + '%',
  },
  fffDate: {
    fontSize: fffMainSizes.fontSize + 1,
    fontWeight: '600',
    textAlign: 'center',
  },
  fffTime: {
    fontSize: fffMainSizes.fontSize + 1,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5 + fffMainSizes.num,
  },
  fffTeam: {
    fontSize: fffMainSizes.fontSize + 1,
    fontWeight: '600',
    textAlign: 'center',
  },
  fffSolid: {
    height: 5,
    backgroundColor: fffMainColors.light,
    marginBottom: 5,
  },
});
export default BroadcastsScreenfff;
