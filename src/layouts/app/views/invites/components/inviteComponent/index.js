import React from 'react';
import { IconButton, FeatureCardInvite } from '../../../../../../components';

export function InviteComponent({ invite, removeInvite, history }) {
  return (
    <FeatureCardInvite
      thumbnail={invite.user.profileImg}
      job={invite.job.name}
      summary={invite.job.summary}
      author={invite.user.name}
      authorId={invite.user._id}
      history={history}
      buttonOne={
        <IconButton
          color="text-dark"
          disabled={false}
          onClickEvent={() => {
            removeInvite();
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
          onClickEvent={() => history.push(`/app/view-job/${invite.job._id}`)}
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
