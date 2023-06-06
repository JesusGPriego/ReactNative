import { createSlice } from '@reduxjs/toolkit';


const expenseReducer = createSlice( {
    name: 'expenses',
    initialState: {
        expenses: [],
    },
    reducers: {
        addExpenses: ( state, action ) =>
        {
            state.ids.push( action.payload.id );
        },
        removeExpenses: ( state, action ) =>
        {
            state.ids.splice( state.ids.indexOf( action.payload.id ), 1 );
        }
    }
} );

export const addExpenses = expenseReducer.actions.addExpenses;
export const removeExpenses = expenseReducer.actions.removeExpenses;
export default expenseReducer.reducer;