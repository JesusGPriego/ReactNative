import { FlatList, View, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = () =>
{

    const renderCategoryItem = ( { item: { title, color } } ) =>
    {
        return (
            <CategoryGridTile
                title={ title }
                color={ color }
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