import { useState, } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "./ListItem";
import ListEmpty from "./ListEmpty";

const List = ( { data } ) =>
{

    const renderItem = ( { item } ) =>
    {
        return (
            <ListItem
                { ...item }
            />
        );
    };

    return (
        <FlatList
            data={ data }
            keyExtractor={ ( item ) =>
                item.id
            }
            renderItem={ renderItem }
            ListEmptyComponent={ ListEmpty }
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