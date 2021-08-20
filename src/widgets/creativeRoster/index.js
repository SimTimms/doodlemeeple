import React from 'react';
import { Typography, Fade } from '@material-ui/core';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CREATIVE_ROSTER_WIDGET } from './data';
import { ProfileCard } from '../profileCard';
import { Filters } from '../profileCard/components';
import BigImage from '../bigImage';
import {
  IconButton,
  Column,
  Row,
  CardComponent,
  Divider,
} from '../../components';

export default function CreativeRosterWidget({ history }) {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  const [large, setLarge] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [endPage, setEndPage] = React.useState(false);
  const [filter, setFilter] = React.useState(['artist']);
  const [group, setGroup] = React.useState('artist');
  console.log(creativeArray);
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
        <Row wrap="wrap" w={900}>
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
              if (creativeArray.length === 0)
                return (
                  <Column w={700}>
                    <Divider />
                    <Fade in={true} timeout={3000}>
                      <div style={{ width: '100%' }}>
                        <CardComponent type="dark">
                          <Typography>No Results</Typography>
                        </CardComponent>
                      </div>
                    </Fade>
                  </Column>
                );
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
        {!endPage && creativeArray.length > 0 && (
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
