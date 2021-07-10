import React from 'react';
import { Slide } from '@material-ui/core';
import SummaryViewCreative from './components/summaryViewCreative';
import { Query } from 'react-apollo';
import { JOB_CREATIVE } from '../../../../../data/queries';
import Cookies from 'js-cookie';

export default function AppViewQuoteJob({ jobId, history }) {
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: '100%' }}>
        <Query
          query={JOB_CREATIVE}
          variables={{ jobId: jobId }}
          fetchPolicy="network-only"
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
