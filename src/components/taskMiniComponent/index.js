import React from 'react';
import { Row, Column, LoadIcon } from '../';
import Icon from '@material-ui/core/Icon';
import { Query } from 'react-apollo';
import { COUNTS } from '../../data/queries';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function TaskMiniComponent({ history }) {
  const classes = useStyles();

  return (
    <Row bg="#fff" j="space-between">
      <Query query={COUNTS} fetchPolicy="network-only">
        {({ data, loading }) => {
          if (loading) {
            return null;
          }
          const {
            messages,
            draftQuotes,
            invites,
            quotesDeclined,
            quotesAccepted,
            unansweredQuotes,
          } = data && data.counts ? data.counts : {};
          const hasMessage = messages > 0;
          const hasQuotes = unansweredQuotes > 0;
          const hasInvites =
            draftQuotes > 0 ||
            invites > 0 ||
            quotesDeclined > 0 ||
            quotesAccepted > 0;

          return data ? (
            <Column bg="#39354E">
              <Typography className={classes.notificationTitle}>
                Notifications
              </Typography>
              <Row pt={4} pb={4}>
                <Icon
                  className={clsx({
                    [classes.countIcon]: true,
                    [classes.countIconOn]: hasMessage,
                  })}
                  title="Messages"
                  onClick={() =>
                    hasMessage ? history.push('/app/conversations/') : null
                  }
                >
                  mail
                </Icon>
                <Icon
                  className={clsx({
                    [classes.countIcon]: true,
                    [classes.countIconOn]: hasQuotes > 0,
                  })}
                  title="Work"
                  onClick={() =>
                    hasQuotes ? history.push('/app/projects/') : null
                  }
                >
                  work
                </Icon>
                <Icon
                  className={clsx({
                    [classes.countIcon]: true,
                    [classes.countIconOn]: hasInvites,
                  })}
                  title="Invites"
                  onClick={() =>
                    hasInvites ? history.push('/app/projects/invites') : null
                  }
                >
                  local_activity
                </Icon>
              </Row>
            </Column>
          ) : (
            <LoadIcon />
          );
        }}
      </Query>
    </Row>
  );
}
