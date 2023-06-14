import axios from "axios";

const BACKEND_URL = 'https://expense-tracker-cefb1-default-rtdb.europe-west1.firebasedatabase.app';
const ENDPOINT = '/expenses.json';

export async function storeExpense ( expenseData )
{
    const response = await axios.post(
        BACKEND_URL + ENDPOINT,
        expenseData,
    );
    return response.data.name;
}

export async function fetchExpenses ()
{
    const response = await axios.get(
        BACKEND_URL + ENDPOINT,
    );
    const expenses = [];
    for ( const key in response.data )
    {
        const expenseObj = {
            id: key,
            amount: response.data[ key ].amount,
            date: response.data[ key ].date,
            description: response.data[ key ].description,
        };
        expenses.push( expenseObj );
    }
    return expenses;
}

export function updateExpense ( id, expenseData )
{
    return axios.put(
        BACKEND_URL + `/expenses/${id}.json`,
        expenseData,
    );
}
export async function deleteExpense ( id )
{
    return axios.delete(
        BACKEND_URL + `/expenses/${id}.json`
    );
}