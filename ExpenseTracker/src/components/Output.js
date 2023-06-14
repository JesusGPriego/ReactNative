import { View, Text, StyleSheet } from "react-native";
import ListHeader from "./List/ListHeader";
import List from "./List/List";
import colors from "../utils/constants/colors";
const Output = ( { expenses, period } ) =>
{

    const total = expenses.reduce( ( prev, current ) => prev + current.amount, 0 ).toFixed( 2 );
    return (
        <View style={ styles.container }>
            <ListHeader
                total={ total }
                period={ period }
            />
            <List
                data={ expenses }
            />
        </View>
    );


};

export default Output;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    },
} );