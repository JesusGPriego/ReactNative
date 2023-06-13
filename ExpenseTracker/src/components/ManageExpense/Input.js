import { useState, } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import colors from "../../utils/constants/colors";

const Input = ( { label, style, textInputConfig, invalid } ) =>
{

    const multiline = textInputConfig?.multiline;

    return (
        <View style={ [ styles.container, style ] }>
            <Text style={ [ styles.label, invalid && styles.invalidLabel ] }>
                { label }
            </Text>
            <TextInput
                style={ [ styles.input, multiline && styles.inputMultiline, invalid && styles.invalidInput ] }
                {
                ...textInputConfig
                }
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create( {
    container: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        marginBottom: 4,
        color: colors.darkerText,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: colors.listHeader,
        padding: 6,
        borderRadius: 6,
        fontSize: 16,
        color: colors.darkerText,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    invalidLabel: {
        color: colors.error,
    },
    invalidInput: {
        backgroundColor: colors.erroLight
    },
} );