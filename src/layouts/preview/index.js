import React from 'react';
import { PreviewProfile } from './views/previewProfile';
import { Content, StyledNavBar } from '../../components';
import { PublicMenu } from '../menus';

function PreviewLayout(props) {
  const pathParam = props
    ? props.match
      ? props.match.params.pathParam
        ? props.match.params.pathParam
        : null
      : null
    : null;

  return (
    <div>
      <StyledNavBar title="" open={false}>
        <PublicMenu history={props.history} />
      </StyledNavBar>
      <Content>
        <PreviewProfile
          profileId={pathParam}
          theme={props.theme}
          publicView={props.publicView}
        />
      </Content>
    </div>
  );
}

export default PreviewLayout;
