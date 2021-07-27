import React from 'react';
import { Column } from '../../../components';
import Button from './button';
import { mainMenu } from '../../menuArray';
import { useStyles } from './styles';
import dmDevice from '../../../assets/dmDevice.png';
import { HistoryContext, CountContext } from '../../../context';

export default function PrimaryMenu({ profile, page }) {
  const classes = useStyles();

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <CountContext.Consumer>
          {(counts) => {
            return (
              <Column
                j="flex-start"
                a="flex-start"
                w={200}
                classAdd={classes.column}
              >
                <div className={classes.deviceWrapper}>
                  <img src={dmDevice} className={classes.device} />
                </div>
                {mainMenu(history, counts).map((menuItem) => {
                  return (
                    <Button
                      menuItem={menuItem}
                      isActive={page === menuItem.machineName}
                    />
                  );
                })}
                <Button
                  menuItem={{
                    name: profile ? profile.name : 'Fetching...',
                    icon: 'face',
                    image: profile && profile.profileImg,
                    link: () => history.push('/app/edit-profile'),
                  }}
                />
              </Column>
            );
          }}
        </CountContext.Consumer>
      )}
    </HistoryContext.Consumer>
  );
}
