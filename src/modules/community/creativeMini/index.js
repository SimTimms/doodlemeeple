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
                  style={{
                    width: 180,
                    height: 200,
                    paddingTop: 30,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    marginLeft: 6,
                    marginRight: 6,
                  }}
                  onClick={() => history.push(`/app/public-preview/${res._id}`)}
                >
                  <div
                    style={{
                      backgroundColor: '#fff',
                      backgroundImage: `url(${res.profileImg})`,
                      minWidth: 84,
                      maxWidth: 84,
                      minHeight: 84,
                      maxHeight: 84,
                      marginBottom: -42,
                      border: '3px solid #fff',
                      borderRadius: '50%',
                      backgroundSize: 'cover',
                      position: 'relative',
                      zIndex: 2,
                      boxShadow: '3px 3px 5px rgba(0,0,0,0.2)',
                    }}
                  ></div>
                  <div
                    style={{
                      background: `url(${res.profileBG})`,
                      width: 180,
                      height: 120,
                      backgroundSize: 'cover',
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      flexDirection: 'column',
                      padding: 3,
                      boxShadow: '3px 3px 5px rgba(0,0,0,0.2)',
                    }}
                  >
                    <div
                      style={{
                        background: '#fff',
                        padding: 5,
                        boxSizing: 'border-box',
                        borderRadius: '0 0 8px 8px',
                        width: '100%',
                        textAlign: 'center',
                      }}
                    >
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
