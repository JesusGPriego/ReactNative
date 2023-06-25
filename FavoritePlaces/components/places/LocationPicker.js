import { useEffect, useState, } from "react";
import { View, Alert, Text, Image, StyleSheet } from "react-native";
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';
import OutlinedButton from "../UI/OutlinedButton";
import { getMapPreview, getAddress } from "../../utils/map";
import { Colors } from "../colors/colors";

const LocationPicker = ( { onLocationPick } ) =>
{


    const [ location, setLocation ] = useState();
    const [ locationPermissionInfo, requestPermission ] = useForegroundPermissions();

    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const route = useRoute();



    useEffect( () =>
    {
        if ( isFocused && route.params )
        {
            const mapPickedLocation = route.params && {
                longitude: route.params.lon,
                latitude: route.params.lat
            };
            setLocation( mapPickedLocation );
        }
    }, [ route, isFocused ] );

    useEffect( () =>
    {
        const handleLocation = async () =>
        {
            if ( location )
            {
                const address = await getAddress( location.latitude, location.longitude );
                onLocationPick( { ...location, address } );
            }

        };

        handleLocation();

    }, [ location, onLocationPick ] );


    const verivyPermissions = async () =>
    {
        if ( locationPermissionInfo.status === PermissionStatus.UNDETERMINED )
        {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
        if ( locationPermissionInfo.status === PermissionStatus.DENIED )
        {
            Alert.alert( 'Permission denied', 'Please grant location access permission in order to continue' );
            return false;
        }
        return true;
    };

    const getLocationHandler = async () => 
    {
        const hasPermission = await verivyPermissions();
        if ( !hasPermission )
        {
            return;
        }
        const currentLocation = await getCurrentPositionAsync( { accuracy: 6 } );
        const longitude = currentLocation.coords.longitude;
        const latitude = currentLocation.coords.latitude;
        setLocation( { longitude, latitude } );

    };


    const pickOnMapHandler = () =>
    {
        navigation.navigate( 'MapScreen' );
    };

    return (
        <View>
            <View style={ styles.mapPreview }>
                {
                    location
                        ?
                        <Image
                            style={ styles.location }
                            // loadingIndicatorSource={ ActivityIndicator }
                            source={ { uri: getMapPreview( location.longitude, location.latitude ) } }
                        />
                        :
                        <Text style={ styles.text }>No place picked yet</Text>
                }
            </View>
            <View style={ styles.actions }>
                <OutlinedButton
                    icon='location'
                    onPress={ getLocationHandler }
                >
                    Locate User
                </OutlinedButton>
                <OutlinedButton
                    icon='map'
                    onPress={ pickOnMapHandler }
                >
                    Pick on Map
                </OutlinedButton>
            </View>
        </View>
    );
};

export default LocationPicker;

const styles = StyleSheet.create( {
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    location: {
        width: '100%',
        height: '100%',
    },
    text: {
        color: Colors.primary800,
        fontWeight: 'bold'
    },
} );