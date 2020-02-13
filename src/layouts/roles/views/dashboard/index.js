import React from 'react';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';

export function Dashboard({ gameId, roles }) {
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        <div>Game: {gameId}</div>
        {roles.map((role, index) => {
          return <div key={`role_${index}`}>Role: {role.title}</div>;
        })}
        <Link to={`/roles/create-role/${gameId}`}>+ Create Role</Link>
      </div>
    </Slide>
  );
}
