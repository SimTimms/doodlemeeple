import React from 'react';
import { Typography } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import { SUBMIT_BRIEF_SINGLE } from './data';
import { MenuButtonStandard, Column, DividerMini } from '../../../components';
import { MenuContext } from '../../../context';

export default function SubmitBriefSingle({ job, userId }) {
  return (
    <MenuContext.Consumer>
      {(menu) => (
        <Mutation
          mutation={SUBMIT_BRIEF_SINGLE}
          variables={{
            jobId: job._id,
            userId,
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
                    You will be unable to send invites to any other creatives
                    after this stage.
                  </Typography>

                  <MenuButtonStandard
                    onClickEvent={() => {
                      mutation();
                    }}
                    title="Submit"
                    fullWidth={true}
                  />
                  <DividerMini />
                </Column>
              </div>
            );
          }}
        </Mutation>
      )}
    </MenuContext.Consumer>
  );
}
