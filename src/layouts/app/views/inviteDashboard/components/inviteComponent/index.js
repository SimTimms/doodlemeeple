import React from 'react';
import { IconButton, FeatureCardInvite } from '../../../../../../components';
import { Mutation } from 'react-apollo';
import { DECLINE_INVITE } from '../../../../../../data/mutations';

export function InviteComponent({ invite, removeInvite, history }) {
  return (
    invite.sender && (
      <FeatureCardInvite
        thumbnail={invite.sender.profileImg}
        job={invite.job.name}
        author={invite.sender.name}
        authorId={invite.sender._id}
        history={history}
        buttonOne={
          <Mutation
            mutation={DECLINE_INVITE}
            variables={{
              _id: invite._id,
            }}
          >
            {(mutation) => {
              return (
                <IconButton
                  color="text-dark"
                  disabled={false}
                  onClickEvent={() => {
                    mutation();
                    removeInvite(invite._id);
                  }}
                  icon="close"
                  iconPos="left"
                  title="Decline"
                  styleOverride={null}
                  type="button"
                />
              );
            }}
          </Mutation>
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
    )
  );
}
