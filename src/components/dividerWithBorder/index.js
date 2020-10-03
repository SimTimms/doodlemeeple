import React from 'react';

export default function DividerWithBorder() {
  return (
    <div
      style={{
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        borderTop: '1px dotted #ddd',
      }}
    ></div>
  );
}
