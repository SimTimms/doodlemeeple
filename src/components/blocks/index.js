import React from 'react';

export function Column({ children, a, j }) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: a ? a : 'center',
        justifyContent: j ? j : 'flex-start',
      }}
    >
      {children}
    </div>
  );
}

export function Row({ children, a, j }) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: a ? a : 'center',
        justifyContent: j ? j : 'flex-start',
      }}
    >
      {children}
    </div>
  );
}
