import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import Button from "../../components/UI/Button";
import colors from "../../utils/constants/colors";

const ExpenseForm = ( { onCancel, onSubmit, submitButtonLabel, defaultValues } ) =>
{

    const [ inputs, setInputs ] = useState( {
        amount: {
            value: defaultValues?.amount.toString() || '',
            isValid: true
        },
        date: {
            value: defaultValues?.date || '',
            isValid: true
        },
        description: {
            value: defaultValues?.description || ' ',
            isValid: true
        }
    } );

    const inputChangedHandler = ( inputIdentifier, enteredValue ) =>
    {
        setInputs( ( currentInputs ) =>
        {
            return {
                ...currentInputs,
                [ inputIdentifier ]: { value: enteredValue, isValid: true },
            };
        } );
    };

    const submitHandler = () =>
    {
        const expenseData = {
            amount: +inputs.amount.value,
            date: inputs.date.value,
            description: inputs.description.value,
        };

        const amountIsValid = !isNaN( expenseData.amount ) && ( expenseData.amount > 0 );
        const dateIsValid = new Date( expenseData.date ).toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.toString().trim().length > 0;

        if ( !amountIsValid || !dateIsValid || !descriptionIsValid )
        {
            setInputs( curInputs =>
            {
                return {
                    amount: {
                        value: curInputs.amount.value, isValid: amountIsValid,
                    },
                    date: {
                        value: curInputs.date.value, isValid: dateIsValid,
                    },
                    description: {
                        value: curInputs.description.value, isValid: descriptionIsValid,
                    },
                };
            } );
            return;
        }


        onSubmit( expenseData );
    };

    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Your Expense</Text>
            <View style={ styles.inputsRow }>
                <Input label='Amount'
                    invalid={ !inputs.amount.isValid }
                    textInputConfig={ {
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangedHandler.bind( this, 'amount' ),
                        value: inputs.amount.value,
                    } }
                    style={ styles.inputRow }
                />
                <Input label='Date'
                    invalid={ !inputs.date.isValid }
                    textInputConfig={ {
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind( this, 'date' ),
                        value: inputs.date.value,
                    } }
                    style={ styles.inputRow }
                />
            </View>
            <Input label='Description'
                invalid={ !inputs.description.isValid }
                textInputConfig={ {
                    multiline: true,
                    onChangeText: inputChangedHandler.bind( this, 'description' ),
                    value: inputs.description.value,
                } } />
            { formIsInvalid && <Text style={ styles.errorText }>
                Form is not valid
            </Text> }
            <View style={ styles.buttonContainer }>
                <Button
                    mode='flat'
                    onPress={ onCancel }
                    style={ styles.buttonStyle }
                >
                    Cancel
                </Button>
                <Button
                    onPress={ submitHandler }
                    style={ styles.buttonStyle }
                >
                    { submitButtonLabel }
                </Button>
            </View>
        </View>
    );
};

export default ExpenseForm;

const styles = StyleSheet.create( {
    container: {
        marginTop: 25,
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.darkerText,
        textAlign: 'center',
        marginBottom: 40,
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    },
    inputRow: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        minWdith: 120,
        marginHorizontal: 8,
    },
    errorText: {
        textAlign: 'center',
        color: colors.error,
        margin: 8,
        fontWeight: 'bold',
    },
} );