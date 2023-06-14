import { useState, } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import colors from "../../utils/constants/colors";

const LoadingOverlay = () =>
{

    const [ value, setValue ] = useState();

    return (
        <View style={ styles.container }>
            <ActivityIndicator size="large" color="white" />
        </View>
    );
};

export default LoadingOverlay;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: colors.background,
    },
} );