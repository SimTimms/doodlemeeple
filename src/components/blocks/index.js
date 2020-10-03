import React from 'react';

export function Column(props) {
  const { children, a, j, w, p } = props;
  const align = a ? a : 'center';
  const width = w ? w : '100%';
  const justify = j ? j : 'center';
  const padding = p ? p : 0;

  return (
    <div
      style={{
        display: 'flex',
        width: width,
        flexDirection: 'column',
        alignItems: align,
        justifyContent: justify,
        padding,
      }}
    >
      {children}
    </div>
  );
}

export function Row(props) {
  const { children, a, j, wrap, w } = props;
  const align = a ? a : 'center';
  const justify = j ? j : 'center';
  const width = w ? w : '100%';

  return (
    <div
      style={{
        display: 'flex',
        width,
        flexDirection: 'row',
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
      }}
    >
      {children}
    </div>
  );
}

export function RowCheckList(props) {
  const { children, a, j, wrap, active } = props;
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
        flexWrap: wrap,
        opacity: !active ? 0.3 : 1,
        height: 20,
      }}
    >
      {children}
    </div>
  );
}

export function TopMenuWrapper(props) {
  const { children, a, j, wrap } = props;
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
        flexWrap: wrap,
        background: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}
    >
      {children}
    </div>
  );
}
