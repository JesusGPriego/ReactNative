import { createSlice } from '@reduxjs/toolkit';
import { getFormattedDate } from '../../utils/date';

const expenseReducer = createSlice( {
    name: 'expenses',
    initialState: {
        expenses: [],
    },
    reducers: {
        addExpenses: ( state, action ) =>
        {
            const newExpense = {
                ...action.payload,
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
        },
        setExpenses: ( state, action ) =>
        {
            state.expenses = action.payload.reverse();
        }
    }
} );

export const addExpenses = expenseReducer.actions.addExpenses;
export const removeExpenses = expenseReducer.actions.removeExpenses;
export const updateExpense = expenseReducer.actions.updateExpense;
export const setExpenses = expenseReducer.actions.setExpenses;
export default expenseReducer.reducer;