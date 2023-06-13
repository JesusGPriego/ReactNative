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
            const newExpense = {
                ...action.payload,
                id: new Date().toString() + Math.random().toString(),
            };
            state.expenses.unshift( newExpense );
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
            console.log( 'triggering removeExpense' );

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
export const updateExpense = expenseReducer.actions.updateExpense;
export default expenseReducer.reducer;