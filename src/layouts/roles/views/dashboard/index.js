import React from 'react';
import Slide from '@material-ui/core/Slide';

export function Dashboard() {
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>Roles</div>
    </Slide>
  );
}
