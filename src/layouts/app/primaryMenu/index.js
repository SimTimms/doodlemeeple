import React from 'react';
import { Column } from '../../../components';
import Button from './button';
import { useStyles } from './styles';
import dmDevice from '../../../assets/dmDevice.png';
import { HistoryContext, CountContext, MenuContext } from '../../../context';

export default function PrimaryMenu({ mainMenu, publicPage }) {
  const classes = useStyles();

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <CountContext.Consumer>
          {(counts) => (
            <MenuContext.Consumer>
              {(menuContext) => {
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
                    {mainMenu(history, counts, menuContext).map((menuItem) => {
                      return (
                        <Button
                          menuItem={menuItem}
                          isActive={
                            publicPage
                              ? menuContext.publicPage === menuItem.machineName
                              : menuContext.primaryPage === menuItem.machineName
                          }
                        />
                      );
                    })}
                  </Column>
                );
              }}
            </MenuContext.Consumer>
          )}
        </CountContext.Consumer>
      )}
    </HistoryContext.Consumer>
  );
}
