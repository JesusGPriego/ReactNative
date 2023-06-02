import { View, Text, StyleSheet } from 'react-native';

const MealDetail = ( { duration, complexity, affordability, style, textStyle } ) =>
{

    return (
        <View style={ [ style, styles.details ] }>
            <Text style={ [ textStyle, styles.detailItem ] }>{ duration }m</Text>
            <Text style={ [ textStyle, styles.detailItem ] }>{ complexity.toUpperCase() }</Text>
            <Text style={ [ textStyle, styles.detailItem ] }>{ affordability.toUpperCase() }</Text>
        </View>
    );
};

export default MealDetail;

const styles = StyleSheet.create( {
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center',
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
} );