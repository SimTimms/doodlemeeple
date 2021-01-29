import React from 'react';
export const SoundPlaying = false;

export const Context = React.createContext({
  playing: SoundPlaying,
  setPlaying: () => {},
});
