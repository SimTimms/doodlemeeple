import React from 'react';

export function Column({ children }) {
  return (
    <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
      {children}
    </div>
  );
}

export function Row({ children }) {
  return (
    <div style={{ display: 'flex', width: '100%', flexDirection: 'row' }}>
      {children}
    </div>
  );
}
