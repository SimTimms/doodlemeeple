import React from 'react';
import { IconButton } from '../../';

export default function ProfileName({ history, creative }) {
  return (
    <IconButton
      title={creative.name}
      onClickEvent={() => history.push(`/app/public-preview/${creative._id}`)}
      color="text-dark"
      disabled={false}
      iconPos="right"
      icon=""
      styleOverride={{
        color: '#222',
        boxSizing: 'border-box',
        paddingRight: 0,
        paddingLeft: 0,
        textDecoration: 'underline',
        marginTop: 0,
        marginBottom: 0,
      }}
      type="button"
    />
  );
}
