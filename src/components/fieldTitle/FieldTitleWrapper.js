import React from 'react';

export default function FieldTitleWrapper({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      {children}
    </div>
  );
}
