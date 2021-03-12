import React from 'react';
import { Typography } from '@material-ui/core';
import { Row } from '../';

export default function UserDeleted() {
  return (
    <Row j="center" a="center" w="100%" bg="rgba(0,0,0,0.2)" pt={10} pb={10}>
      <Typography style={{ color: '#fff' }}>
        This user no longer exists
      </Typography>
    </Row>
  );
}
