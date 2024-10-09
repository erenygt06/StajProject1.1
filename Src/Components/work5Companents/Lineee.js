import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import linStyle from './linStyle';

const Lineee = (props) => {
  const [currentBarIndex, setCurrentBarIndex] = useState(0);
const {data} = props
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBarIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentBarIndex]);

  const bars = Array.from({ length: 5 }, (_, index) => ({
    index,
    color: index === currentBarIndex ? 'white' : 'gray',
  }));

  return (
    <TouchableOpacity 
    
    style={linStyle.line_position}>
      {bars.map((bar) => (
        <View key={bar.index} style={[linStyle.line, { backgroundColor: bar.color }]} />
      ))}
    </TouchableOpacity>
  );
};

export default  Lineee;