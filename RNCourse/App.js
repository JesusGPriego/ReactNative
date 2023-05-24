import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './src/components/goalItem';
import GoalInput from './src/components/goalInput';

export default App = () =>
{

  const [ textGoals, setTextGoals ] = useState( '' );
  const [ goals, setGoals ] = useState( [] );
  const [ isModalVisible, setIsModalVisible ] = useState( false );

  const handleTextChange = ( text ) =>
  {
    setTextGoals( text );
  };

  const generateRandomGoals = () =>
  {
    const goalArray = [];
    for ( let index = 0; index < 50; index++ )
    {
      const itemToAdd = index.toString();
      goalArray.push( itemToAdd );
    };
    if ( textGoals ) setTextGoals();
    toggleModal();
    setGoals( [ ...goals, ...goalArray ] );
  };

  const onAddGoal = () =>
  {
    if ( typeof textGoals !== 'string' || !textGoals.trim() )
    {
      setTextGoals();
      return;
    }
    setGoals( [ ...goals, textGoals.trim() ] );
    setTextGoals();
    toggleModal();
  };

  const onDeleteGoal = ( itemIdx ) =>
  {
    const goalsAfterDelete = goals.filter( ( _, index ) => itemIdx !== index );
    setGoals( goalsAfterDelete );
  };

  const listItem = ( { item, index } ) =>
  {
    return (
      <GoalItem idx={ index } goal={ item } onDeleteGoal={ onDeleteGoal } />
    );
  };

  const keyExtractror = ( _, index ) =>
  {
    return index;
  };

  const toggleModal = () =>
  {
    setIsModalVisible( !isModalVisible );
  };

  return (
    <>
      <StatusBar style='light' />
      <View
        style={ styles.appContainer }
      >
        <Button
          title='Add New Goal'
          color={ '#a065ec' }
          onPress={ ( toggleModal ) } />
        <GoalInput
          handleTextChange={ handleTextChange }
          goalText={ textGoals }
          visible={ isModalVisible }
          onAddGoal={ generateRandomGoals }
          onAddCancel={ toggleModal } />
        <View
          style={ styles.goalsContainer }
        >
          <FlatList
            data={ goals }
            renderItem={ listItem }
            keyExtractor={ keyExtractror } />
        </View>
        <View style={ styles.spacer } />
      </View>
    </>
  );
};

const styles = StyleSheet.create( {
  appContainer: {
    flex: 1,
    marginTop: 35,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    marginTop: 20,
    flex: 5,
  },
  spacer: {
    flex: 0.5,
  },
} );
