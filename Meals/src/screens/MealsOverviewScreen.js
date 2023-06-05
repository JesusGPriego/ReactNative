import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from '../components/MealList/MealsList';

const MealsOverviewScreen = ( { route, navigation } ) =>
{
    useLayoutEffect( () =>
    {

        const catId = route.params.categoryId;
        const categoryTitle = CATEGORIES.find( ( category ) => category.id === catId ).title;

        navigation.setOptions( {
            title: categoryTitle,
        } );
    }, [] );

    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter( ( mealItem ) => mealItem.categoryIds.indexOf( categoryId ) >= 0 );



    return (
        <View style={ styles.container }>
            <MealList
                mealData={ displayedMeals }
            />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        padding: 16,
    },
} );