import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../utils/constants/colors";
import { getFormattedDate } from "../../utils/date";
import { useNavigation } from "@react-navigation/native";
const ListItem = ( { id, description, date, amount } ) =>
{

    const navigation = useNavigation();

    const expensePressHandler = () =>
    {
        navigation.navigate( 'ModifyExpenses', {
            expenseId: id
        } );
    };

    return (
        <Pressable
            style={ ( { pressed } ) => pressed && styles.pressed }
            onPress={ expensePressHandler }
        >
            <View style={ styles.container }>
                <View>
                    <Text style={ [ styles.text, styles.description ] }>
                        { description }
                    </Text>
                    <Text style={ styles.text }>
                        { getFormattedDate( date ) }
                    </Text>
                </View>
                <View style={ styles.amount }>
                    <Text style={ [ styles.text, styles.amountText ] }>
                        ${ amount }
                    </Text>
                </View>
            </View>
        </Pressable>
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
        elevation: 4,
        shadowColor: colors.grey,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    text: {
        color: 'black',
        fontSize: 14,
    },
    description: {
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75,
    },
    amount: {
        backgroundColor: colors.listHeader,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: colors.darkerText,
        width: 120,
    },
    amountText: {
        color: colors.darkerText,
        fontWeight: 'bold',
        textAlign: 'center'
    },
} );