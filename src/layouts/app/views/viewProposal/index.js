import React from 'react';
import { Slide } from '@material-ui/core';
import {
  ContractSummaryForCreative,
  LoadIcon,
  Paper,
  IconButton,
  BorderBox,
  Meta,
} from '../../../../components';
import { UPDATE_CONTRACT } from '../../../../data/mutations';
import { Query, Mutation } from 'react-apollo';
import { GET_CONTRACT } from '../../../../data/queries';

export default function ViewProposal({ jobId, history }) {
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: 600 }}>
        <Query
          query={GET_CONTRACT}
          variables={{ jobId }}
          fetchPolicy="network-only"
        >
          {({ loading, data }) => {
            return !data ? (
              <LoadIcon />
            ) : (
              <Paper>
                <ContractSummaryForCreative contractData={data.contractByJob} />
                <BorderBox w="300px">
                  <Meta str="Retract this quote to cancel it or make ammendments" />
                  <Mutation
                    mutation={UPDATE_CONTRACT}
                    variables={{
                      _id: data.contractByJob._id,
                      status: '',
                    }}
                    onCompleted={(data) => {
                      history.push(`/app/view-job/${jobId}`);
                    }}
                  >
                    {(mutation) => {
                      return (
                        <IconButton
                          title="Retract Quote"
                          icon="edit"
                          styleOverride={{ width: '100%' }}
                          color="warning"
                          disabled={false}
                          onClickEvent={() => {
                            mutation();
                          }}
                          iconPos="right"
                          type="button"
                        />
                      );
                    }}
                  </Mutation>
                </BorderBox>
              </Paper>
            );
          }}
        </Query>
      </div>
    </Slide>
  );
}
