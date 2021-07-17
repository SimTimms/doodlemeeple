import React from 'react';
import { useStyles } from './styles';
import { MenuButtonShortcut, TopMenuWrapper } from '../../../../../components';
import { HistoryContext } from '../../../../../context';

export default function NewJobMenu() {
  const classes = useStyles();

  return (
    <div className={classes.menuRoot}>
      <HistoryContext.Consumer>
        {(history) => (
          <TopMenuWrapper j="center">
            <MenuButtonShortcut
              text={{
                name: 'Back',
                color: 'light',
                icon: 'chevron_left',
                count: 0,
              }}
              onClickEvent={() => {
                history.push('/app/projects');
              }}
              active={true}
              column={true}
            />
          </TopMenuWrapper>
        )}
      </HistoryContext.Consumer>
    </div>
  );
}
