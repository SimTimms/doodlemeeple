import React from 'react';
import { Typography, Card, Link } from '@material-ui/core';
import { useStyles } from './styles';
import {
  InlineHeader,
  DeclineInvite,
  IconTitle,
  IconButton,
  FeatureCardInvite,
} from '../../../../../../components';

export function InviteComponent({ invite, removeInvite, history }) {
  const classes = useStyles();

  return (
    <FeatureCardInvite
      background={invite.game.backgroundImg}
      thumbnail={invite.user.profileImg}
      job={invite.job.name}
      summary={invite.job.summary}
      game="game"
      gameId={invite.game.id}
      author={invite.user.name}
      authorId={invite.user.id}
      history={history}
      buttonOne={
        <IconButton
          color="text-dark"
          disabled={false}
          onClickEvent={() => {
            history.push(`/app/view-game/${invite.game.id}`);
          }}
          icon="close"
          iconPos="left"
          title="Decline"
          styleOverride={null}
          type="button"
        />
      }
      buttonTwo={
        <IconButton
          color="text-dark"
          disabled={false}
          onClickEvent={() => history.push(`/app/view-job/${invite.job.id}`)}
          icon="chevron_right"
          title="Details"
          iconPos="right"
          styleOverride={null}
          type="button"
        />
      }
    />
  );
}
