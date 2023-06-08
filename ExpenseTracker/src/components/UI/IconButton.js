import { useState, } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const IconButton = ( { name, color, size, onPress, text } ) =>
{


    return (
        <Pressable
            onPress={ onPress }
            style={ ( { pressed } ) => pressed && styles.pressed }
        >
            <View style={ styles.container }>
                {
                    text &&
                    <Text style={ { color: color, fontSize: 14, fontWeight: 'bold' } }>{ text }</Text>
                }
                <Ionicons
                    name={ name }
                    color={ color }
                    size={ size }
                />
            </View>
        </Pressable>
    );
};

export default IconButton;

const styles = StyleSheet.create( {
    container: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressed: {
        opcacity: 0.75,
    },
} );