import { useLayoutEffect, useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { addExpenses, removeExpenses, updateExpense } from "../store/reducers/expenses.reducer";
import { useDispatch, useSelector } from "react-redux";
import { storeExpense, updateExpense as updateInBack, deleteExpense } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import IconButton from "../components/UI/IconButton";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import colors from "../utils/constants/colors";

const ModifyExpensesScreen = ( { route, navigation } ) =>
{
    const [ isFetching, setIsFetching ] = useState( false );
    const [ errorMessage, setErrorMessage ] = useState();
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
        try
        {
            deleteExpense( expenseId );
            dispatch( removeExpenses( { id: expenseId } ) );
            closeModal();

        } catch ( error )
        {
            setErrorMessage( 'Could not delete expense.' );
        }
    };

    const cancelHandler = () => closeModal();
    const confirmHandler = async ( expenseData ) =>
    {
        setIsFetching( true );
        if ( !isEditing )
        {
            try
            {
                const id = await storeExpense( expenseData );
                dispatch( addExpenses( { ...expenseData, id } ) );
                setTimeout( () =>
                {
                    closeModal();
                }, 700 );
            } catch ( error )
            {
                setErrorMessage( 'Could not add new expense.' );
            }
        } else
        {
            try
            {
                updateInBack( expenseId, expenseData );
                dispatch( updateExpense( {
                    id: expenseId,
                    data: expenseData,
                } ) );
                setTimeout( () =>
                {
                    closeModal();

                }, 700 );
            } catch ( error )
            {
                setErrorMessage( 'Could not update expense' );
            }
        }
    };


    useLayoutEffect( () =>
    {
        navigation.setOptions( {
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        } );
    }, [ navigation, isEditing ] );


    if ( errorMessage && !isFetching )
    {
        return <ErrorOverlay message={ errorMessage } onConfirm={ closeModal } />;
    }

    if ( isFetching )
    {
        return <LoadingOverlay />;
    }

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