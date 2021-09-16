import React from 'react';
import { useStyles } from './styles';
import { TabPage } from '../../../../components';
import { profileMenu } from '../../../menuArray';
import AccountPage from './accountPage';
import AppProfileEdit from '../appProfileEdit';
import TabPreferences from '../appProfileEdit/tabPreferences';
import Cookies from 'js-cookie';
import { HistoryContext } from '../../../../context';
import { PreviewProfile } from '../../../preview/views/previewProfile';

export function Account() {
  const classes = useStyles();
  const [primaryPage, setPrimaryPage] = React.useState('profile');
  const userId = Cookies.get('userId');

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <TabPage
          title={null}
          primaryMenu={profileMenu(setPrimaryPage, history)}
          secondaryMenu={null}
          menu={null}
          activePrimary={primaryPage}
          activeSecondary={''}
        >
          <div className={classes.root}>
            {primaryPage === 'profile' && <AppProfileEdit />}
            {primaryPage === 'preferences' && <TabPreferences />}
            {primaryPage === 'account' && <AccountPage />}
            {primaryPage === 'preview' && (
              <PreviewProfile profileId={userId} publicView={true} />
            )}
          </div>
        </TabPage>
      )}
    </HistoryContext.Consumer>
  );
}
