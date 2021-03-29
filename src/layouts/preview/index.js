import React from 'react';
import { PreviewProfile } from './views/previewProfile';
import { Content, IconButton, Column } from '../../components';

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
      <Column>
        <a
          href={`${process.env.REACT_APP_URL}/register/profile-link-${pathParam}`}
        >
          <IconButton
            title={`Hire this professional and more at ${process.env.REACT_APP_COMPANY_PUBLIC_NAME}.com`}
            color="text-dark"
          />
        </a>
      </Column>

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
