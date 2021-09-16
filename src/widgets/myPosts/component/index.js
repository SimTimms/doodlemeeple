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

export default function MyPostComponent({ myPost }) {
  const classes = useStyles();
  const approved = myPost.approved;

  return (
    <CardComponent styleOverride={{ maxWidth: 400 }}>
      <div style={{ width: '100%', cursor: 'pointer' }}>
        <Column>
          <Row j="space-between" a="center">
            <Row a="center" j="flex-start">
              <div
                style={{
                  backgroundImage: `url(${myPost.featuredImage})`,
                }}
                className={classes.profileThumb}
              ></div>
              <Column a="flex-start">
                <Typography>{myPost.name}</Typography>
                <Typography className={classes.dull}>
                  {approved ? 'Live' : 'Draft'}
                </Typography>
              </Column>
            </Row>
            <MenuContext.Consumer>
              {(menu) => (
                <MenuButtonStandard
                  title="Edit"
                  onClickEvent={() =>
                    menu.updateMenuContext({
                      ...menu,
                      homePage: {
                        ...menu.homePage,
                        myPostId: myPost._id,
                        secondaryPage: 'create_my_post',
                      },
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
