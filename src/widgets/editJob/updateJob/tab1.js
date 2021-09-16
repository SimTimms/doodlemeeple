import React from 'react';
import { NoticeBoardSecondary } from '../../../components';
import { Mutation } from 'react-apollo';
import { UPDATE_JOB } from '../data';
import { toaster } from '../../../utils/toaster';
import { SectionQuestions } from '../components/pageOne';

export default function Tab1({ job, setJob, setTab }) {
  return (
    <Mutation
      mutation={UPDATE_JOB}
      variables={{
        ...job,
      }}
      onCompleted={(data) => {
        toaster('Saved...');
        setTab(2);
      }}
    >
      {(mutation) => {
        return (
          <NoticeBoardSecondary
            title=""
            subTitle="Have you read the Terms of Service"
            onClickEvent={() => mutation()}
            buttonLocked={!job.termsAccepted}
            lockedMsg="You must read and accept the terms of service"
          >
            <SectionQuestions setJob={setJob} job={job} />
          </NoticeBoardSecondary>
        );
      }}
    </Mutation>
  );
}
