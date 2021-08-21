import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  MenuButtonStandard,
  Column,
  Row,
  CardComponent,
} from '../../../components';
import { MenuContext } from '../../../context';

export default function KickstarterComponent({ kickstarter }) {
  const classes = useStyles();
  const pending =
    kickstarter.name !== '' && kickstarter.summary && kickstarter.featuredImage;

  return (
    <CardComponent styleOverride={{ maxWidth: 400 }}>
      <div style={{ width: '100%', cursor: 'pointer' }}>
        <Column>
          <Row j="space-between" a="center">
            <Row a="center" j="flex-start">
              <div
                style={{
                  backgroundImage: `url(${kickstarter.featuredImage})`,
                }}
                className={classes.profileThumb}
              ></div>
              <Column a="flex-start">
                <Typography>{kickstarter.name}</Typography>
                <Typography className={classes.dull}>
                  {pending ? 'Live' : 'Draft'}
                </Typography>
              </Column>
            </Row>
            <MenuContext.Consumer>
              {(menu) => (
                <MenuButtonStandard
                  title="Edit"
                  onClickEvent={() =>
                    menu.updateMenuContext({
                      ...menu.homePage,
                      kickstarterId: kickstarter._id,
                      secondaryPage: 'create_kickstarter',
                    })
                  }
                  disabled={false}
                />
              )}
            </MenuContext.Consumer>
          </Row>
        </Column>
      </div>
    </CardComponent>
  );
}
