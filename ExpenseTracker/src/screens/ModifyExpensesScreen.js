import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { addExpenses, removeExpenses } from "../store/reducers/expenses.reducer";
import { useDispatch } from "react-redux";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import colors from "../utils/constants/colors";
import { getFormattedDate } from "../utils/date";

const ModifyExpensesScreen = ( { route, navigation } ) =>
{

    const expenseId = route.params?.expenseId;

    const isEditing = !!expenseId;

    const dispatch = useDispatch();

    const closeModal = () =>
    {
        navigation.goBack();
    };


    const deleteExpenseHandler = () =>
    {
        dispatch( removeExpenses( { id: expenseId } ) );
        closeModal();
    };

    const cancelHandler = () => closeModal();
    const confirmHandler = () =>
    {
        if ( !isEditing )
        {
            dispatch( addExpenses( {
                description: 'sample expense',
                amount: 35.31,
                date: getFormattedDate( new Date( '2023-6-15' ) )
            } ) );
        }
        closeModal();
    };


    useLayoutEffect( () =>
    {
        navigation.setOptions( {
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        } );
    }, [ navigation, isEditing ] );


    return (
        <View style={ styles.container }>
            <View style={ styles.buttonContainer }>
                <Button
                    mode='flat'
                    onPress={ cancelHandler }
                    style={ styles.buttonStyle }
                >
                    Cancel
                </Button>
                <Button
                    onPress={ confirmHandler }
                    style={ styles.buttonStyle }
                >
                    { isEditing ? 'Update' : 'Add' }
                </Button>
            </View>
            {
                isEditing && (
                    <View style={ styles.deleteContainer }>
                        <IconButton name='trash' color={ colors.error } size={ 26 } onPress={ deleteExpenseHandler } />
                    </View>
                )
            }
        </View>
    );
};

export default ModifyExpensesScreen;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        padding: 24,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: colors.darkerText,
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        minWdith: 120,
        marginHorizontal: 8,
    }
} );