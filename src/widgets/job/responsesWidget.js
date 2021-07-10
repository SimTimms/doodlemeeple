import React from 'react';
import { Query } from 'react-apollo';
import { JOB_RESPONSES_WIDGET } from './data';
import { Typography } from '@material-ui/core';
import { Row, ResponseComponent } from '../../components';

export default function ResponsesWidget({ jobId, history }) {
  return (
    <Row wrap="wrap">
      <Query
        query={JOB_RESPONSES_WIDGET}
        variables={{ jobId }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          if (data) {
            if (data.jobResponsesWidget.length === 0) {
              return (
                <Typography style={{ fontStyle: 'italic' }}>
                  No Responses
                </Typography>
              );
            }
            return data.jobResponsesWidget.map((contract, index) => (
              <ResponseComponent
                contract={contract}
                key={`response_component_${index}`}
                history={history}
              />
            ));
          }
          return null;
        }}
      </Query>
    </Row>
  );
}
