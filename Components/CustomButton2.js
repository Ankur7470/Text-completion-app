import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton2 = ({title, onPress, buttonStyle, textStyle, disabled}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle, disabled ? styles.disabledButton : null]} onPress={onPress} disabled={disabled}>
      <Text style={[styles.text, textStyle, disabled ? styles.disabledText : null]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'indigo',
        // backgroundColor: "white",
        borderColor: "black",
        borderRadius: 2,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginBottom: 20,
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
        fontSize: 18,
        fontWeight: "bold",
        // color: "black",
        textAlign: "center",
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

export default CustomButton2;
