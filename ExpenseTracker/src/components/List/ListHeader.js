import { View, Text, StyleSheet } from "react-native";
import colors from "../../utils/constants/colors";
const ListHeader = ( { period, total } ) =>
{

    return (
        <View style={ styles.container }>
            <View>
                <Text style={ styles.period }>
                    { period }
                </Text>
            </View>
            <View>
                <Text style={ styles.sum }>
                    ${ total }
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
        backgroundColor: colors.listHeader,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.darkerText,
        marginVertical: 15,
        marginHorizontal: 5,
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    },
    period: {
        fontSize: 16,
        color: colors.darkerText
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.darkerText
    }
} );