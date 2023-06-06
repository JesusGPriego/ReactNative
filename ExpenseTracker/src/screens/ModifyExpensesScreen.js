import { useState, } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ModifyExpensesScreen = ( { navigation } ) =>
{

    const [ value, setValue ] = useState();

    const goNextScreen = () =>
    {
        navigation.navigate( 'RecentExpenses' );
    };

    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>
                ModifyExpensesScreen
            </Text>
            <Button
                title="next"
                onPress={ goNextScreen }
            />
        </View>
    );
};

export default ModifyExpensesScreen;

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