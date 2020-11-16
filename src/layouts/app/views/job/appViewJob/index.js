import React from 'react';
import { Slide } from '@material-ui/core';
import SummaryViewCreator from './components/summaryViewCreator';
import SummaryViewCreative from './components/summaryViewCreative';
import { Query } from 'react-apollo';
import { JOB, JOB_CREATIVE } from '../../../../../data/queries';
import Cookies from 'js-cookie';

export default function AppViewJob({ jobId, history }) {
  const [isCreator, setIsCreator] = React.useState(null);
  const [refreshCount, setRefreshCount] = React.useState(0);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: '100%' }}>
        {isCreator && (
          <Query
            query={JOB}
            variables={{ jobId: jobId, refreshCount: refreshCount }}
            fetchPolicy="network-only"
          >
            {({ data }) => {
              return data ? (
                <SummaryViewCreator
                  job={data.jobById}
                  history={history}
                  refreshCount={refreshCount}
                  setRefreshCount={setRefreshCount}
                />
              ) : null;
            }}
          </Query>
        )}

        <Query
          query={JOB_CREATIVE}
          variables={{ jobId: jobId }}
          fetchPolicy="network-only"
          onCompleted={(data) =>
            setIsCreator(
              Cookies.get('userId') === data.jobChecklist.creator._id
            )
          }
        >
          {({ data }) => {
            return data &&
              Cookies.get('userId') !== data.jobChecklist.creator._id ? (
              <SummaryViewCreative job={data.jobChecklist} history={history} />
            ) : null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
