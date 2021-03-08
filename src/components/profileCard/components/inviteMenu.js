import React from 'react';
import { InviteButton } from './';
import Cookies from 'js-cookie';
import { IconButton } from '../../';

export default function InviteMenu({ history, creative, favourite, ...props }) {
  const { jobId, invite, updateInviteList, removeInviteList, disabled } = props;

  {
    return updateInviteList && Cookies.get('userId') !== creative._id ? (
      <InviteButton
        history={history}
        creative={creative}
        favourite={favourite}
        jobId={jobId}
        invite={invite}
        updateInviteList={updateInviteList}
        removeInviteList={removeInviteList}
        disabled={disabled}
      />
    ) : (
      <IconButton
        title="Hire"
        color="text-dark"
        icon=""
        iconPos="right"
        styleOverride={{
          paddingTop: 3,
          paddingBottom: 3,
          paddingLeft: 5,
          paddingRight: 5,
        }}
        onClickEvent={() => history.push(`/app/edit-job/new/${creative._id}`)}
      />
    );
  }
}
