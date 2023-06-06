import { useState, } from "react";
import { View, Text, StyleSheet } from "react-native";

const ListHeader = () =>
{

    const [ value, setValue ] = useState();

    return (
        <View style={ styles.container }>
            <View>
                <Text style={ styles.text }>
                    Last 7 days
                </Text>
            </View>
            <View>
                <Text>
                    $48.57
                </Text>
            </View>
        </View>
    );
};

export default ListHeader;

const styles = StyleSheet.create( {
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#fff3cc',
        borderRadius: 8,
        marginVertical: 15,
        marginHorizontal: 5,
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    },
} );