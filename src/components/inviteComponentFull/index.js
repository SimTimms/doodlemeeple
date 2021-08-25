import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  Column,
  Row,
  ContractSummaryForCreator,
  FullContractComponent,
  Signature,
  UserDeleted,
  MenuButtonStandard,
  CardComponent,
} from '../';
import clsx from 'clsx';
import { PREVIEW_CONTRACT, JOB_CONTACT_DETAILS } from '../../data/queries';
import ActionSetOne from './ActionSetOne';
import { Query } from 'react-apollo';
import * as social from '../../assets/social';

export default function InviteComponentFull({
  invite,
  setConversationUser,
  contract,
  setTabNbr,
  history,
  isOpen,
  contactDetails,
  jobId,
}) {
  const classes = useStyles();
  const [display, setDisplay] = React.useState(false);
  const [tabNbrTwo, setTabNbrTwo] = React.useState(0);
  const unread = invite.status === 'unopened';
  const quoted = contract && contract.status === 'submitted' ? true : false;
  const read = invite.status === 'read';
  const declined = invite.status === 'declined';
  useEffect(() => {
    setDisplay(isOpen);
  }, [isOpen]);

  return !invite.receiver ? (
    <Column>
      <UserDeleted />
    </Column>
  ) : (
    <div style={{ width: '100%', opacity: declined && 0.5 }}>
      <Column>
        <CardComponent>
          <Row j="space-between" a="center">
            <Row a="center" j="flex-start">
              <div
                style={{
                  backgroundImage: `url(${invite.receiver.profileImg})`,
                }}
                className={`${classes.clickable} ${classes.profileThumb}`}
                onClick={() =>
                  history.push(`/app/public-preview/${invite.receiver._id}`)
                }
              ></div>
              <Column a="flex-start">
                <Typography
                  style={{ fontSize: 12 }}
                  className={classes.clickable}
                  onClick={() =>
                    history.push(`/app/public-preview/${invite.receiver._id}`)
                  }
                >
                  {invite.receiver.name}
                </Typography>
                <Typography
                  style={{ fontSize: 12 }}
                  className={clsx({
                    [classes.dull]: true,
                    [classes.red]: quoted,
                    [classes.green]: read,
                  })}
                >
                  {unread
                    ? 'Unopened'
                    : read
                    ? 'Opened'
                    : quoted
                    ? 'Quote Recieved'
                    : declined && 'Declined'}
                </Typography>
              </Column>
            </Row>

            {invite.status !== 'declined' && (
              <MenuButtonStandard
                title="Chat"
                onClickEvent={() => setConversationUser(invite.receiver)}
                active={false}
              />
            )}
          </Row>
          <Column>
            {contactDetails && (
              <Query
                query={JOB_CONTACT_DETAILS}
                variables={{ jobId: jobId }}
                fetchPolicy="network-only"
              >
                {({ data }) => {
                  if (data) {
                    const {
                      email,
                      publicEmail,
                      linkedIn,
                      twitter,
                      facebook,
                      website,
                      instagram,
                      skype,
                    } = data.jobById.assignedCreative;
                    return (
                      <Column>
                        <Row a="center" j="flex-start" mb={5}>
                          <img
                            src={social.iconEmail}
                            className={classes.contactIcon}
                            alt=""
                          />
                          <Typography>
                            {publicEmail ? publicEmail : email}
                          </Typography>
                        </Row>
                        {linkedIn && (
                          <Row a="center" j="flex-start" mb={5}>
                            <img
                              src={social.socialLinkedIn}
                              className={classes.contactIcon}
                              alt=""
                            />
                            <Typography>{linkedIn}</Typography>
                          </Row>
                        )}
                        {twitter && (
                          <Row a="center" j="flex-start" mb={5}>
                            <img
                              src={social.socialTwitter}
                              className={classes.contactIcon}
                              alt=""
                            />
                            <Typography>{twitter}</Typography>
                          </Row>
                        )}
                        {facebook && (
                          <Row a="center" j="flex-start" mb={5}>
                            <img
                              src={social.socialFacebook}
                              className={classes.contactIcon}
                              alt=""
                            />
                            <Typography>{facebook}</Typography>
                          </Row>
                        )}
                        {instagram && (
                          <Row a="center" j="flex-start" mb={5}>
                            <img
                              src={social.socialInstagram}
                              className={classes.contactIcon}
                              alt=""
                            />
                            <Typography>{instagram}</Typography>
                          </Row>
                        )}

                        {skype && (
                          <Row a="center" j="flex-start" mb={5}>
                            <img
                              src={social.socialSkype}
                              className={classes.contactIcon}
                              alt=""
                            />
                            <Typography>{skype}</Typography>
                          </Row>
                        )}
                        {website && (
                          <Row a="center" j="flex-start">
                            <img
                              src={social.iconWebsite}
                              className={classes.contactIcon}
                              alt=""
                            />
                            <Typography>{website}</Typography>
                          </Row>
                        )}
                      </Column>
                    );
                  } else {
                    return null;
                  }
                }}
              </Query>
            )}
          </Column>
          {contract && display && (
            <Query
              query={PREVIEW_CONTRACT}
              variables={{ contractId: contract._id }}
              fetchPolicy="network-only"
            >
              {({ data }) => {
                return data ? (
                  <Column>
                    {tabNbrTwo === 0 && (
                      <Column>
                        <ContractSummaryForCreator
                          contractData={data.contractById}
                        />
                        {contract.status !== 'accepted' && (
                          <ActionSetOne
                            setTabNbrTwo={setTabNbrTwo}
                            setTabNbr={setTabNbr}
                            contract={contract}
                            history={history}
                          />
                        )}
                      </Column>
                    )}
                    {tabNbrTwo === 1 && (
                      <Column w={300}>
                        <FullContractComponent
                          contractData={data.contractById}
                        />
                        <Signature
                          contractData={contract}
                          onAccept={() => {
                            history.push(
                              `/app/view-job/${data.contractById.job._id}`
                            );
                          }}
                          onDecline={() =>
                            history.push(
                              `/app/view-job/${data.contractById.job._id}`
                            )
                          }
                        />
                      </Column>
                    )}
                  </Column>
                ) : null;
              }}
            </Query>
          )}
        </CardComponent>
      </Column>
    </div>
  );
}
