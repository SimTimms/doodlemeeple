import React from 'react';

export function Column(props) {
  const { children, a, j } = props;
  const align = a ? a : 'center';
  const justify = j ? j : 'center';

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

export function Row(props) {
  const { children, a, j } = props;
  const align = a ? a : 'center';
  const justify = j ? j : 'center';

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: align,
        justifyContent: justify,
      }}
    >
      {children}
    </div>
  );
}
