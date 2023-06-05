import { View, StyleSheet } from 'react-native';
import MealList from '../components/MealList/MealsList';
import ListEmpty from '../components/MealList/ListEmpty';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';

const FavoriteScreen = () =>
{
    const favoriteMealIds = useSelector( ( state ) => state.favoriteMeals.ids );

    const displayedMeals = MEALS.filter( meal => favoriteMealIds.includes( meal.id ) );

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