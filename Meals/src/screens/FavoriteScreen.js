import { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FavoriteContext } from '../store/context/favorites-context';
import MealList from '../components/MealList/MealsList';
import ListEmpty from '../components/MealList/ListEmpty';
import { MEALS } from '../data/dummy-data';


const FavoriteScreen = () =>
{

    const { ids } = useContext( FavoriteContext );

    const displayedMeals = MEALS.filter( meal => ids.includes( meal.id ) );

    return (
        <View style={ styles.container }>
            {
                displayedMeals.length
                    ? <MealList
                        mealData={ displayedMeals }
                    />
                    : <ListEmpty />
            }
        </View>
    );
};

export default FavoriteScreen;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        padding: 16,
    },
} );