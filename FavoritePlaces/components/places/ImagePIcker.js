import { useState, } from "react";
import { Alert, View, Text, Button, Image, StyleSheet } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";
import { Colors } from "../colors/colors";
import OutlinedButton from "../UI/OutlinedButton";

const ImagePicker = ( { onImageTaken } ) =>
{
    const [ cameraPermissionInfo, requestPermission ] = useCameraPermissions();

    const [ pickedImage, setPickedImage ] = useState();

    const verifyPermissions = async () =>
    {
        if ( cameraPermissionInfo.status === PermissionStatus.UNDETERMINED )
        {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
        if ( cameraPermissionInfo.status === PermissionStatus.DENIED )
        {
            Alert.alert( 'Permission denied', 'Please grant camera access permission in order to continue' );
            return false;
        }
        return true;

    };

    const takeImageHandler = async () =>
    {
        const hasPermission = await verifyPermissions();
        if ( !hasPermission )
        {
            return;
        }
        const imageData = await launchCameraAsync( {
            aspect: [ 16, 9 ],
            quality: 0.5,
        } );
        setPickedImage( imageData.assets );
        onImageTaken( imageData.assets[ 0 ].uri );
    };

    return (
        <View style={ styles.container }>
            <View>
                <View style={ styles.imagePreview }>
                    {
                        pickedImage
                            ? <Image
                                style={ styles.image }
                                source={ {
                                    uri: pickedImage[ 0 ].uri
                                } }
                            />
                            : <Text style={ styles.text }>No image taken yet</Text>

                    }
                </View>
                <OutlinedButton
                    onPress={ takeImageHandler }
                    icon='camera'
                >
                    Take Image
                </OutlinedButton>
            </View>
        </View>
    );
};

export default ImagePicker;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
    },
    text: {
        color: Colors.primary800,
        fontWeight: 'bold'
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    },
    image: {
        width: '100%',
        height: '100%',
    },
} );