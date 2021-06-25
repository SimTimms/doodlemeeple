import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from '../styles';
import {
  Column,
  BorderBox,
  FullContractComponent,
} from '../../../../imports/sharedComponents';
import { Signature } from '../../../../components/contract';
//import { ChatViewByJob } from '../../../../chat';
import CreatorMenu from './creatorMenu';
import CreatorJobSummary from './creatorJobSummary';
import CloseJobView from '../components/closeJobView';
//import ProjectDash from '../../../../dashboards';

export default function SummaryViewCreator({ job, history }) {
  const classes = useStyles();
  const [conversationUser, setConversationUser] = React.useState(null);
  const [tabNbr, setTabNbr] = React.useState(-1);
  const [jobData, setJobData] = React.useState(null);
  const jobClosed = job.submitted === 'closed';

  useEffect(() => {
    setJobData({ ...job });
    setTabNbr(jobClosed ? 1 : -1);
  }, [job, jobClosed]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <CreatorMenu
          tabNbr={tabNbr}
          setTabNbr={setTabNbr}
          activeContract={job.activeContract}
          jobClosed={jobClosed}
          setConversationUser={setConversationUser}
        />
        {conversationUser ? (
          {
            /*<ChatViewByJob
            job={job}
            conversationUser={conversationUser}
            setConversationUser={setConversationUser}
            history={history}
          />*/
          }
        ) : tabNbr === -1 && jobData ? (
          <Column>
            {/* <ProjectDash
              invites={job.invites}
              setConversationUser={setConversationUser}
              jobClosed={job.submitted === 'closed'}
              history={history}
              job={job}
              setTabNbr={setTabNbr}
           />*/}
          </Column>
        ) : tabNbr === 1 ? (
          <CreatorJobSummary
            jobData={{ data: jobData, setData: setJobData }}
            setTabNbr={setTabNbr}
          />
        ) : tabNbr === 3 ? (
          <BorderBox w={700}>
            <FullContractComponent
              contractData={job.activeContract}
              job={job}
              history={history}
            />
            <Signature
              contractData={job.activeContract}
              onAccept={() => {
                setTabNbr(-1);
              }}
              onDecline={() => setTabNbr(-1)}
            />
          </BorderBox>
        ) : (
          tabNbr === 7 && (
            <Column>
              <CloseJobView jobId={job._id} history={history} />
            </Column>
          )
        )}
      </div>
    </Slide>
  );
}
