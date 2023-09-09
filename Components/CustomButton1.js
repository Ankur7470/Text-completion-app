import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton1 = ({title, onPress, buttonStyle, textStyle, disabled}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle, disabled ? styles.disabledButton : null]} onPress={onPress} disabled={disabled}>
      <Text style={[styles.text, textStyle, disabled ? styles.disabledText : null]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        // backgroundColor: 'indigo',
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    text: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    disabledButton: {
      backgroundColor: '#ccc',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 0,
    },
    disabledText: {
      color: '#999',
    },
  });

export default CustomButton1;
