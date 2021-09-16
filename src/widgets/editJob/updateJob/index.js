import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from '../styles';
import { Column } from '../../../components';
import { Query } from 'react-apollo';
import { JOB } from '../data';
import { checkLength } from '../unlock';
import { HistoryContext, ParamsContext } from '../../../context';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Tab4 from './tab4';
import Tab5 from './tab5';
import Tab7 from './tab7';

export default function UpdateJob({ jobId }) {
  const classes = useStyles();
  const [job, setJob] = React.useState(null);
  const [tab, setTab] = React.useState(1);
  const [locked, setLocked] = React.useState(false);
  function setJobAndCheck(job) {
    setLocked(
      !checkLength(job.name, 'name') ||
        !checkLength(job.genre, 'genre') ||
        !checkLength(job.summary, 'summary') ||
        !checkLength(job.creativeSummary, 'creativeSummary') ||
        job.keywords.length === 0
    );
    setJob({
      ...job,
    });
  }
  if (!job && jobId !== 'new')
    return (
      <ParamsContext.Consumer>
        {(params) => (
          <Query
            query={JOB}
            variables={{ jobId: jobId }}
            fetchPolicy="network-only"
            onCompleted={(data) => {
              data.jobById &&
                setJob({
                  ...data.jobById,
                  gallery: data.jobById.gallery._id,
                  keywords: params.savedUserId
                    ? ['saved']
                    : data.jobById.keywords,
                });
              setLocked(
                !checkLength(data.jobById.name, 'name') ||
                  !checkLength(data.jobById.genre, 'genre') ||
                  !checkLength(data.jobById.summary, 'summary') ||
                  !checkLength(
                    data.jobById.creativeSummary,
                    'creativeSummary'
                  ) ||
                  data.jobById.keywords.length === 0
              );
            }}
          >
            {({ data }) => {
              return null;
            }}
          </Query>
        )}
      </ParamsContext.Consumer>
    );
  return (
    <ParamsContext.Consumer>
      {(params) => (
        <HistoryContext.Consumer>
          {(history) => (
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
              <div className={classes.root}>
                <Column j="center">
                  {tab === 1 ? (
                    <Tab1 job={job} setJob={setJob} setTab={setTab} />
                  ) : tab === 2 ? (
                    <Tab2
                      history={history}
                      job={job}
                      setJob={setJobAndCheck}
                      setTab={setTab}
                      locked={locked}
                      savedUserId={params.savedUserId}
                    />
                  ) : tab === 3 ? (
                    <Tab3
                      job={job}
                      setJob={setJobAndCheck}
                      locked={locked}
                      setTab={setTab}
                    />
                  ) : tab === 4 ? (
                    <Tab4
                      job={job}
                      setJob={setJobAndCheck}
                      locked={locked}
                      setTab={setTab}
                      savedUserId={params.savedUserId}
                    />
                  ) : tab === 5 ? (
                    <Tab5
                      job={job}
                      setJob={setJobAndCheck}
                      locked={locked}
                      setTab={setTab}
                    />
                  ) : (
                    tab === 7 && (
                      <Tab7
                        job={job}
                        setJob={setJobAndCheck}
                        locked={locked}
                        setTab={setTab}
                        savedUserId={params.savedUserId}
                      />
                    )
                  )}
                </Column>
              </div>
            </Slide>
          )}
        </HistoryContext.Consumer>
      )}
    </ParamsContext.Consumer>
  );
}
