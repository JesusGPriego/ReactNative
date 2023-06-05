import { FlatList } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";


const MealList = ( { mealData } ) =>
{

    const navigation = useNavigation();

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
        <FlatList
            data={ mealData }
            keyExtractor={ ( item ) => item.id }
            renderItem={ renderMealItem }
        />
    );

};

export default MealList;