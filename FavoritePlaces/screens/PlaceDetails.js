import { useEffect, useState, } from "react";
import { ScrollView, Image, Text, View, StyleSheet } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../components/colors/colors";
import { fetchPlaceDetail } from "../utils/db";
const PlaceDetails = ( { navigation, route } ) =>
{



    const [ place, setPlace ] = useState();

    const selectedPlaceId = route.params.id;

    useEffect( () =>
    {
        const getPlaces = async () =>
        {
            const selectedPlace = await fetchPlaceDetail( selectedPlaceId );
            setPlace( selectedPlace );
        };

        getPlaces();
    }, [ selectedPlaceId ] );

    const showOnMapHandler = () =>
    {
        navigation.navigate( 'MapScreen', {
            initialLatitude: place.location.latitude,
            initialLongitude: place.location.longitude,
        } );
    };

    return (
        <ScrollView>
            {
                place && <>
                    <Image style={ styles.image } source={ { uri: place.imageUri } } /><View>
                        <View style={ styles.addressContainer }>
                            <Text style={ styles.address }>{ place.address }</Text>
                        </View>
                        <OutlinedButton icon='map' onPress={ showOnMapHandler }>View on Map</OutlinedButton>
                    </View>
                </>
            }

        </ScrollView>
    );
};

export default PlaceDetails;

const styles = StyleSheet.create( {
    image: {
        height: '35%',
        minHeight: 300,
        width: '100%'
    },
    locationContainer: {
        justifyContent: 'cennter',
        alignItems: 'center'
    },
    addressContainer: {
        padding: 20,
    },
    address: {
        color: Colors.primary500,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
} );