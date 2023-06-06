import { useState, } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "./ListItem";

const List = ( { data } ) =>
{

    const renderItem = ( { item } ) =>
    {
        return (
            <ListItem />
        );
    };



    const [ value, setValue ] = useState();

    return (
        <FlatList
            data={ data }
            keyExtractor={ ( item ) =>
                item.id
            }
            renderItem={ renderItem }
        />
    );
};

export default List;

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