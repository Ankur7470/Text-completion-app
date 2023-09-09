import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import CustomButton2 from "../Components/CustomButton2";

const HomeScreen = ({ navigation }) => {

    const display = auth.currentUser.email;
    const logout=()=>{
        signOut(auth).then(()=>{
            navigation.navigate("Welcome");
        })
    }
    ////
    const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [feedback, setFeedback] = useState(null);

  const getSuggestions = async (text) => {
    // Make API call to get suggestions based on input text
    // For example, you could use the following API: https://api.datamuse.com/sug?s=
    const response = await fetch(`https://api.datamuse.com/sug?s=${text}`);
    const data = await response.json();
    const suggestions = data.map((item) => item.word);
    setSuggestions(suggestions);
  };

  const handleInputChange = (text) => {
    setInputText(text);
    getSuggestions(text);
  };

  const handleSuggestionPress = (text) => {
    setInputText(text);
    setSuggestions([]);
    setFeedback(null);
  };

  const handleFeedbackPress = (isHelpful) => {
    // Send feedback to the server
    // For example, you could use the following API:
    // fetch('https://example.com/feedback', {
    //   method: 'POST',
    //   body: JSON.stringify({ input: inputText, suggestion: completedText, isHelpful }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    setFeedback(isHelpful);
  };

  return (
    // <View style={{flex: 1}}>
    //     <View style={{ flex: 1 }}> 
    //         <Text style={{fontStyle:"italic", fontWeight: "bold", fontSize: 20}}>Welcome <Text style={{color: 'purple'}}>😎😎  {display} 😊😊</Text> </Text>
    //         {/* <TextInput
    //         placeholder="Enter Text"
    //         // value={password}
    //         // onChangeText={setPassword}
    //         // secureTextEntry={true}
    //         style={{
    //           borderColor: "indigo",
    //           borderWidth: 1,
    //           borderRadius: 4,
    //           padding: 8,
    //           marginTop: 18,
    //           marginHorizontal: 20
    //         }}
    //       /> */}
    //     </View>
    //     <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
    //         <CustomButton2
    //             title="Logout"
    //             onPress={logout}
    //             buttonStyle={{ marginTop: 20, backgroundColor: "indigo" }}
    //             textStyle={{ fontWeight: "bold", color: "white" }}
    //         />
    //     </View>
    // </View>
    <View style={styles.container}>
      <Text style={styles.heading}>Chat Completion App</Text>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={handleInputChange}
        placeholder="Type something..."
      />
      <View style={styles.suggestionsContainer}>
        {suggestions.map((item) => (
          <TouchableOpacity key={item} onPress={() => handleSuggestionPress(item)}>
            <Text style={styles.suggestion}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {feedback !== null && (
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackText}>Was this suggestion helpful?</Text>
          <TouchableOpacity
            style={[styles.feedbackButton, feedback ? styles.helpfulButton : null]}
            onPress={() => handleFeedbackPress(true)}
          >
            <Text style={styles.feedbackButtonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.feedbackButton, !feedback ? styles.notHelpfulButton : null]}
            onPress={() => handleFeedbackPress(false)}
          >
            <Text style={styles.feedbackButtonText}>No</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
             <CustomButton2
                title="Logout"
                onPress={logout}
                buttonStyle={{ marginTop: 20, backgroundColor: "indigo" }}
                textStyle={{ fontWeight: "bold", color: "white" }}
            />
        </View>
    </View>
  )
}

export default HomeScreen

// const styles = StyleSheet.create({})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  suggestionsContainer: {
    width: '100%',
    maxHeight: 150,
    overflow: 'scroll',
  },
  suggestion: {
padding: 10,
fontSize: 16,
},
feedbackContainer: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 20,
},
feedbackText: {
marginRight: 10,
fontSize: 16,
},
feedbackButton: {
paddingVertical: 5,
paddingHorizontal: 10,
borderRadius: 5,
},
helpfulButton: {
backgroundColor: 'green',
},
notHelpfulButton: {
backgroundColor: 'red',
},
feedbackButtonText: {
color: 'white',
fontSize: 16,
},
});