// import axios from 'axios';
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from '../firebase'

const Signup = ({ navigation }) => {

  // const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validationMessage, setValidationMessage] = useState('')

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage('Passwords do not match')
    } else {
      setValidationMessage('')
    }
    setValue(value)
  }

  const handleSignUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
          navigation.navigate("Home", { user: userCredential.user})
        })
        .catch(error => {
          setValidationMessage(error.message)
        })
    }
  }

  return (
    <ImageBackground
      source={require('../assets/17450.jpg')}
      resizeMode='cover'
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View
        style={{
          backgroundColor: 'white',
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
          borderRadius: 8,
          padding: 20
        }}
      >
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 24,
              fontWeight: 'bold',
              color: 'black'
            }}
          >
            Sign Up for an account
          </Text>
        </View>
        <View style={{ marginTop: 16 }}>
         {/* <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.txtinput}
          /> */}
          <TextInput
            placeholder='Email address'
            value={email}
            onChangeText={setEmail}
            style={styles.txtinput}
          />
          <TextInput
            placeholder='Password'
            value={password}
            onChangeText={value =>validateAndSet(value, password, setPassword)}
            secureTextEntry={true}
            style={styles.txtinput}
          />
          <TextInput
            placeholder='Confirm Password'
            value={confirmPassword}
            onChangeText={value =>validateAndSet(value, confirmPassword, setConfirmPassword)}
            secureTextEntry={true}
            style={styles.txtinput}
          />
        </View>

        <TouchableOpacity
          onPress={handleSignUp}
          style={{
            backgroundColor: 'indigo',
            borderRadius: 4,
            paddingVertical: 12,
            marginTop: 16
          }}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold'
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 16,
            textAlign: 'center',
            fontSize: 16,
            color: 'gray'
          }}
        >
          Already have an account? Then{' '}
          <Text
            style={{ color: 'red' }}
            // onPress={() => navigation.navigate('Login')}
            onPress={()=>navigation.popToTop()}
          >
            Login to your Account
          </Text>
        </Text>
      </View>
      {/* </View> */}
    </ImageBackground>
  )
}
export default Signup

const styles = StyleSheet.create({
  txtinput: {
    borderColor: 'indigo',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginTop: 8
  }
})
