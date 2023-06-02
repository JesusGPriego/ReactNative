import { FlatList, View, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ( { navigation } ) =>
{


    const renderCategoryItem = ( { item: { title, color, id } } ) =>
    {
        const pressHandler = () =>
        {
            navigation.navigate( "MealsOverview", {
                categoryId: id,
            } );
        };
        return (
            <CategoryGridTile
                title={ title }
                color={ color }
                onPress={ pressHandler }
            />
        );
    };

    return (
        <FlatList
            data={ CATEGORIES }
            keyExtractor={ ( item ) => item.id }
            renderItem={ renderCategoryItem }
            numColumns={ 2 }
        />
    );
};

export default CategoriesScreen;