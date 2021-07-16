import React from 'react';

export const ProfileContext = React.createContext({
  profile: { name: 'john' },
  updateProfileContext: () => {},
});

export const HistoryContext = React.createContext({
  history: null,
});

export const FavouritesContext = React.createContext({
  favourites: null,
});
