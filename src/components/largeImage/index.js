import React from 'react';

export default function LargeImage({ large, setLarge }) {
  return large ? (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        zIndex: 100,
        background: 'rgba(0,0,0,0.8)',
        cursor: 'pointer',
      }}
      onClick={() => setLarge(null)}
    >
      <img
        src={large}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
        }}
        alt=""
        onClick={() => {
          setLarge(null);
        }}
      />
    </div>
  ) : null;
}
