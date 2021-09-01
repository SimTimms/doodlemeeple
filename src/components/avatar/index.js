import React from 'react';

export default function Avatar({ profileImg, size }) {
  return (
    <div
      style={{
        minHeight: size,
        height: size,
        maxHeight: size,
        minWidth: size,
        maxWidth: size,
        width: size,
        background: `url(${profileImg})`,
        backgroundSize: 'cover',
        borderRadius: '50%',
        overflow: 'hidden',
      }}
    ></div>
  );
}
