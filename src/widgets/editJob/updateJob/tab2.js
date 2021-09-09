import React from 'react';
import { Column, NoticeBoardSecondary } from '../../../components';
import { Mutation } from 'react-apollo';
import { UPDATE_JOB } from '../data';
import { toaster } from '../../../utils/toaster';
import { Section1, Section5 } from '../components/pageOne';
import { unlock } from '../unlock';
import { ParamsContext } from '../../../context';

export default function Tab2({ job, setJob, setTab, locked, savedUserId }) {
  return (
    <Mutation
      mutation={UPDATE_JOB}
      variables={{
        ...job,
      }}
      onCompleted={() => {
        toaster('Saved');
      }}
    >
      {(mutation) => {
        return (
          <NoticeBoardSecondary
            title=""
            subTitle="Add details to unlock more options"
            onClickEvent={() => setTab(savedUserId ? 4 : 3)}
            buttonLocked={locked}
            lockedMsg={unlock(job)}
          >
            <div style={{ padding: '10px 10px 0 10px' }}>
              {
                <Column w={600}>
                  <Section1 setJob={setJob} job={job} mutation={mutation} />
                  <ParamsContext.Consumer>
                    {(params) =>
                      !params.savedUserId && (
                        <Section5
                          setJob={setJob}
                          job={job}
                          mutation={mutation}
                        />
                      )
                    }
                  </ParamsContext.Consumer>
                </Column>
              }
            </div>
          </NoticeBoardSecondary>
        );
      }}
    </Mutation>
  );
}
