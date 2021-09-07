import React from 'react';
import { PreviewProfile } from './views/previewProfile';
import { Content, MainWrapper, ContentScroll, TabPage } from '../../components';
import PrimaryMenu from '../app/primaryMenu';
import { previewProfileMenu } from '../menuArray';
import { MainMenuContext } from '../../context';
import GamesPage from './views/previewProfile/gamesPage';
import JobAdsPage from './views/previewProfile/jobAdsPage';
import KickstarterPage from './views/previewProfile/kickstarterPage';
import { Query } from 'react-apollo';
import { PROFILE } from './data';

function PreviewLayout(props) {
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
    <MainMenuContext.Consumer>
      {(mainMenuContext) => (
        <MainWrapper>
          <PrimaryMenu mainMenu={previewProfileMenu} />
          <ContentScroll>
            <Content>
              <Query
                query={PROFILE}
                variables={{ userId: pathParam }}
                fetchPolicy="network-only"
              >
                {({ data, loading }) => {
                  return data ? (
                    <TabPage
                      title={data.userById.name}
                      primaryMenu={null}
                      secondaryMenu={null}
                      menu={null}
                      activePrimary={null}
                      activeSecondary={null}
                    >
                      {mainMenuContext.primaryPage === 'profile' && (
                        <PreviewProfile
                          profileId={pathParam}
                          theme={props.theme}
                          publicView={props.publicView}
                          history={props.history}
                        />
                      )}
                      {mainMenuContext.primaryPage === 'games' && (
                        <GamesPage userId={pathParam} />
                      )}
                      {mainMenuContext.primaryPage === 'jobs' && (
                        <JobAdsPage userId={pathParam} />
                      )}
                      {mainMenuContext.primaryPage === 'kickstarters' && (
                        <KickstarterPage userId={pathParam} />
                      )}
                    </TabPage>
                  ) : null;
                }}
              </Query>
            </Content>
          </ContentScroll>
        </MainWrapper>
      )}
    </MainMenuContext.Consumer>
  );
}

export default PreviewLayout;
