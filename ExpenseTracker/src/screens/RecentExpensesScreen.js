import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Output from "../components/Output";
import { useSelector } from 'react-redux';
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import { setExpenses } from "../store/reducers/expenses.reducer";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";
const RecentExpensesScreen = () =>
{

    const [ isFetching, setIsFetching ] = useState( true );
    const [ errorMessage, setErrorMessage ] = useState();

    const expenses = useSelector( ( state ) => state.expenses.expenses );
    const dispatch = useDispatch();

    useEffect( () =>
    {
        async function getExpenses ()
        {
            try
            {
                const expenses = await fetchExpenses();
                dispatch( setExpenses( expenses ) );
            } catch ( error )
            {
                setErrorMessage( 'Could not fetch expenses' );
                console.log( 'error fetching expenses ->', error );
            }
        }
        setTimeout( () =>
        {
            setIsFetching( false );
        }, 500 );
        getExpenses();
    }, [] );

    const recentExpenses = expenses.filter( ( expense ) =>
    {
        const expenseDate = new Date( expense.date );
        const today = new Date();
        const date7DaysAgo = getDateMinusDays( today, 7 );
        return expenseDate > date7DaysAgo;
    } );

    const errorHandler = () =>
    {
        setErrorMessage( null );
    };

    if ( errorMessage && !isFetching )
    {
        return <ErrorOverlay message={ errorMessage } onConfirm={ errorHandler } />;
    }

    if ( isFetching )
    {
        return <LoadingOverlay />;
    }

    return (
        <Output
            expenses={ recentExpenses }
            period='last 7 days'
        />
    );
};

export default RecentExpensesScreen;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    },
} );