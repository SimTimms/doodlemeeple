import React from 'react';

export function Column({ children, align, justify }) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: align,
        justifyContent: justify,
      }}
    >
      {children}
    </div>
  );
}

export function Row({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
}
