import { useCallback, useState, } from "react";
import { View, ScrollView, Text, TextInput, StyleSheet, } from "react-native";
import ImagePicker from "./ImagePIcker";
import { Colors } from "../colors/colors";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import { Place } from "../../models/place";

const PlaceForm = ( { savePlaceHandler } ) =>
{

    const [ enteredTitle, setEnteredTitle ] = useState();
    const [ pickedLocation, setPickedLocation ] = useState();
    const [ imageTaken, setImageTaken ] = useState();

    const savePlace = () =>
    {
        const placeData = new Place(
            enteredTitle,
            imageTaken,
            {
                address: pickedLocation.address,
                longitude: pickedLocation.longitude,
                latitude: pickedLocation.latitude,
            }
        );
        savePlaceHandler( placeData );
    };

    const onLocationPickHandler = useCallback( ( location ) =>
    {
        setPickedLocation( location );
    }, [] );
    const imageTakenHandler = ( imageUri ) => { setImageTaken( imageUri ); };

    const changeTitleHandler = ( enteredText ) =>
    {
        setEnteredTitle( enteredText );
    };

    return (
        <ScrollView style={ styles.container }>
            <View>
                <Text style={ styles.label }>
                    Place name
                </Text>
                <TextInput
                    onChangeText={ changeTitleHandler }
                    style={ styles.input }
                    value={ enteredTitle }
                />
            </View>
            <ImagePicker onImageTaken={ imageTakenHandler } />
            <LocationPicker onLocationPick={ onLocationPickHandler } />
            <Button onPress={ savePlace }>
                Add Place
            </Button>
        </ScrollView>
    );
};

export default PlaceForm;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        padding: 24,
    },
    label: {
        color: Colors.primary500,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100,
        borderRadius: 5,
    },
} );