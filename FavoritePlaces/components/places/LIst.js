import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ItemList from "./Item";
import { Colors } from "../colors/colors";
const List = ( { items } ) =>
{

    const navigation = useNavigation();


    const renderItem = ( { item } ) =>
    {
        const selectItemHandler = () =>
        {
            navigation.navigate( 'PlaceDetail', {
                id: item.id
            } );
        };
        return <ItemList place={ item } onSelect={ selectItemHandler } />;
    };

    if ( !items || !items.length )
    {
        return <View style={ styles.fallbackContainer }>
            <Text style={ styles.fallbakText }>No places added yet.</Text>
        </View>;
    }

    return (
        <FlatList
            data={ items }
            keyExtractor={ ( item ) => item.id }
            renderItem={ renderItem }
        />
    );
};

export default List;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    },
    fallbakText: {
        fontSize: 16,
        color: Colors.primary200,
    }
} );