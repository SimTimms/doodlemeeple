import React from 'react';
import { useMediaQuery, Icon } from '@material-ui/core';
import logo from '../../../assets/dm_device.png';
import { Row } from '../../../components';

export default function DmDevice({ isOpen, setIsOpen }) {
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <div
      style={{
        minHeight: 64,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        cursor: 'pointer',
        width: '100%',
      }}
      onClick={() => setIsOpen(isOpen ? false : true)}
    >
      <Row a="center" j="center">
        <img
          src={logo}
          style={{
            maxHeight: 37,
            maxWidth: 34,
          }}
          alt="DoodleMeeple Man"
        />
        {mobile && <Icon style={{ color: '#222', marginLeft: 10 }}>menu</Icon>}
      </Row>
    </div>
  );
}
