import React, { useEffect } from 'react';
import { Query } from 'react-apollo';
import { KICKSTARTER_WIDGET, MY_KICKSTARTERS } from './data';
import { KickstarterProfile } from './profileCard';
import { KickstarterForm } from './';
import { Row, Column, Divider } from '../../components';
import KickstarterComponent from './component';
import { HistoryContext } from '../../context';

export default function Kickstarters({ setSecondaryPage, secondaryPage }) {
  const [kickstarter, setKickstarter] = React.useState(null);

  useEffect(() => {
    secondaryPage !== 'create_kickstarter' && setKickstarter(null);
    kickstarter && setSecondaryPage('create_kickstarter');
  }, [kickstarter, secondaryPage]);

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
          {secondaryPage === 'create_kickstarter' ? (
            <KickstarterForm
              kickstarterData={kickstarter}
              setKickstarterData={setKickstarter}
            />
          ) : kickstarter ? (
            <KickstarterForm
              kickstarterData={kickstarter}
              setKickstarterData={setKickstarter}
            />
          ) : secondaryPage === 'kickstarters' ? (
            <Row
              wrap="wrap"
              j="space-around"
              a="flex-start"
              pb="20px"
              pl="20px"
              pr="20px"
            >
              <Query query={KICKSTARTER_WIDGET} fetchPolicy="network-only">
                {({ data, loading }) => {
                  if (data)
                    return data.kickstarterWidget.map((kickstarter) => (
                      <KickstarterProfile kickstarter={kickstarter} />
                    ));
                  return null;
                }}
              </Query>
            </Row>
          ) : (
            secondaryPage === 'my_kickstarters' && (
              <Column>
                <Divider />
                <Query query={MY_KICKSTARTERS} fetchPolicy="network-only">
                  {({ data, loading }) => {
                    if (data)
                      return data.myKickstarters.map((kickstarter) => (
                        <KickstarterComponent
                          kickstarter={kickstarter}
                          setKickstarter={setKickstarter}
                        />
                      ));
                    return null;
                  }}
                </Query>
              </Column>
            )
          )}
        </Row>
      )}
    </HistoryContext.Consumer>
  );
}
