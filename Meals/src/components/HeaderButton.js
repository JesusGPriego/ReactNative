import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const HeaderButton = ( { onPress, icon = 'star', color = 'white' } ) =>
{
    return (
        <Pressable
            onPress={ onPress }
            style={ ( { pressed } ) => pressed && styles.pressed }
        >
            <Ionicons name={ icon } size={ 24 } color={ color } />
        </Pressable>
    );
};

export default HeaderButton;

const styles = StyleSheet.create( {
    pressed: {
        opacity: 0.75,
    }
} );