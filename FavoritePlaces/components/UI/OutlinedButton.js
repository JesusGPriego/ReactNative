import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../colors/colors";

const OutlinedButton = ( { onPress, icon, children } ) =>
{


    return (
        <Pressable style={ ( { pressed } ) => [ styles.button, pressed & styles.pressed ] } onPress={ onPress }>
            <Ionicons
                style={ styles.icon }
                name={ icon }
                size={ 18 }
                color={ Colors.primary500 }
            />
            <Text style={ styles.text }>
                { children }
            </Text>
        </Pressable>
    );
};

export default OutlinedButton;

const styles = StyleSheet.create( {
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.primary500,
    },
    text: {
        color: Colors.primary500,
    },
    icon: {
        marginRight: 6,
    }
    ,
    pressed: {
        opacity: 0.75,
    }
} );