import React from 'react';
import { Typography } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import { SUBMIT_BRIEF } from '../../../../../data/mutations';
import {
  MenuButtonStandard,
  Column,
  Divider,
  DividerMini,
} from '../../../../../components';
import { MenuContext } from '../../../../../context';

export default function SubmitBrief({ job, inviteList }) {
  const [page, setPage] = React.useState(0);

  return page === 0 ? (
    <Column j="center" a="center">
      <MenuButtonStandard
        onClickEvent={() => {
          setPage(1);
        }}
        disabled={inviteList.length > 0 ? false : true}
        title="Continue"
      />
      <Divider />
    </Column>
  ) : (
    <MenuContext.Consumer>
      {(menu) => (
        <Mutation
          mutation={SUBMIT_BRIEF}
          variables={{
            jobId: job._id,
          }}
          onCompleted={() => {
            menu.updateMenuContext({
              ...menu,
              jobPage: {
                ...menu.jobPage,
                primaryPage: 'job_posts',
                secondaryPage: 'job_ads_secondary',
                jobId: null,
              },
            });
          }}
        >
          {(mutation) => {
            return (
              <div
                style={{
                  width: '100%',
                  maxWidth: 500,
                  background: '#fff',
                  padding: 20,
                  marginBottom: 20,
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
                    You will be unable to modify this project or send invites to
                    any other creatives after this stage.
                  </Typography>

                  <MenuButtonStandard
                    onClickEvent={() => {
                      mutation();
                    }}
                    disabled={inviteList.length > 0 ? false : true}
                    title="Submit"
                  />
                  <DividerMini />
                  <MenuButtonStandard
                    onClickEvent={() => {
                      setPage(0);
                    }}
                    disabled={inviteList.length > 0 ? false : true}
                    title="Cancel"
                    type="delete"
                  />
                </Column>
              </div>
            );
          }}
        </Mutation>
      )}
    </MenuContext.Consumer>
  );
}
