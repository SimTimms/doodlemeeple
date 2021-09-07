import React from 'react';
import { Column } from '../../../components';
import Button from './button';
import { useStyles } from './styles';
import dmDevice from '../../../assets/dmDevice.png';
import {
  HistoryContext,
  CountContext,
  MainMenuContext,
} from '../../../context';

export default function PrimaryMenu({ page, mainMenu }) {
  const classes = useStyles();

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <CountContext.Consumer>
          {(counts) => (
            <MainMenuContext.Consumer>
              {(mainMenuContext) => {
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
                    {mainMenu(history, counts, mainMenuContext).map(
                      (menuItem) => {
                        return (
                          <Button
                            menuItem={menuItem}
                            isActive={
                              mainMenuContext.primaryPage ===
                              menuItem.machineName
                            }
                          />
                        );
                      }
                    )}
                  </Column>
                );
              }}
            </MainMenuContext.Consumer>
          )}
        </CountContext.Consumer>
      )}
    </HistoryContext.Consumer>
  );
}
