import React from 'react';
import { PreviewProfile } from './views/previewProfile';
import { Content, MainWrapper, ContentScroll, TabPage } from '../../components';
import PrimaryMenu from '../app/primaryMenu';
import { previewProfileMenu } from '../menuArray';

function PreviewLayout(props) {
  const [page, setPage] = React.useState('home');

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
    <MainWrapper>
      <PrimaryMenu page={page} mainMenu={previewProfileMenu} />
      <ContentScroll>
        <Content>
          <TabPage
            title={null}
            primaryMenu={null}
            secondaryMenu={null}
            menu={null}
            activePrimary={null}
            activeSecondary={null}
          >
            <PreviewProfile
              profileId={pathParam}
              theme={props.theme}
              publicView={props.publicView}
              history={props.history}
            />
          </TabPage>
        </Content>
      </ContentScroll>
    </MainWrapper>
  );
}

export default PreviewLayout;
