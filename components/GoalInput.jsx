import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
  const [enteredText, setEnteredText] = useState("");

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredText("");
  }

  function goalInputHandler(text) {
    setEnteredText(text);
  }

  return (
      <Modal visible={props.visible} animationType="slide">

        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Place Your Goal"
                onChangeText={goalInputHandler}
                value={enteredText}
                />
            <View style={styles.buttonContainer}>
              <View style={styles.button} >
                <Button title="Add Goal" onPress={addGoalHandler} />
              </View>
              <View style={styles.button} >
              <Button title="Cancel" onPress={props.onCancel} />

              </View>
            </View>
        </View>
      </Modal>
   
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  inputContainer: {
    padding : 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  buttonContainer : {
    marginTop : 16,
    flexDirection : 'row',
  },
  button : {
    width : 100,
    marginHorizontal : 8
  }
});
export default GoalInput;
