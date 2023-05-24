import { View, Button, TextInput, StyleSheet, Modal, Image } from "react-native";

const GoalInput = ( { goalText, handleTextChange, onAddGoal, onAddCancel, visible, } ) =>
{
    return (
        <Modal visible={ visible } animationType="slide">
            <View
                style={ styles.inputContainers }
            >
                <Image
                    source={
                        require( '../../../assets/images/goal.png' )
                    }
                    style={ styles.image }
                />
                <TextInput
                    onChangeText={ handleTextChange }
                    style={ styles.textInput }
                    placeholder='Your course goal!'
                    value={ goalText }
                />
                <View
                    style={ styles.buttonContainer }
                >
                    <View
                        style={ styles.button }
                    >
                        <Button
                            title='Add Goal'
                            color={ '#5e0acc' }
                            onPress={ onAddGoal }
                        />
                    </View>
                    <View
                        style={ styles.button }
                    >
                        <Button
                            title='Cancel'
                            color={ '#f31282' }
                            onPress={ onAddCancel }
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );

};
export default GoalInput;

const styles = StyleSheet.create( {
    inputContainers: {
        flex: 1,
        // padding: 16,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '90%',
        padding: 16,
        borderRadius: 6,
        color: '#120438',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
} );