import React from 'react';
import { Typography } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { SUBMIT_BRIEF } from '../../data';
import { IconButton, Column } from '../../../imports/sharedComponents';

export default function SubmitBrief({ job, history, inviteList }) {
  const [page, setPage] = React.useState(0);

  const [mutation] = useMutation(
    SUBMIT_BRIEF,
    {
      variables: {
        jobId: job._id,
      },
    },
    {
      onCompleted({ messageCreateOne }) {
        history.push('/app/submitted');
      },
    }
  );

  return page === 0 ? (
    <Column j="center" a="center">
      <IconButton
        onClickEvent={() => {
          setPage(1);
        }}
        disabled={inviteList.length > 0 ? false : true}
        icon="chevron_right"
        title="Continue"
        iconPos="right"
        styleOverride={null}
        type="button"
        color="primary"
      />
    </Column>
  ) : (
    <div
      style={{
        width: '100%',
        maxWidth: 500,
        background: '#fff',
        padding: 20,
      }}
    >
      <Column j="center" a="center">
        <Typography variant="h5">Submit & Send Invites?</Typography>
        <Typography
          variant="body1"
          style={{
            textAlign: 'center',
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          You will be unable to modify this project or send invites to any other
          creatives after this stage.
        </Typography>

        <IconButton
          onClickEvent={() => {
            mutation();
          }}
          disabled={inviteList.length > 0 ? false : true}
          icon="chevron_right"
          title="Submit"
          iconPos="right"
          styleOverride={null}
          type="button"
          color="warning"
        />
        <IconButton
          onClickEvent={() => {
            setPage(0);
          }}
          disabled={inviteList.length > 0 ? false : true}
          icon=""
          title="Cancel"
          iconPos="right"
          styleOverride={null}
          type="button"
          color="text-mini"
        />
      </Column>
    </div>
  );
}
