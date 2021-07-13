import React from 'react';
import { Query } from 'react-apollo';
import { KICKSTARTER_WIDGET, MY_KICKSTARTERS } from './data';
import { KickstarterProfile } from './profileCard';
import { KickstarterForm } from './';
import {
  Row,
  MenuButtonShortcut,
  TopMenuWrapper,
  Column,
  IconButton,
} from '../../components';
import KickstarterComponent from './component';

export default function Kickstarters() {
  const [tab, setTab] = React.useState(0);
  const [kickstarter, setKickstarter] = React.useState(null);

  return (
    <Column>
      <TopMenuWrapper j="center">
        <MenuButtonShortcut
          text={{
            name: 'Browse',
            color: 'light',
            icon: 'travel_explore',
            count: 0,
          }}
          onClickEvent={() => {
            setKickstarter(null);
            setTab(0);
          }}
          active={tab === 0}
          column={true}
        />
        <MenuButtonShortcut
          text={{
            name: 'My Kickstarter',
            color: 'light',
            icon: 'travel_explore',
            count: 0,
          }}
          onClickEvent={() => {
            setKickstarter(null);
            setTab(1);
          }}
          active={tab === 1}
          column={true}
        />
      </TopMenuWrapper>

      {kickstarter ? (
        <KickstarterForm
          kickstarterData={kickstarter}
          setKickstarterData={setKickstarter}
        />
      ) : tab === 0 ? (
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
        tab === 1 && (
          <Column>
            <IconButton
              title="Create Kickstarter Ad"
              icon="add"
              onClickEvent={() => {
                setKickstarter({
                  name: '',
                  logo: '',
                  featuredImage: '',
                  summary: '',
                  url: '',
                  showreel: '',
                  _id: 'new',
                });
              }}
            />
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
    </Column>
  );
}
