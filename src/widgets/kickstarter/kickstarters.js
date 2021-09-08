import React from 'react';
import { Query } from 'react-apollo';
import { KICKSTARTER_WIDGET, MY_KICKSTARTERS } from './data';
import { KickstarterProfile } from './profileCard';
import { KickstarterForm } from './';
import { Row, Grid, Column, Divider, CardComponent } from '../../components';
import KickstarterComponent from './component';
import { MenuContext } from '../../context';
import { Typography } from '@material-ui/core';

export default function Kickstarters() {
  return (
    <MenuContext.Consumer>
      {(menu) => (
        <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
          {menu.homePage.secondaryPage === 'create_kickstarter' ? (
            <KickstarterForm />
          ) : menu.homePage.secondaryPage === 'kickstarters' ? (
            <Grid cols={3}>
              <Query query={KICKSTARTER_WIDGET} fetchPolicy="network-only">
                {({ data }) => {
                  if (data)
                    return data.kickstarterWidget.map((kickstarter) => (
                      <KickstarterProfile kickstarter={kickstarter} />
                    ));

                  return null;
                }}
              </Query>
            </Grid>
          ) : (
            menu.homePage.secondaryPage === 'my_kickstarters' && (
              <Column>
                <Query query={MY_KICKSTARTERS} fetchPolicy="network-only">
                  {({ data }) => {
                    if (data)
                      if (data.myKickstarters.length === 0) {
                        return (
                          <CardComponent type="dark">
                            <Typography>
                              You haven't posted any kickstarters
                            </Typography>
                          </CardComponent>
                        );
                      } else {
                        return data.myKickstarters.map((kickstarter) => (
                          <KickstarterComponent kickstarter={kickstarter} />
                        ));
                      }
                    return null;
                  }}
                </Query>
              </Column>
            )
          )}
        </Row>
      )}
    </MenuContext.Consumer>
  );
}
