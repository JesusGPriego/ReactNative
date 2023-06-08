import { createSlice } from '@reduxjs/toolkit';
import dummyExpenses from "../../utils/data/dummy-expenses";
import { getFormattedDate } from '../../utils/date';

const expenseReducer = createSlice( {
    name: 'expenses',
    initialState: {
        expenses: dummyExpenses,
    },
    reducers: {
        addExpenses: ( state, action ) =>
        {
            // console.log( 'adding new expense \n' );
            // console.log( state, '\n' );
            // console.log( action, '\n' );
            // console.log( '----------------------', '\n' );
            const { description, amount, date } = action.payload;
            const newExpense = {
                id: new Date().toString() + Math.random().toString(),
                description,
                amount,
                date: getFormattedDate( date )
            };
            state.expenses.push( newExpense );
        },
        updateExpense: ( state, action ) =>
        {
            state.expenses = state.expenses.reduce( ( sum, current ) =>
                current.id !== action.payload.id
                    ? [ ...sum, current ]
                    : [ ...sum, { ...current, ...action.payload.data } ]
                , [] );
        },
        removeExpenses: ( state, action ) =>
        {
            const newExpenses = state.expenses.reduce( ( sum, current ) =>
            {
                if ( current.id !== action.payload.id )
                {
                    return current.id !== action.payload.id && [ ...sum, {
                        ...current,
                        date: getFormattedDate( current.date )
                    } ];
                }
                return [ ...sum ];
            }, [] );

            state.expenses = newExpenses;
        }
    }
} );

export const addExpenses = expenseReducer.actions.addExpenses;
export const removeExpenses = expenseReducer.actions.removeExpenses;
export default expenseReducer.reducer;