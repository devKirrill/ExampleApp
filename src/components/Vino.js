import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Vino = ({navigation}) => {
  return (
    <ImageBackground style={style.cont} source={require('../images/bg1.png')}>
      <TouchableOpacity onPress={() => navigation.push('Event')}>
        <FontAwesomeIcon
          style={style.back}
          icon={'angle-left'}
          size={40}
          color="white"
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};
const style = StyleSheet.create({
  cont: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  back: {
    marginTop: 70,
    marginLeft: 20,
  },
});
export default Vino;
