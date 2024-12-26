/* eslint-disable prettier/prettier */

import React from 'react';
import {View, StyleSheet} from 'react-native';

const SectionLine: React.FC = () => {
  return <View style={style.line} />;
};
const style = StyleSheet.create({
  line: {
    width: 8,
    height: '100%',
    borderRadius: 5,
    backgroundColor: '#F6C700',
    marginRight: 15,
  },
});

export default SectionLine;