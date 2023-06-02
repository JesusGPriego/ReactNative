import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

const CategoryGridTile = ( { title, color, onPress } ) =>
{
    return (
        <View style={ styles.gridItem }>
            <Pressable
                style={ ( { pressed } ) =>
                    [ styles.button,
                    pressed ?
                        styles.buttonPressed : null
                    ]
                }
                onPress={ onPress }
            >
                <View style={ [ styles.innerContainer, { backgroundColor: color } ] }>
                    <Text style={ styles.title }>
                        { title }
                    </Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create( {
    gridItem: {
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 4,
        flex: 1,
        height: 150,
        margin: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.select( { android: 'hidden' } ),
    },
    innerContainer: {
        alignItems: 'center',
        borderRadius: 8,
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.75
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
} );