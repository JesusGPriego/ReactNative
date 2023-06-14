import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import colors from "../../utils/constants/colors";

function ErrorOverlay ( { message, onConfirm } )
{
    return (
        <View style={ styles.container }>
            <Text style={ [ styles.text, styles.title ] }>An error occurred!</Text>
            <Text style={ styles.text }>{ message }</Text>
            <Button onPress={ onConfirm }>Ok</Button>
        </View>
    );
}

export default ErrorOverlay;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: colors.background,
    },
    text: {
        color: colors.darkerText,
        textAlign: 'center',
        marginBottom: 8,
    },
    title: {
        color: colors.darkerText,
        fontSize: 20,
        fontWeight: 'bold',
    },
} );