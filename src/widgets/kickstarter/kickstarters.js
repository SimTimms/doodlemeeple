import React from 'react';
import { Query } from 'react-apollo';
import { KICKSTARTER_WIDGET, MY_KICKSTARTERS } from './data';
import { KickstarterProfile } from './profileCard';
import { KickstarterForm } from './';
import { Row, Column, Divider } from '../../components';
import KickstarterComponent from './component';
import { MenuContext } from '../../context';

export default function Kickstarters() {
  return (
    <MenuContext.Consumer>
      {(menu) => (
        <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
          {menu.homePage.secondaryPage === 'create_kickstarter' ? (
            <KickstarterForm />
          ) : menu.homePage.secondaryPage === 'kickstarters' ? (
            <Row
              wrap="wrap"
              j="space-around"
              a="flex-start"
              pb="20px"
              pl="20px"
              pr="20px"
            >
              <Query query={KICKSTARTER_WIDGET} fetchPolicy="network-only">
                {({ data }) => {
                  if (data)
                    return data.kickstarterWidget.map((kickstarter) => (
                      <KickstarterProfile kickstarter={kickstarter} />
                    ));
                  return null;
                }}
              </Query>
            </Row>
          ) : (
            menu.homePage.secondaryPage === 'my_kickstarters' && (
              <Column>
                <Divider />
                <Query query={MY_KICKSTARTERS} fetchPolicy="network-only">
                  {({ data }) => {
                    if (data)
                      return data.myKickstarters.map((kickstarter) => (
                        <KickstarterComponent kickstarter={kickstarter} />
                      ));
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
