import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Colors } from "../colors/colors";

const ItemList = ( { place, onSelect } ) =>
{


    return (
        <Pressable onPress={ onSelect } style={ ( { pressed } ) => [ styles.item, pressed && styles.pressed ] }>
            <Image source={ { uri: place.imageUri } } style={ styles.image } />
            <View style={ styles.info }>
                <Text style={ styles.title }>
                    { place.title }
                </Text>
                <Text style={ styles.address }>
                    { place.address }
                </Text>
            </View>
        </Pressable>
    );
};

export default ItemList;

const styles = StyleSheet.create( {
    item: {
        borderRadius: 6,
        marginVertical: 20,
        marginHorizontal: 25,
        backgroundColor: Colors.primary500,
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        overflow: 'hidden'
    },
    pressed: {
        opacity: 0.9,
    },
    image: {
        height: 250,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4,
    },
    info: {
        padding: 12,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.gray700,
    },
    address: {
        fontSize: 12,
        color: Colors.gray700,
    },
} );