import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  MenuButtonShortcut,
  Column,
  Row,
  ContractSummaryForCreator,
  ContractComponentForCreator,
  BorderBox,
  IconButton,
  Signature,
  CheckListItem,
} from '../';
import clsx from 'clsx';
import { PREVIEW_CONTRACT } from '../../data/queries';
import { Query } from 'react-apollo';
import ActionSetOne from './ActionSetOne';
export default function InviteComponentFull({
  invite,
  setConversationUser,
  contract,
}) {
  const classes = useStyles();
  const [display, setDisplay] = React.useState(false);
  const [tabNbr, setTabNbr] = React.useState(0);
  const unread = invite.status === 'unopened';
  const quoted = invite.status === 'quote_sent';
  const read = invite.status === 'read';
  const declined = invite.status === 'declined';

  return (
    <div style={{ width: '100%', opacity: declined && 0.5 }}>
      <Column>
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
                  [classes.dull]: true,
                  [classes.red]: unread,
                  [classes.green]: quoted || read,
                })}
              >
                {unread
                  ? 'Unopened'
                  : read
                  ? 'Opened'
                  : quoted
                  ? 'Quoted'
                  : declined && 'Declined'}
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
                back: 'warning',
              }}
              onClickEvent={() => setDisplay(true)}
              active={false}
            />
          )}
          {invite.status !== 'declined' && (
            <MenuButtonShortcut
              text={{
                name: '',
                color: '#444',
                icon: 'chat',
                count: 0,
                back: '',
              }}
              onClickEvent={() => setConversationUser(invite.receiver)}
              active={false}
            />
          )}
        </Row>
        {contract && display && (
          <Query
            query={PREVIEW_CONTRACT}
            variables={{ contractId: contract._id }}
            fetchPolicy="network-only"
          >
            {({ data }) => {
              return data ? (
                <div
                  style={{ padding: 20, background: '#efeff5', marginTop: 20 }}
                >
                  <div
                    style={{
                      width: '100%',
                      background: '#fff',
                      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                    }}
                  >
                    {tabNbr === 0 && (
                      <BorderBox>
                        <ContractSummaryForCreator
                          contractData={data.contractById}
                        />
                        {contract.status !== 'accepted' && (
                          <ActionSetOne
                            setTabNbr={setTabNbr}
                            contract={contract}
                          />
                        )}
                      </BorderBox>
                    )}
                    {tabNbr === 1 && (
                      <BorderBox>
                        <ContractComponentForCreator
                          contractData={data.contractById}
                        />
                        <Signature
                          contractData={contract}
                          onAccept={() => setTabNbr(0)}
                        />
                      </BorderBox>
                    )}
                    <IconButton
                      title="Back"
                      color="text-dark"
                      icon="close"
                      onClickEvent={() => {
                        setTabNbr(0);
                      }}
                      iconPos="chevron_left"
                    />
                  </div>
                </div>
              ) : null;
            }}
          </Query>
        )}
      </Column>
    </div>
  );
}
