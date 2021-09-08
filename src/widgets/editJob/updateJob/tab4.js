import React from 'react';
import {
  Column,
  FieldTitleDashboard,
  DeleteButton,
  CardComponent,
  NoticeBoardSecondary,
} from '../../../components';
import { Mutation } from 'react-apollo';
import { UPDATE_JOB, REMOVE_JOB } from '../data';
import { toaster } from '../../../utils/toaster';
import { Section3, Section6, Section7, Section8 } from '../components/pageOne';
import { unlock } from '../unlock';
import { HistoryContext, MenuContext } from '../../../context';

export default function Tab4({ job, setJob, locked, setTab }) {
  return (
    <Mutation
      mutation={UPDATE_JOB}
      variables={{
        ...job,
      }}
      onCompleted={(data) => {
        toaster('Autosave');
      }}
    >
      {(mutation) => {
        return (
          <HistoryContext.Consumer>
            {(history) => (
              <MenuContext.Consumer>
                {(menu) => (
                  <NoticeBoardSecondary
                    title=""
                    subTitle="Add more optional details"
                    onClickEvent={() =>
                      !job.isPublic
                        ? setTab(5)
                        : menu.updateMenuContext({
                            ...menu,
                            jobPage: {
                              ...menu.jobPage,
                              primaryPage: 'editing_job',
                              secondaryPage: 'job_dashboard',
                            },
                          })
                    }
                    buttonLocked={locked}
                    lockedMsg={unlock(job)}
                  >
                    <div style={{ padding: '10px 10px 0 10px' }}>
                      {
                        <Column w={600}>
                          <Section8
                            setJob={setJob}
                            job={job}
                            mutation={mutation}
                          />
                          <Section3
                            setJob={setJob}
                            job={job}
                            mutation={mutation}
                          />
                          <Section6
                            setJob={setJob}
                            job={job}
                            mutation={mutation}
                          />
                          <Section7
                            setJob={setJob}
                            job={job}
                            mutation={mutation}
                          />
                          {job.submitted && job.submitted === 'draft' && (
                            <CardComponent>
                              <Mutation
                                mutation={REMOVE_JOB}
                                variables={{
                                  id: job._id,
                                }}
                                onCompleted={(data) => {
                                  toaster('Deleted');
                                  history.replace(`/app/jobs`);
                                }}
                              >
                                {(mutation) => {
                                  return (
                                    <FieldTitleDashboard
                                      name="Delete Project"
                                      inline={false}
                                      a="l"
                                      menu={
                                        job._id !== 'new' ? (
                                          <DeleteButton
                                            mutation={mutation}
                                            str=""
                                          />
                                        ) : null
                                      }
                                    />
                                  );
                                }}
                              </Mutation>
                            </CardComponent>
                          )}
                        </Column>
                      }
                    </div>
                  </NoticeBoardSecondary>
                )}
              </MenuContext.Consumer>
            )}
          </HistoryContext.Consumer>
        );
      }}
    </Mutation>
  );
}
