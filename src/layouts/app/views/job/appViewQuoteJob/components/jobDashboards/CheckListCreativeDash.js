import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  Widget,
  Divider,
  CreatorComponentDash,
  ProjectComponentDash,
} from '../../../../../../../components';
import TaskGenerator from './taskGenerator';
import { Query } from 'react-apollo';
import { JOB_CONTRACT } from '../../../../../../../data/queries';

export default function CheckListCreativeDash({
  declined,
  setTabNbr,
  setConversationUser,
  job,
  history,
  activeContract,
  contractData,
}) {
  const draft = contractData && contractData.status === 'draft' ? true : false;
  const closed = job.job.submitted === 'closed';
  const quotedSubmitted =
    contractData && contractData.status === 'submitted' ? true : false;
  const noQuote = !contractData ? true : false;

  return (
    <Query
      query={JOB_CONTRACT}
      variables={{ jobId: job.job._id }}
      fetchPolicy="network-only"
      onCompleted={(data) => null}
    >
      {({ data }) => {
        return data ? (
          data.jobContract ? (
            <Column w={400} p={10}>
              <Widget p={10}>
                <ProjectComponentDash
                  jobName={job.job.name}
                  jobSummary={job.job.summary}
                  setTabNbr={setTabNbr}
                />
              </Widget>
              {data.jobContract.status !== 'declined' && (
                <Widget p={10}>
                  <CreatorComponentDash
                    user={job.creator}
                    setConversationUser={setConversationUser}
                    declined={declined}
                    history={history}
                    closed={closed}
                    accepted={activeContract}
                  />
                </Widget>
              )}
              {data.jobContract.status !== 'declined' && (
                <Widget p={10}>
                  <Column>
                    <Typography variant="body1">Tasks</Typography>
                    <Typography variant="body1" style={{ fontSize: 12 }}>
                      Complete these to keep your contract moving
                    </Typography>
                    <Divider />
                    <TaskGenerator
                      history={history}
                      job={job}
                      draft={draft}
                      contractData={contractData}
                      quoted={quotedSubmitted}
                      noQuote={noQuote}
                      setTabNbr={setTabNbr}
                    />
                  </Column>
                </Widget>
              )}
              {data.jobContract.status === 'declined' && (
                <Typography>
                  Sorry, your Quote was rejected by the Creator
                </Typography>
              )}
            </Column>
          ) : null
        ) : null;
      }}
    </Query>
  );
}
