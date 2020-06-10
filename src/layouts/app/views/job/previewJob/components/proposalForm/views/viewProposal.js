import React, { useEffect } from 'react';
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
import { EditButton } from './components';

export default function ViewProposal({ jobId, contractData }) {
  const classes = useStyles();
  const [contract, setContract] = React.useState({
    id: '',
    notes: '',
    deadline: '',
    cost: '',
    paymentTerms: [],
    currency: 'GBP',
    status: '',
  });

  useEffect(() => {
    console.log(contractData);
    setContract({
      id: contractData.id,
      paymentTerms: contractData.paymentTerms,
      notes: contractData.notes,
      deadline: contractData.deadline,
      cost: contractData.cost ? contractData.cost : '0',
      currency: contractData.currency,
      status: contractData.status,
    });
  }, [contractData]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        {contract.id}
        {contract.notes}
        {contract.deadline}
        {contract.cost}
        {contract.paymentTerms.map((term) => {
          return `${term.percent}% upon ${term.description}`;
        })}
        <EditButton contract={contract} jobId={jobId} />
      </div>
    </Slide>
  );
}
