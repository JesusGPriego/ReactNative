import { View, Text, StyleSheet } from "react-native";
import List from "../components/places/LIst";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../utils/db";

const AllPlaces = ( { route } ) =>
{

    const [ loadedPlaces, setLoadedPlaces ] = useState( [] );

    const isFocused = useIsFocused();
    useEffect( () =>
    {
        const loadPlaces = async () =>
        {
            const places = await fetchPlaces();
            setLoadedPlaces( places );
        };

        if ( isFocused )
        {
            loadPlaces();
        }
    }, [ isFocused ] );

    return (
        <List items={ loadedPlaces } />
    );
};

export default AllPlaces;

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