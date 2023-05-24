import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = ( { idx, goal, onDeleteGoal } ) =>
{


    const deleteGoal = () => onDeleteGoal( idx );

    return (
        <Pressable
            onPress={ deleteGoal }
            style={ ( { pressed } ) => [
                {
                    opacity: pressed
                        ? 0.5
                        : 1
                },
            ] }>
            <View
                style={ styles.goalItem }
            >
                <Text
                    style={ styles.goalText }
                >
                    { goal }
                </Text>
            </View>
        </Pressable>
    );

};
const styles = StyleSheet.create( {
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
    },
} );

export default GoalItem;