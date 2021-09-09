import React from 'react';

export const ProfileContext = React.createContext({
  profile: { name: 'john' },
  updateProfileContext: () => {},
});

export const UserContext = React.createContext({
  userId: null,
});

export const ParamsContext = React.createContext({
  savedUserId: null,
  jumpPage: null,
  updateParamsContext: () => {},
});

export const MenuContext = React.createContext({
  primaryPage: null,
  publicPage: null,
  jobPage: {
    primaryPage: null,
    secondaryPage: null,
    jobId: null,
    inviteId: null,
    contractId: null,
  },
  workPage: {
    primaryPage: null,
    secondaryPage: null,
    jobId: null,
    inviteId: null,
    contractId: null,
  },
  homePage: {
    primaryPage: null,
    secondaryPage: null,
    kickstarterId: null,
    myPostId: null,
    gameId: null,
    userId: null,
  },
  profilePage: {
    primaryPage: null,
    secondaryPage: null,
    kickstarterId: null,
    myPostId: null,
    gameId: null,
  },
  updateMenuContext: { secondary: () => {}, primary: () => {} },
});

export const HistoryContext = React.createContext({
  history: null,
});

export const FavouritesContext = React.createContext({
  favourites: null,
});

export const CreativeContext = React.createContext({
  _id: null,
});

export const CountContext = React.createContext({
  invites: 0,
  messages: 0,
  quotes: 0,
});

export const GameContext = React.createContext({
  gameId: null,
});
