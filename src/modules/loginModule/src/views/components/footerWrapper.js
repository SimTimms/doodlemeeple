import React from 'react';
import { Footer, PublicFooterMenu } from '../../../imports/sharedComponents';
import { styles } from './styles';

export default function FooterWrapper({ history }) {
  const classes = styles();

  return (
    <Footer>
      <PublicFooterMenu />
    </Footer>
  );
}
