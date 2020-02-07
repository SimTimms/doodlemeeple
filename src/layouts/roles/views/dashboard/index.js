import React from 'react';
import Slide from '@material-ui/core/Slide';

export function Dashboard({ gameId }) {
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        <div>Game: {gameId}</div>
        <div
          onClick={() => {
            alert('D');
          }}
        >
          Create Role
        </div>
      </div>
    </Slide>
  );
}
