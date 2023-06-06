import { useState, } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ListHeader from '../components/List/ListHeader';
import ListItem from "../components/List/ListItem";
import List from "../components/List/List";
import dummyExpenses from "../utils/dummy-expenses";
const AllExpensesScreen = ( { navigation } ) =>
{

    const [ value, setValue ] = useState();

    const goNextScreen = () =>
    {
        navigation.navigate( 'ModifyExpenses' );
    };

    return (
        <View style={ styles.container }>
            <ListHeader />
            <List
                data={ dummyExpenses }
            />
        </View>
    );
};

export default AllExpensesScreen;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    },
} );