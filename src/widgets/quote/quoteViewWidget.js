import React from 'react';
import { Typography } from '@material-ui/core';
import { Query, Mutation } from 'react-apollo';
import { QUOTE_VIEW_WIDGET } from './data';
import {
  Column,
  CardComponent,
  MenuButtonStandard,
  DividerMini,
  Row,
  Avatar,
} from '../../components';
import { DECLINE_CONTRACT, SIGN_CONTRACT } from '../../data/mutations';
import { useStyles } from './styles';
import { ChatViewByJob } from '../../modules/chat';
import { MenuContext } from '../../context';

export default function QuoteViewWidget({ quoteId }) {
  const classes = useStyles();
  const [conversationUser, setConversationUser] = React.useState(null);
  return (
    <Column>
      <Column w={500}>
        <Query
          query={QUOTE_VIEW_WIDGET}
          variables={{ id: quoteId }}
          fetchPolicy="network-only"
        >
          {({ data }) => {
            if (data)
              return conversationUser ? (
                <ChatViewByJob
                  job={data.contractById.job}
                  conversationUser={conversationUser}
                  setConversationUser={setConversationUser}
                />
              ) : (
                <CardComponent>
                  <Column>
                    <Column w={500}>
                      <Typography variant="h4">Quote Details</Typography>
                      <Column a="flex-start">
                        <Row>
                          <Avatar
                            profileImg={data.contractById.user.profileImg}
                            size={40}
                          />
                          <Column>
                            <a
                              href={`${process.env.REACT_APP_URL}/user-profile/${data.contractById.user._id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: '#222',
                                width: '100%',
                              }}
                            >
                              <Typography className={classes.summary}>
                                {data.contractById.user.name}
                              </Typography>
                            </a>
                            {data.contractById.user.publicEmail && (
                              <a
                                href={`mailto: ${data.contractById.user.publicEmail}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: '#222',
                                  width: '100%',
                                  textDecoration: 'none',
                                }}
                              >
                                <Typography className={classes.summary}>
                                  {data.contractById.user.publicEmail}
                                </Typography>
                              </a>
                            )}
                            {data.contractById.user.website && (
                              <a
                                href={`${data.contractById.user.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: '#222',
                                  width: '100%',
                                  textDecoration: 'none',
                                }}
                              >
                                <Typography className={classes.summary}>
                                  {data.contractById.user.website}
                                </Typography>
                              </a>
                            )}
                          </Column>
                          <MenuButtonStandard
                            icon="chat"
                            title="Chat"
                            onClickEvent={() =>
                              setConversationUser(data.contractById.user)
                            }
                          />
                        </Row>
                      </Column>
                      <div className={classes.divider}></div>
                      <Column a="flex-start">
                        <Typography className={classes.title}>Cost</Typography>
                        <Typography className={classes.summary}>
                          {data.contractById.cost} {data.contractById.currency}
                        </Typography>
                      </Column>
                      <div className={classes.divider}></div>
                      <Column a="flex-start">
                        <Typography className={classes.title}>
                          Estimated Starting Time
                        </Typography>
                        <Typography className={classes.summary}>
                          {data.contractById.startDate}
                        </Typography>
                      </Column>
                      <div className={classes.divider}></div>
                      <Column a="flex-start">
                        <Typography className={classes.title}>
                          Expected End Time
                        </Typography>
                        <Typography className={classes.summary}>
                          {data.contractById.deadline}
                        </Typography>
                      </Column>
                      <div className={classes.divider}></div>
                      <Column a="flex-start">
                        <Typography className={classes.title}>
                          Other Details
                        </Typography>
                        <Typography className={classes.summary}>
                          {data.contractById.notes}
                        </Typography>
                      </Column>
                    </Column>

                    <MenuContext.Consumer>
                      {(menu) => (
                        <Column w={200}>
                          <Mutation
                            mutation={SIGN_CONTRACT}
                            variables={{
                              contractId: data.contractById._id,
                            }}
                            onCompleted={() =>
                              menu.updateMenuContext({
                                ...menu,
                                jobPage: {
                                  ...menu.jobPage,
                                  secondaryPage: 'job_dashboard',
                                  contractId: null,
                                },
                              })
                            }
                          >
                            {(mutation) => (
                              <MenuButtonStandard
                                title="Accept"
                                fullWidth={true}
                                icon="thumb_up"
                                onClickEvent={() => {
                                  mutation();
                                }}
                              />
                            )}
                          </Mutation>
                          <DividerMini />
                          <Mutation
                            mutation={DECLINE_CONTRACT}
                            variables={{
                              contractId: data.contractById._id,
                            }}
                            onCompleted={() =>
                              menu.updateMenuContext({
                                ...menu,
                                jobPage: {
                                  ...menu.jobPage,
                                  secondaryPage: 'job_dashboard',
                                  contractId: null,
                                },
                              })
                            }
                          >
                            {(mutation) => {
                              return (
                                <MenuButtonStandard
                                  title="Decline"
                                  fullWidth={true}
                                  icon="thumb_down"
                                  onClickEvent={() => {
                                    mutation();
                                  }}
                                />
                              );
                            }}
                          </Mutation>
                        </Column>
                      )}
                    </MenuContext.Consumer>
                  </Column>{' '}
                </CardComponent>
              );
            return null;
          }}
        </Query>
      </Column>
    </Column>
  );
}
