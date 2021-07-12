import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CREATIVE_ROSTER_WIDGET } from './data';
import { ProfileCard } from '../profileCard';
import { Filters } from '../profileCard/components';
import BigImage from '../bigImage';
import { IconButton, Column, Row } from '../../components';

export default function CreativeRosterWidget({ history }) {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  const [large, setLarge] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [endPage, setEndPage] = React.useState(false);
  const [filter, setFilter] = React.useState(['artist']);
  const [group, setGroup] = React.useState('artist');

  return (
    <div className={classes.root}>
      <Column w="100%">
        <Filters
          filter={filter}
          setFilter={setFilter}
          setCreativeArray={setCreativeArray}
          group={group}
          setGroup={setGroup}
          setPage={setPage}
          setEndPage={setEndPage}
        />
        <Row wrap="wrap" w="100%">
          {large !== null && <BigImage large={large} setLarge={setLarge} />}
          <Query
            query={CREATIVE_ROSTER_WIDGET}
            fetchPolicy="network-only"
            variables={{ page, filter }}
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
                  <ProfileCard
                    creative={creative}
                    key={`creative_${index}`}
                    setLarge={setLarge}
                    history={history}
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
