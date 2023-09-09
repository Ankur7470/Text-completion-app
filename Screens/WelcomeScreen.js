import { StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import CustomButton1 from "../Components/CustomButton1";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/5172658.jpg')} resizeMode='cover' style={{flex:1, justifyContent: "center", alignItems: "center" }}> 
      <CustomButton1
        title="Login"
        onPress={() => navigation.navigate("Login")}
        buttonStyle={{ marginTop: 20, backgroundColor: "white" }}
        textStyle={{ fontWeight: "bold", color: "indigo" }}
      />
      <CustomButton1
        title="Signup"
        onPress={() => navigation.navigate("Signup")}
        buttonStyle={{ marginTop: 20, backgroundColor: "indigo" }}
        textStyle={{ fontWeight: "bold" }}
      />
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})