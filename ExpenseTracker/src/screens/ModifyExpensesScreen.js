import { useLayoutEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { addExpenses, removeExpenses, updateExpense } from "../store/reducers/expenses.reducer";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../components/UI/IconButton";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import colors from "../utils/constants/colors";

const ModifyExpensesScreen = ( { route, navigation } ) =>
{
    const expenses = useSelector( ( state ) => state.expenses.expenses );
    const expenseId = route.params?.expenseId;
    const selectedExpense = expenses.find( ( expense ) => expense.id === expenseId );

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
    const confirmHandler = ( expenseData ) =>
    {
        if ( !isEditing )
        {
            dispatch( addExpenses( expenseData ) );
        } else
        {
            dispatch( updateExpense( {
                id: expenseId,
                data: expenseData,
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
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss } accessible={ false }>
            <View style={ styles.container }>
                <ExpenseForm
                    onCancel={ cancelHandler }
                    onSubmit={ confirmHandler }
                    submitButtonLabel={ isEditing ? 'Update' : 'Add' }
                    defaultValues={ selectedExpense }
                />
                {
                    isEditing && (
                        <View style={ styles.deleteContainer }>
                            <IconButton name='trash' color={ colors.error } size={ 26 } onPress={ deleteExpenseHandler } />
                        </View>
                    )
                }
            </View>
        </TouchableWithoutFeedback>
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
} );