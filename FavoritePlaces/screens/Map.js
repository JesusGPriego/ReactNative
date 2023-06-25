import { useLayoutEffect, useState, useCallback } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Alert } from "react-native";
import IconButton from "../components/UI/IconButton";

const MapScreen = ( { navigation, route } ) =>
{

    const initialLocation = route.params
        ? {
            lat: route.params.initialLatitude,
            lon: route.params.initialLongitude,
        }
        : null;

    const [ selectedLocation, setSelectedLocation ] = useState( initialLocation );


    const selectLocationHandler = ( event ) =>
    {

        if ( initialLocation )
        {
            return;
        }
        const lat = event.nativeEvent.coordinate.latitude;
        const lon = event.nativeEvent.coordinate.longitude;

        setSelectedLocation( {
            lat,
            lon,
        } );
    };

    ;


    const savePickedLocationHandler = useCallback( () =>
    {
        if ( !selectedLocation )
        {
            Alert.alert( 'No location picked', 'Please tap somewhere in the map first.' );
            return;
        }
        navigation.navigate( 'AddPlace', selectedLocation );

    }, [ navigation, selectedLocation ] );

    useLayoutEffect( () =>
    {
        if ( initialLocation )
        {
            return;
        }
        navigation.setOptions( {
            headerRight: ( { tintColor } ) => (
                <IconButton
                    name="save"
                    size={ 24 }
                    color={ tintColor }
                    onPress={ savePickedLocationHandler }
                />
            ),
        } );
    }, [ navigation, savePickedLocationHandler, initialLocation ] );

    const region = {
        latitude: initialLocation ? initialLocation.lat : 37.78,
        longitude: initialLocation ? initialLocation.lon : -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.421,
    };

    return (
        <MapView
            style={ styles.map }
            initialRegion={ region }
            onPress={ selectLocationHandler }
        >
            {
                selectedLocation &&
                <Marker
                    coordinate={ {
                        title: 'Picked Location',
                        latitude: selectedLocation.lat,
                        longitude: selectedLocation.lon,
                    } }
                />
            }
        </MapView>
    );
};
export default MapScreen;

const styles = StyleSheet.create( {
    map: {
        flex: 1,
    },
} );