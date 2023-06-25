import { View, Text, StyleSheet } from "react-native";
import PlaceForm from "../components/places/PlaceForm";
import { insertPlace } from "../utils/db";
const AddPlace = ( { navigation } ) =>
{

    const createPlaceHandler = async ( place ) =>
    {
        await insertPlace( place );
        navigation.navigate( 'AllPlaces' );
    };


    return (
        <View style={ styles.container }>
            <PlaceForm savePlaceHandler={ createPlaceHandler } />
        </View>
    );
};

export default AddPlace;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    },
} );