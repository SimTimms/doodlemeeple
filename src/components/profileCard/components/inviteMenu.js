import React from 'react';
import { InviteButton } from './';
import Cookies from 'js-cookie';
import { IconButton } from '../../';

export default function InviteMenu({ history, creative, favourite, ...props }) {
  const userId = Cookies.get('userId');
  const { jobId, invite, updateInviteList, removeInviteList, disabled } = props;
  {
    return userId === creative._id ? (
      <IconButton
        title="PROFILE"
        color="primary"
        icon=""
        iconPos="right"
        onClickEvent={() => history.push(`/app/public-preview/${creative._id}`)}
        styleOverride={{
          width: '100%',
          borderRadius: 0,
          margin: 0,
          justifyContent: 'center',
          backgroundColor: '#cfcfe1',
        }}
      />
    ) : updateInviteList && Cookies.get('userId') !== creative._id ? (
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
        title="HIRE"
        color="secondary"
        icon=""
        iconPos="right"
        onClickEvent={() => history.push(`/app/edit-job/new/${creative._id}`)}
        styleOverride={{
          width: '100%',
          borderRadius: 0,
          margin: 0,
          justifyContent: 'center',
          backgroundColor: '#cfcfe1',
        }}
      />
    );
  }
}
