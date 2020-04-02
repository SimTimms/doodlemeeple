import React from 'react';
import { styles } from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';

function ContentTop(props) {
  const mobile = useMediaQuery('(max-width:800px)');
  const classes = styles();
  return (
    <div
      className={clsx({
        [classes.contentTop]: true,
        [classes.contentTopMobile]: mobile,
      })}
    >
      {props.children}
    </div>
  );
}

export default ContentTop;
