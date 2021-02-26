import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { initialState } from './initialState';
import {
  NoticeBoardSecondary,
  Column,
  CardComponent,
  LoadIcon,
} from '../../../components';
import { UPDATE_CONTRACT } from '../../../data/mutations';
import { StartDate, Cost } from './components';
import { useMutation } from 'react-apollo';
import charsRemaining from '../../../utils/charsRemaining';
import { TITLES, SUB_TITLES } from './constants';

export default function EditQuote({ jobId, history, contractData }) {
  const classes = useStyles();
  const [field, setField] = React.useState(0);
  const [contract, setContract] = React.useState(null);
  const fieldArray = ['startDate', 'cost', 'notes'];
  const [updateContract] = useMutation(UPDATE_CONTRACT);
  useEffect(() => {
    contractData.startDate = !contractData.startDate
      ? ''
      : contractData.startDate;
    setContract({ ...contractData });
  }, [contractData]);

  return !contract ? (
    <LoadIcon />
  ) : (
    <NoticeBoardSecondary
      className={classes.root}
      title={TITLES[fieldArray[field]]}
      subTitle={SUB_TITLES[fieldArray[field]]}
      onClickEvent={() => {
        updateContract({
          variables: {
            ...contract,
          },
        });
        setField(field + 1);
      }}
      backEvent={field > 0 ? () => setField((field += -1)) : null}
      buttonLocked={
        charsRemaining(contract[fieldArray[field]], fieldArray[field]) > 0
      }
      lockedMsg={`Add ${charsRemaining(
        contract[fieldArray[field]],
        fieldArray[field]
      )} more character${
        charsRemaining(contract[fieldArray[field]], fieldArray[field]) === 1
          ? ''
          : 's'
      }`}
    >
      <Column w={300}>
        <CardComponent locked={false}>
          {fieldArray[field] === 'startDate' && (
            <StartDate contract={contract} setContract={setContract} />
          )}
          {fieldArray[field] === 'cost' && (
            <Cost contract={contract} setContract={setContract} />
          )}
        </CardComponent>
      </Column>
    </NoticeBoardSecondary>
  );
}
