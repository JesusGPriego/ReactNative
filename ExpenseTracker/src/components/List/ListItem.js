import { View, Text, StyleSheet } from "react-native";

const ListItem = ( { description, date, value } ) =>
{


    return (
        <View style={ styles.container }>
            <View>
                <Text style={ styles.text }>
                    Text 1
                </Text>
                <Text style={ styles.text }>
                    Subtext 1
                </Text>
            </View>
            <View>
                <Text style={ styles.text }>
                    Text 2
                </Text>
            </View>
        </View>
    );
};

export default ListItem;

const styles = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#ffc400',
        borderRadius: 8,
        marginVertical: 8,
        marginHorizontal: 5,
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    },
} );