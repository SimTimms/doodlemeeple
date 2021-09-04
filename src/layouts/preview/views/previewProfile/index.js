import React from 'react';
import { useStyles } from './styles';
import { IconButton, TabPage } from '../../../../components';
import Cookies from 'js-cookie';
import clsx from 'clsx';
import { FullProfileCard } from '../../../../widgets/profileCard';
import { HistoryContext, MenuContext } from '../../../../context';
import { viewProfileMenu } from '../../../menuArray';
export function PreviewProfile({ history, profileId, publicView, ...props }) {
  const classes = useStyles();
  const userId = Cookies.get('userId');
  const { setFullProfile } = props;
  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'profile',
    kickstarterId: null,
    myPostId: null,
    gameId: null,
  });

  return (
    <MenuContext.Provider
      value={{
        profilePage: {
          primaryPage: pageValues.primaryPage,
          secondaryPage: pageValues.secondaryPage,
          kickstarterId: pageValues.kickstarterId,
          myPostId: pageValues.myPostId,
          gameId: pageValues.gameId,
        },
        updateMenuContext: setPageValues,
      }}
    >
      <HistoryContext.Consumer>
        {(history) => (
          <TabPage
            title={null}
            primaryMenu={viewProfileMenu(pageValues, setPageValues)}
            secondaryMenu={null}
            menu={null}
            activePrimary={pageValues.primaryPage}
            activeSecondary={pageValues.secondaryPage}
          >
            <div
              className={clsx({
                [classes.root]: true,
                [classes.popup]: setFullProfile,
              })}
            >
              <div className={classes.root}>
                {setFullProfile && (
                  <IconButton
                    title="Close"
                    icon="close"
                    color="primary"
                    onClickEvent={() => {
                      setFullProfile(null);
                    }}
                  ></IconButton>
                )}

                {!publicView && profileId === userId && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      top: 0,
                      position: 'absolute',
                    }}
                  >
                    <IconButton
                      title="Edit"
                      icon="edit"
                      color="primary"
                      onClickEvent={() => {
                        history.push('/app/edit-profile');
                      }}
                    ></IconButton>
                  </div>
                )}
                <FullProfileCard history={history} creativeId={profileId} />
              </div>
            </div>
          </TabPage>
        )}
      </HistoryContext.Consumer>
    </MenuContext.Provider>
  );
}
