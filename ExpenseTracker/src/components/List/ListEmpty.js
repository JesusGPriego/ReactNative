import { useState, } from "react";
import { View, Text, StyleSheet } from "react-native";

const ListEmpty = () =>
{

    const [ value, setValue ] = useState();

    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>
                List is empty
            </Text>
        </View>
    );
};

export default ListEmpty;

const styles = StyleSheet.create( {
    container: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        fontStyle: "italic"
    },
} );