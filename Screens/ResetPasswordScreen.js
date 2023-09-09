// import axios from 'axios';
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
// import { fb } from "../firebase";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {sendPasswordResetEmail} from "firebase/auth";

const ResetPasswordScreen = ({ navigation })=>{
// function ResetPasswordScreen({ navigation }) {
  // const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    sendPasswordResetEmail(auth, email)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.popToTop();
        // ...
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    // <ImageBackground source={require('../Images/daniel-olah-1nUNsmWfcSk-unsplash.jpg')} resizeMode='cover' style={{flex:1, justifyContent: "center", alignItems: "center" }}>
    <ImageBackground
      source={require("../assets/4884451.jpg")}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}> */}
      <View
        style={{
          backgroundColor: "white",
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
          borderRadius: 8,
          padding: 50,
        }}
      >
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Reset Your Password
          </Text>
          {/* <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
            }}
          >
            {errorMessage}
          </Text> */}
        </View>
        <View style={{ marginTop: 16 }}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={{
              borderColor: "indigo",
              borderWidth: 1,
              borderRadius: 4,
              padding: 8,
            }}
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          // onPress={()=>navigation.navigate('Home')}
          style={{
            backgroundColor: "indigo",
            borderRadius: 4,
            paddingVertical: 12,
            marginTop: 16,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Reset Password
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 16,
            textAlign: "center",
            fontSize: 16,
            color: "gray",
          }}
        >
          New User?{" "}
          <Text
            style={{ color: "red" }}
            onPress={() => navigation.navigate("Signup")}
          >
            Register yourself
          </Text>
        </Text>
      </View>
      {/* </View> */}
    </ImageBackground>
  );
}

export default ResetPasswordScreen;

// const styles = StyleSheet.create({})
