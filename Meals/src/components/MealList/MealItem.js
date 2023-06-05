import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import MealDetail from '../MealDetails';

const MealItem = ( { title, imageUrl, duration, complexity, affordability, onPress } ) =>
{

    return (
        <View style={ styles.mealItem }>
            <Pressable
                style={ ( { pressed } ) =>
                    pressed ? styles.buttonPressed : null
                }
                onPress={ onPress }
            >
                <View style={ styles.innerContainer }>
                    <View>
                        <Image source={ { uri: imageUrl } }
                            style={ styles.image }
                        />
                        <Text style={ styles.title }>{ title }</Text>
                    </View>
                    <MealDetail
                        affordability={ affordability }
                        complexity={ complexity }
                        duration={ duration }
                    />
                </View>
            </Pressable>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create( {
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.select( { android: 'hidden', ios: 'visible' } ),
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    buttonPressed: {
        opacity: 0.75
    },
} );