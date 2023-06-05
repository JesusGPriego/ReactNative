import { createContext, useState } from "react";

export const FavoriteContext = createContext( {
    ids: [],
    addFavorite: ( id ) => { },
    removeFavorite: ( id ) => { },
} );


const FavoriteContextProvider = ( { children } ) =>
{

    const [ favoriteMealIds, setFavoriteMealIds ] = useState( [] );

    const addFavorite = ( id ) =>
    {

        setFavoriteMealIds( ( currentFavoriteIds ) =>
        {
            return [ ...currentFavoriteIds, id ];
        }
        );
    };

    const removeFavorite = ( id ) =>
    {
        setFavoriteMealIds( ( currentFavoriteIds ) => currentFavoriteIds.filter( ( currentFavoriteId ) => currentFavoriteId !== id ) );
    };

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    return (
        <FavoriteContext.Provider value={ value }>
            { children }
        </FavoriteContext.Provider>
    );
};

export default FavoriteContextProvider;