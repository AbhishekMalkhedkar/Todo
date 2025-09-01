import { Image } from 'expo-image';
import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, ScrollView, FlatList } from 'react-native';


export default function HomeScreen() {

  const [enteredText , setEnteredText] = useState('');
  const [goals, SetGoals] = useState([]);
  function goalInputHandler(text){
    setEnteredText(text);
    
  }
  function addGoalHandler(){
    SetGoals(cuurntGoals=>[...cuurntGoals, {text: enteredText, id : Math.random().toString()}]);
  }

  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Place Your Goal' onChangeText={goalInputHandler} />
      <Button title='Add Goal' onPress={addGoalHandler} />
     </View>
     <View style={styles.goalsContainer}>
     <FlatList data={goals} renderItem={(itemData) => {
      return (
        
      )
     }} 
     keyExtractor={(item, index) => {
      return item.id;
     }}
     />
        

     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    flex : 1,
    backgroundColor : '#fff',
    paddingTop : 50,
    paddingHorizontal : 16

  },
  inputContainer : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    marginBottom : 24,
    borderBottomWidth : 1,
    borderBottomColor : '#cccccc'

  },
  text : {
    fontSize:35,
    color:'blue',
    margin: 10
  },
  textInput : {
    borderWidth : 1,
    borderColor : '#cccccc',
    width : '70%',
    marginRight : 8,
    padding : 8
  },
  goalsContainer : {
    flex : 7
  },
  goalItem : {
    margin : 8,
    padding: 8,
    borderRadius:6,
    backgroundColor : '#5e0acc',
    color : 'white'
  },
  goalText : {
    color : 'white'
  }
});
