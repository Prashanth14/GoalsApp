import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoalText, setenteredGoalText] = useState('');

    function goalInputHandler(enteredText){
        setenteredGoalText(enteredText);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setenteredGoalText('');
    }

  return (
    <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.webp')}/>
            <TextInput
            style={styles.textInput}
            onChangeText={goalInputHandler}
            placeholder='please enter the goal'
            value={enteredGoalText}/>
            <View style={styles.buttonContainer}>
                <View style= {styles.button}>
                    <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0"/>
                </View>
                <View style= {styles.button}>
                    <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 24,
        backgroundColor: '#311b6b'
      },
      textInput:{
        borderWidth:1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        marginRight:8,
        padding:16,
        borderRadius: 6,
        color: '#120438',
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      },
      image:{
        height: 200,
        width: 200,
        margin: 20,
      }
})

