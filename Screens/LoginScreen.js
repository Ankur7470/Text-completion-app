import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import CustomButton2 from "../Components/CustomButton2";

auth.languageCode = 'it';

const LoginScreen = ({ navigation }) => {
  if (auth.currentUser) {
    navigation.navigate("Home");
  } else {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
  }
  const provider = new GoogleAuthProvider();
  // const auth1 = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          navigation.navigate("Home", { user: userCredential.user });
          setErrorMessage("");
          setEmail("");
          setPassword("");
          // ...
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage("Please enter an email and password");
    }
  };

  // const handleGoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // };

  return (
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
            Sign in to your account
          </Text>
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
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={{
              borderColor: "indigo",
              borderWidth: 1,
              borderRadius: 4,
              padding: 8,
              marginTop: 8,
            }}
          />
        </View>
        {/* {errorMessage? renderErrorMess(): <Text></Text>}/ */}
        <TouchableOpacity
          onPress={handleLogin}
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
            Sign in
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
            // onPress={()=>navigation.pop()}
          >
            Register yourself
          </Text>
        </Text>
        <Text
          style={{
            marginTop: 16,
            textAlign: "center",
            fontSize: 16,
            color: "gray",
          }}
        >
          Forgot Your Password?{" "}
          <Text
            style={{ color: "red" }}
            onPress={() => navigation.navigate("ResetPassword")}
          >
            Reset Your Password
          </Text>
        </Text>
        {/* <CustomButton2
          title="SignIn with Google"
          onPress={handleGoogle}
          buttonStyle={{ marginTop: 20, backgroundColor: "black" }}
          textStyle={{ fontWeight: "bold", color: "white" }}
        /> */}
        {/* <Text>{errorMessage ? <Text>Invalid Password</Text>:<Text></Text>}</Text> */}
      </View>
      {/* </View> */}
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
