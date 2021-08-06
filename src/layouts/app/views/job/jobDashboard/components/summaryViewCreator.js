import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from '../styles';
import {
  Column,
  BorderBox,
  FullContractComponent,
  Signature,
  IconButton,
  LoadIcon,
} from '../../../../../../components';
import { ChatViewByJob } from '../../../../../../modules/chat';
import CreatorMenu from './creatorMenu';
import CreatorJobSummary from './creatorJobSummary';
import CloseJobView from '../components/closeJobView';
import CloseJobButton from './closeJobButton';

import ProjectDash from '../../../../../../modules/dashboards';
import { CLOSE_JOB, OPEN_JOB } from './data';
import { Mutation } from 'react-apollo';

export default function SummaryViewCreator({
  job,
  history,
  page,
  pageValues,
  setPageValues,
}) {
  const classes = useStyles();
  const [conversationUser, setConversationUser] = React.useState(null);
  const [tabNbr, setTabNbr] = React.useState(-1);
  const [jobData, setJobData] = React.useState(null);
  const jobClosed = job.submitted === 'closed';

  useEffect(() => {
    setJobData({ ...job });
    setTabNbr(jobClosed ? 1 : -1);
  }, [job, jobClosed]);
  if (!jobData) return <LoadIcon />;
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        {conversationUser ? (
          <ChatViewByJob
            job={jobData}
            conversationUser={conversationUser}
            setConversationUser={setConversationUser}
            history={history}
          />
        ) : page === 'job_dashboard' ? (
          <Column>
            <ProjectDash
              invites={jobData.invites}
              setConversationUser={setConversationUser}
              jobClosed={jobData.submitted === 'closed'}
              history={history}
              job={jobData}
              setTabNbr={setTabNbr}
            />
            {jobData.submitted === 'closed' ? (
              <Mutation
                mutation={OPEN_JOB}
                variables={{ jobId: jobData._id }}
                onCompleted={(data) => {
                  setJobData({ ...jobData, submitted: 'draft' });
                  history.push('/app/projects');
                }}
              >
                {(mutation) => {
                  return (
                    <IconButton
                      title="Reopen Job"
                      icon="check"
                      onClickEvent={() => mutation()}
                    />
                  );
                }}
              </Mutation>
            ) : (
              <CloseJobButton
                job={job}
                setPageValues={setPageValues}
                pageValues={pageValues}
              />
            )}
          </Column>
        ) : page === 'job_details' ? (
          <CreatorJobSummary
            jobData={{ data: jobData, setData: setJobData }}
            setTabNbr={setTabNbr}
          />
        ) : tabNbr === 3 ? (
          <BorderBox w={700}>
            <FullContractComponent
              contractData={jobData.activeContract}
              job={jobData}
              history={history}
            />
            <Signature
              contractData={jobData.activeContract}
              onAccept={() => {
                setTabNbr(-1);
              }}
              onDecline={() => setTabNbr(-1)}
            />
          </BorderBox>
        ) : (
          tabNbr === 7 && (
            <Column>
              <CloseJobView jobId={jobData._id} history={history} />
            </Column>
          )
        )}
      </div>
    </Slide>
  );
}
