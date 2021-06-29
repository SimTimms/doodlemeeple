import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CREATIVE_ROSTER_WIDGET } from './data';
import { ProfileCardMini } from './profileCard';
import BigImage from './profileCard/components/bigImage';
import { IconButton, Column, Row } from '../components';

export default function CreativeRosterWidget() {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  const [large, setLarge] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [endPage, setEndPage] = React.useState(false);

  return (
    <div className={classes.root}>
      <Column>
        <Row wrap="wrap" w="100%">
          {large !== null && <BigImage large={large} setLarge={setLarge} />}
          <Query
            query={CREATIVE_ROSTER_WIDGET}
            fetchPolicy="network-only"
            variables={{ page }}
            onCompleted={(data) => {
              data.creativeRosterWidget.length === 0 && setEndPage(true);
              setCreativeArray([
                ...creativeArray,
                ...data.creativeRosterWidget,
              ]);
            }}
          >
            {() => {
              return creativeArray.map((creative, index) => {
                return (
                  <ProfileCardMini
                    creative={creative}
                    key={`creative_${index}`}
                    setLarge={setLarge}
                  />
                );
              });
            }}
          </Query>
        </Row>
        {!endPage && (
          <IconButton
            title="Load More"
            color="text-dark"
            icon="refresh"
            onClickEvent={() => setPage(page + 1)}
          />
        )}
      </Column>
    </div>
  );
}
