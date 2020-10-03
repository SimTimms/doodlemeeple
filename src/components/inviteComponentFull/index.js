import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  MenuButtonShortcut,
  Column,
  Row,
  ContractSummaryForCreative,
} from '../';
import clsx from 'clsx';
import { PREVIEW_CONTRACT } from '../../data/queries';
import { Query } from 'react-apollo';

export default function InviteComponentFull({
  invite,
  setConversationUser,
  contract,
}) {
  const classes = useStyles();
  const [display, setDisplay] = React.useState(false);

  return (
    <div style={{ width: '100%' }}>
      <Row j="space-between" a="center">
        <Row a="center" j="flex-start">
          <div
            style={{
              backgroundImage: `url(${invite.receiver.profileImg})`,
            }}
            className={classes.profileThumb}
          ></div>
          <Column a="flex-start">
            <Typography style={{ fontSize: 12 }}>
              {invite.receiver.name}
            </Typography>
            <Typography
              style={{ fontSize: 12 }}
              className={clsx({
                [classes.red]:
                  invite.status && invite.status === 'unopened' && true,
                [classes.green]:
                  invite.status && invite.status === 'quote_sent' && true,
              })}
            >
              {invite.status && invite.status === 'unopened' && 'Unopened'}
              {invite.status &&
                invite.status === 'quote_sent' &&
                'Quote Submitted'}
            </Typography>
          </Column>
        </Row>
        {contract && (
          <MenuButtonShortcut
            text={{
              name: '',
              color: '#fff',
              icon: 'request_quote',
              count: 0,
              back: 'secondary',
            }}
            onClickEvent={() => setDisplay(true)}
            active={false}
          />
        )}
        <MenuButtonShortcut
          text={{
            name: '',
            color: '',
            icon: 'chat',
            count: 0,
            back: '',
          }}
          onClickEvent={() => setConversationUser(invite.receiver)}
          active={false}
        />
        {contract && display && (
          <Query
            query={PREVIEW_CONTRACT}
            variables={{ contractId: contract._id }}
            fetchPolicy="network-only"
          >
            {({ data }) => {
              return data ? (
                <ContractSummaryForCreative contractData={data.contractById} />
              ) : null;
            }}
          </Query>
        )}
      </Row>
    </div>
  );
}
