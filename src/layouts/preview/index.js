import React from 'react';
import { PreviewProfile } from './views/previewProfile';
import { Content, IconButton, Column } from '../../components';
import Cookies from 'js-cookie';

function PreviewLayout(props) {
  const userId = Cookies.get('userId');

  const pathParam = props
    ? props.profileId
      ? props.profileId
      : props.match
      ? props.match.params.pathParam
        ? props.match.params.pathParam
        : null
      : null
    : null;

  return (
    <div>
      {!userId && (
        <Column>
          <a href={`${process.env.REACT_APP_URL}/register/${pathParam}`}>
            <IconButton
              title={`register at ${process.env.REACT_APP_COMPANY_PUBLIC_NAME}.com`}
              color="text-dark"
            />
          </a>
        </Column>
      )}

      <Content>
        <PreviewProfile
          profileId={pathParam}
          theme={props.theme}
          publicView={props.publicView}
          history={props.history}
        />
      </Content>
    </div>
  );
}

export default PreviewLayout;
