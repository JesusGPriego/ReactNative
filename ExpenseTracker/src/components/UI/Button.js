import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../utils/constants/colors";

const Button = ( { children, onPress, mode, style } ) =>
{


    return (
        <View style={ style }>
            <Pressable onPress={ onPress } style={ ( { pressed } ) => pressed && styles.pressed }>
                <View style={ [ styles.button, mode === 'flat' && styles.flat ] }>
                    <Text style={ [ styles.buttonText, mode === 'flat' && styles.flatText ] }>
                        { children }
                    </Text>
                </View>
            </Pressable>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create( {
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: colors.darkerText
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    flat: {
        backgroundColor: 'transparent',
    },
    flatText: {
        color: colors.darkerText,
    },
    pressed: {
        opacity: 0.75,
        borderRadius: 4,
        backgroundColor: colors.listHeader
    },
} );