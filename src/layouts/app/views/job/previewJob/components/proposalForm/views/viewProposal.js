import React from 'react';
import { Slide, TextField, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  ContentHeader,
  FieldTitle,
  FieldTitleWrapper,
  CurrencySelector,
  Divider,
  IconButton,
  LoadIcon,
} from '../../../../../../../../components';
import { Query, Mutation } from 'react-apollo';
import { GET_CONTRACT } from '../../../../../../../../data/queries';
import { UPDATE_CONTRACT } from '../../../../../../../../data/mutations';

export default function ViewProposal({ jobId }) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);
  const [contract, setContract] = React.useState({
    id: 'new',
    notes: '',
    deadline: '',
    cost: '',
    paymentTerms: [],
    currency: 'GBP',
    status: '',
  });

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        {loading ? (
          <LoadIcon />
        ) : (
          <Mutation
            mutation={contract.id === 'new' ? CREATE_CONTRACT : UPDATE_CONTRACT}
            variables={{
              id: contract.id,
              contract: {
                notes: contract.notes,
                deadline: contract.deadline,
                currency: contract.currency,
                cost: parseInt(contract.cost),
                jobId,
              },
            }}
            onCompleted={(data) => {
              toaster('Saved');
              setDetailsLock(false);
              const updatedId =
                contract.id === 'new'
                  ? data.createContract
                  : data.updateContract;
              setContract({ ...contract, id: updatedId });
            }}
          >
            {(mutation) => {
              return (
                <IconButton
                  title="Edit Proposal"
                  icon="edit"
                  styleOverride={null}
                  color="warning"
                  disabled={false}
                  onClickEvent={() => {}}
                />
              );
            }}
          </Mutation>
        )}
        <Query
          query={GET_CONTRACT}
          variables={{ jobId }}
          onCompleted={(data) => {
            if (data.getContract.length > 0) {
              const contract = data.getContract[0];
              setLoading(false);
              setContract({
                id: contract.id,
                paymentTerms: contract.paymentTerms,
                notes: contract.notes,
                deadline: contract.deadline,
                cost: contract.cost ? contract.cost : 0,
                currency: contract.currency,
                status: contract.status,
              });
            }
          }}
          fetchPolicy="network-only"
        >
          {({ data }) => {
            return null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
