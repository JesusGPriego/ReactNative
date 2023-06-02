import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from '../components/MealItem';

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


    const renderMealItem = ( { item } ) =>
    {
        const goToMealDetail = () =>
        {
            navigation.navigate( "MealDetails", options = {
                item: { ...item }
            } );
        };
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            onPress: goToMealDetail,
        };

        return (
            <MealItem
                { ...mealItemProps }
            />
        );
    };

    return (
        <View style={ styles.container }>
            <FlatList
                data={ displayedMeals }
                keyExtractor={ ( item ) => item.id }
                renderItem={ renderMealItem }
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