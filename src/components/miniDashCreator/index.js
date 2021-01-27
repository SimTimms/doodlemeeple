import React from 'react';
import { useMediaQuery, Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { IconButton, Row } from '../';
import { Query } from 'react-apollo';
import { COUNTS } from '../../data/queries';

export default function MiniDashCreator({ history }) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <Row bg="#222" j="space-between">
      <Query query={COUNTS} fetchPolicy="network-only">
        {({ data, loading }) => {
          if (loading) {
            return null;
          }

          return (
            <Row>
              {data.counts.jobs === 0 && (
                <IconButton
                  title="Post a Job"
                  icon="work"
                  color="primary"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() => history.push('/app/edit-job/new')}
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {data.counts.socials === 0 && (
                <IconButton
                  title="Add Socials"
                  icon="facebook"
                  color="secondary"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() => history.push('/app/edit-profile')}
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {data.counts.contact === 0 && (
                <IconButton
                  title="Add Contact"
                  icon="mail"
                  color="secondary"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() => history.push('/app/edit-profile')}
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
            </Row>
          );
        }}
      </Query>
    </Row>
  );
}
