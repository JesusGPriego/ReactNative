import { View, Text, StyleSheet } from 'react-native';

const Subtitle = ( { text } ) =>
{
    return (
        <View style={ styles.subtitleContainer }>
            <Text style={ styles.subtitle }>{ text }</Text>
        </View>
    );
};

export default Subtitle;

const styles = StyleSheet.create( {
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#bdbdaf',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#bdbdaf',
        borderBottomWidth: 2,
    },
} );