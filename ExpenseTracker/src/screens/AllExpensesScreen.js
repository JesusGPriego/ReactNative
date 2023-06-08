import Output from "../components/Output";
import { useSelector } from 'react-redux';
const AllExpensesScreen = () =>
{

    const expenses = useSelector( ( state ) => state.expenses.expenses );


    const period = 'Total';

    return (
        <Output
            expenses={ expenses }
            period={ period }
        />
    );
};

export default AllExpensesScreen;
