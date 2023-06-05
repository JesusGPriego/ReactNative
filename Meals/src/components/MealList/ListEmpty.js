import { View, Text, StyleSheet } from 'react-native';

const ListEmpty = () =>
{

    return (
        <View style={ styles.textContainer }>
            <Text style={ styles.text }>There's no favorite meals yet.</Text>
        </View>
    );

};


export default ListEmpty;

const styles = StyleSheet.create( {
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
} );