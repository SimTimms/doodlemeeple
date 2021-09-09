import React from 'react';
import { Typography } from '@material-ui/core';
import { CreativeContext } from '../../../context';
import {
  DividerMini,
  Grid,
  MenuButtonStandard,
  Column,
} from '../../../components';
import SubmitBriefSingle from './submitBriefSingle';
import { Query } from 'react-apollo';
import { CHOSEN_CREATIVE } from './data';
import { ProfileCardMacro } from '../../profileCard';

export default function Tab7({ job, savedUserId, setTab }) {
  return (
    <CreativeContext.Provider>
      <Column w={300}>
        <Typography style={{ fontSize: '1.4rem' }}>Ready to Go?</Typography>
        <DividerMini />
        <Typography>
          You are about to send an invite to this creative, make sure you're
          happy with your job specification and click "Continue".
        </Typography>
        <DividerMini />
        <Query
          query={CHOSEN_CREATIVE}
          variables={{ userId: savedUserId }}
          fetchPolicy="network-only"
        >
          {({ data }) => {
            if (!data) return null;
            return (
              <Grid>
                <ProfileCardMacro creative={data.userById} />
              </Grid>
            );
          }}
        </Query>
        <DividerMini />

        <SubmitBriefSingle job={job} userId={savedUserId} />
        <Column w={180}>
          <DividerMini />
          <MenuButtonStandard
            title="Back"
            onClickEvent={() => setTab(1)}
            fullWidth={true}
          />
        </Column>
      </Column>
    </CreativeContext.Provider>
  );
}
