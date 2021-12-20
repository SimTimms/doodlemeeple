import React from 'react';
import { Query } from 'react-apollo';
import { POST_FEED } from './data';
import { MyPostProfile } from './profileCard';
import { Column, Row, DividerWithBorder } from '../../components';
import { randomKey } from '../../utils';
import { CreateJob } from '../../widgets';
import IconButton from './IconButton';
import { MenuContext } from '../../context';

export default function PublicPosts() {
  const [filter, setFilter] = React.useState({
    lastOn: true,
    job: true,
    newUser: false,
    game: true,
    kickstarter: true,
    public: true,
  });
  const [count, setCount] = React.useState(0);

  return (
    <Column mw={500}>
      <Row j="center">
        <IconButton type={'lastOn'} setFilter={setFilter} filter={filter} />
        <IconButton type={'job'} setFilter={setFilter} filter={filter} />
        <IconButton type={'newUser'} setFilter={setFilter} filter={filter} />
        <IconButton type={'game'} setFilter={setFilter} filter={filter} />
        <IconButton
          type={'kickstarter'}
          setFilter={setFilter}
          filter={filter}
        />
        <IconButton type={'public'} setFilter={setFilter} filter={filter} />
      </Row>
      <DividerWithBorder />

      {filter['job'] && (
        <MenuContext.Consumer>
          {(menuContext) => {
            return (
              <CreateJob menu={menuContext} cb={() => setCount(count + 1)} />
            );
          }}
        </MenuContext.Consumer>
      )}
      <DividerWithBorder />

      <Query
        query={POST_FEED}
        variables={{
          filter: [
            filter.job ? 'job' : null,
            filter.lastOn ? 'lastOn' : null,
            filter.newUser ? 'newUser' : null,
            filter.game ? 'game' : null,
            filter.kickstarter ? 'kickstarter' : null,
            filter.public ? 'public' : null,
          ],
          count,
        }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          if (data) {
            return data.postFeed.map((myPost) => (
              <MyPostProfile myPost={myPost} key={randomKey()} />
            ));
          }
          return null;
        }}
      </Query>
    </Column>
  );
}
