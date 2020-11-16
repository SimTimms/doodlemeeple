import React from 'react';
import { useStyles } from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';

export function Column(props) {
  const { children, a, j, w, p } = props;
  const align = a ? a : 'center';
  const width = w ? w : '100%';
  const justify = j ? j : 'center';
  const padding = p ? p : 0;
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <div
      style={{
        width: !mobile && width,
        alignItems: align,
        justifyContent: justify,
        padding,
      }}
      className={clsx({
        [classes.desktop]: true,
        [classes.mobile]: mobile,
      })}
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
  const { children, a, j, wrap, active, pointer, onClickEvent } = props;
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
        cursor: pointer ? 'pointer' : 'default',
      }}
      onClick={() => (onClickEvent ? onClickEvent() : null)}
    >
      {children}
    </div>
  );
}

export function TopMenuWrapper(props) {
  const classes = useStyles();

  const { children, a, j, wrap } = props;
  const align = a ? a : 'center';
  const justify = j ? j : 'center';

  return (
    <div
      className={classes.menuWrapper}
      style={{
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
      }}
    >
      {children}
    </div>
  );
}
