import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CREATIVE_MINIS } from '../data/queries';
import { Typography } from '@material-ui/core';

export function CreativeMini({ history }) {
  const classes = useStyles();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        flexWrap: 'wrap',
      }}
    >
      <Query
        query={CREATIVE_MINIS}
        variables={{ count: 5 }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          return data
            ? data.creativeMinis.map((res) => (
                <div
                  className={classes.root}
                  onClick={() => history.push(`/app/public-preview/${res._id}`)}
                >
                  <div
                    className={classes.avatar}
                    style={{ backgroundImage: `url(${res.profileImg})` }}
                  ></div>
                  <div
                    className={classes.bgImg}
                    style={{ backgroundImage: `url(${res.profileBG})` }}
                  >
                    <div className={classes.details} style={{}}>
                      <Typography variant="h6" style={{ fontSize: 14 }}>
                        {res.name}
                      </Typography>
                      <Typography variant="body1" style={{ fontSize: 12 }}>
                        {res.sections.map(
                          (res, index) => `${index > 0 ? ' | ' : ''}${res.type}`
                        )}
                      </Typography>
                    </div>
                  </div>
                </div>
              ))
            : 'Loading';
        }}
      </Query>
    </div>
  );
}
