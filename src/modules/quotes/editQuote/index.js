import React, { useEffect } from 'react';
import { useStyles } from './styles';
import {
  NoticeBoardSecondary,
  Column,
  CardComponent,
  LoadIcon,
  MenuButtonStandard,
} from '../../../components';
import { UPDATE_CONTRACT, SUBMIT_CONTRACT } from '../../../data/mutations';
import { StartDate, Cost, Notes, QuoteSummary, EndDate } from './components';
import { useMutation } from 'react-apollo';
import charsRemaining from '../../../utils/charsRemaining';
import replaceNulls from '../../../utils/replaceNulls';
import { TITLES, SUB_TITLES } from './constants';
import { MenuContext } from '../../../context';
import MiniDash from './miniDash';

export default function EditQuote({ contractData }) {
  const classes = useStyles();
  const [field, setField] = React.useState(0);
  const [contract, setContract] = React.useState(null);
  const fieldArray = [
    'miniDash',
    'startDate',
    'deadline',
    'cost',
    'notes',
    'summary',
    'submitted',
  ];
  const [updateContract] = useMutation(UPDATE_CONTRACT);
  const [submitContract] = useMutation(SUBMIT_CONTRACT);
  useEffect(() => {
    contractData.startDate = replaceNulls(contractData.startDate);
    contractData.notes = replaceNulls(contractData.notes);
    setContract({ ...contractData });
  }, [contractData]);

  function backField() {
    setField(field - 1);
  }
  return !contract ? (
    <LoadIcon />
  ) : (
    <NoticeBoardSecondary
      className={classes.root}
      title={TITLES[fieldArray[field]]}
      subTitle={SUB_TITLES[fieldArray[field]]}
      onClickEvent={
        field == 0
          ? null
          : field < fieldArray.length - 1
          ? () => {
              fieldArray[field] !== 'summary'
                ? updateContract({
                    variables: {
                      ...contract,
                    },
                  })
                : submitContract({
                    variables: {
                      _id: contractData._id,
                    },
                  });

              field < fieldArray.length - 1 && setField(field + 1);
            }
          : null
      }
      backEvent={field > 0 ? () => backField() : null}
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
      <Column w={400}>
        {fieldArray[field] === 'miniDash' && (
          <MiniDash contract={contract} setField={setField} />
        )}
        <CardComponent locked={false}>
          <Column>
            {fieldArray[field] === 'startDate' && (
              <StartDate contract={contract} setContract={setContract} />
            )}
            {fieldArray[field] === 'deadline' && (
              <EndDate contract={contract} setContract={setContract} />
            )}
            {fieldArray[field] === 'cost' && (
              <Cost contract={contract} setContract={setContract} />
            )}
            {fieldArray[field] === 'notes' && (
              <Notes contract={contract} setContract={setContract} />
            )}
            {fieldArray[field] === 'summary' && (
              <QuoteSummary contract={contract} setContract={setContract} />
            )}
            {fieldArray[field] === 'submitted' && (
              <MenuContext.Consumer>
                {(menu) => (
                  <Column>
                    <MenuButtonStandard
                      title="Quote Dashboard"
                      onClickEvent={() =>
                        menu.updateMenuContext({
                          ...menu,
                          workPage: {
                            ...menu.workPage,
                            secondaryPage: 'quote_list',
                            contractId: null,
                          },
                        })
                      }
                    />
                  </Column>
                )}
              </MenuContext.Consumer>
            )}
          </Column>
        </CardComponent>
      </Column>
    </NoticeBoardSecondary>
  );
}
