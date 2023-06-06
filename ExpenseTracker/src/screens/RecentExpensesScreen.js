import { useState, } from "react";
import { View, Text, StyleSheet } from "react-native";

const RecentExpensesScreen = () =>
{

    const [ value, setValue ] = useState();

    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>
                RecentExpensesScreen
            </Text>
        </View>
    );
};

export default RecentExpensesScreen;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    },
} );