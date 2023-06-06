import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './reducers/expenses.reducer';
const store = configureStore( {
    reducer: {
        expenses: expensesReducer,
    }
} );

export default store;