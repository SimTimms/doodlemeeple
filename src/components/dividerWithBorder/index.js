import React from 'react';

export default function DividerWithBorder() {
  return (
    <div
      style={{
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        borderTop: '1px dotted #ddd',
      }}
    ></div>
  );
}
