import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import {
  ColumnWrapper,
  ContractSummary,
  EditContractButton,
  ActionWrapper,
  LoadIcon,
  IconButton,
} from '../../../../../components';
import { GET_CONTRACT_ID } from '../../../../../data/queries';
import { Query } from 'react-apollo';

export default function EditContract({ contractId, history }) {
  const classes = useStyles();
  const [contract, setContract] = React.useState({
    id: '',
    notes: '',
    deadline: '',
    cost: '',
    paymentTerms: [],
    currency: 'GBP',
    status: 'loading',
    job: { id: '', user: { id: '', email: '' } },
  });
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.rootRow}>
        <div className={classes.root}>
          <ColumnWrapper>
            <div style={{ width: '100%' }}>
              <Query
                query={GET_CONTRACT_ID}
                variables={{ contractId: contractId }}
                fetchPolicy="network-only"
                onCompleted={(data) => {
                  data.getContractId.length > 0
                    ? setContract({ ...data.getContractId[0] })
                    : setContract({ ...contract, status: '' });
                }}
              >
                {({ loading, data }) => {
                  return loading ? (
                    <LoadIcon />
                  ) : (
                    data && (
                      <div>
                        <ContractSummary contractData={contract} />
                        <ActionWrapper>
                          {contract.status === 'submitted' && (
                            <EditContractButton
                              contract={contract}
                              jobId={contract.job.id}
                              setContract={setContract}
                              title="Retract Quote"
                            />
                          )}
                          <IconButton
                            title="View Job"
                            color="primary"
                            onClickEvent={() => {
                              history.push(`/app/view-job/${contract.job.id}`);
                            }}
                            disabled={false}
                            iconPos="right"
                            type="button"
                            styleOverride={null}
                            icon="chevron_right"
                          />
                        </ActionWrapper>
                      </div>
                    )
                  );
                }}
              </Query>
            </div>
          </ColumnWrapper>
        </div>
      </div>
    </Slide>
  );
}
