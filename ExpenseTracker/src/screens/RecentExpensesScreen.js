import { StyleSheet } from "react-native";
import Output from "../components/Output";
import { useSelector } from 'react-redux';
import { getDateMinusDays } from "../utils/date";
const RecentExpensesScreen = () =>
{

    const expenses = useSelector( ( state ) => state.expenses.expenses );

    const recentExpenses = expenses.filter( ( expense ) =>
    {
        const expenseDate = new Date( expense.date );
        const today = new Date();
        const date7DaysAgo = getDateMinusDays( today, 7 );
        return expenseDate > date7DaysAgo;
    } );

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