import { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import MealDetail from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import HeaderButton from '../components/HeaderButton';

const MealDetailsScreen = ( { navigation, route } ) =>
{
    const { item } = route.params;
    const headerButtonPressHandler = () =>
    {
        console.log( 'pressed' );
    };
    useLayoutEffect( () =>
    {
        navigation.setOptions( {
            headerRight: () =>
            {
                return (
                    <HeaderButton onPress={ headerButtonPressHandler } />
                );
            }
        } );
    }, [] );
    return (
        <ScrollView style={ { marginBottom: 32, } }>
            <Image style={ styles.image } source={ { uri: item.imageUrl } } />
            <Text style={ styles.title }>{ item.title }</Text>
            <MealDetail
                affordability={ item.affordability }
                complexity={ item.complexity }
                duration={ item.duration }
                textStyle={ styles.detailText }
            />
            <View style={ styles.listOuterContainer }>
                <View style={ styles.listContainer }>
                    <Subtitle text={ 'Ingredients' } />
                    <List data={ item.steps } />
                    <Subtitle text={ 'Steps' } />
                    <List data={ item.ingredients } />
                </View>
            </View>
        </ScrollView>
    );


};

export default MealDetailsScreen;

const styles = StyleSheet.create( {
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
} );