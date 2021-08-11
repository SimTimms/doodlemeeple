import React from 'react';
import { useStyles } from './styles';
import { TabPage } from '../../../../components';
import { profileMenu } from '../../../menuArray';
import AccountPage from './accountPage';
import AppProfileEdit from '../appProfileEdit';
import PreviewLayout from '../../../preview';
import TabPreferences from '../appProfileEdit/tabPreferences';
import Cookies from 'js-cookie';
import { HistoryContext } from '../../../../context';

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
            {primaryPage === 'preview' && (
              <PreviewLayout publicView={false} profileId={userId} />
            )}
            {primaryPage === 'preferences' && <TabPreferences />}
            {primaryPage === 'account' && <AccountPage />}
          </div>
        </TabPage>
      )}
    </HistoryContext.Consumer>
  );
}
