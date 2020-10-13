import React from 'react';
import {
  Column,
  FieldTitleDashboard,
  Paper,
  DividerWithBorder,
} from '../../../../../../../components';
import {
  ItemPosted,
  ItemInvites,
  ItemCreativePaid,
  ItemLeaveReview,
  ItemQuoteAccepted,
  ItemQuotePaid,
} from './CheckListItems';

export default function CheckListDash({ job, setTabNbr }) {
  const { paymentTerms, cost, currency } = job.activeContract
    ? job.activeContract
    : { paymentTerms: [], cost: 0, currency: 'GBP' };

  const paidOutArr = paymentTerms.filter((term) => term.paid === 'success');
  let totalPaid = 0;
  for (let i = 0; i < paidOutArr.length; i++) {
    totalPaid += paidOutArr[i].percent;
  }

  const color = [
    1,
    1,
    job.accepted !== 'accepted' && job.accepted !== 'paid' && 2,
    job.submitted !== 'paid' && 2,
    totalPaid < parseInt(cost) ? 2 : 0,
    0,
  ];

  return (
    <Column w="50%" p={10}>
      <FieldTitleDashboard name="Checklist" inline={false} />
      <Paper p={10}>
        <Column>
          <ItemPosted setTabNbr={setTabNbr} color={color[0]} />
          <DividerWithBorder />
          <ItemInvites setTabNbr={setTabNbr} color={color[1]} />
          <DividerWithBorder />
          <ItemQuoteAccepted
            accepted={job.submitted}
            contracts={job.contracts}
            setTabNbr={setTabNbr}
            color={color[2]}
          />
          <DividerWithBorder />
          <ItemQuotePaid
            paid={job.submitted}
            setTabNbr={setTabNbr}
            color={color[2] === 1 ? color[3] : 0}
          />
          <DividerWithBorder />
          <ItemCreativePaid
            totalPaid={totalPaid}
            cost={cost}
            currency={currency}
            setTabNbr={setTabNbr}
            color={color[3] === 1 ? color[4] : 0}
          />
          <DividerWithBorder />
          <ItemLeaveReview
            paid={false}
            setTabNbr={setTabNbr}
            color={color[4] === 1 ? color[5] : 0}
          />
        </Column>
      </Paper>
    </Column>
  );
}
