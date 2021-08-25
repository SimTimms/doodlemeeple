import React from 'react';
import { Typography } from '@material-ui/core';
import { Query, Mutation } from 'react-apollo';
import { QUOTE_VIEW_WIDGET } from './data';
import {
  Column,
  CardComponent,
  IconButton,
  DividerMini,
  Row,
} from '../../components';
import { DECLINE_CONTRACT } from '../../data/mutations';
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
              return (
                <CardComponent>
                  {conversationUser ? (
                    <ChatViewByJob
                      job={data.contractById.job}
                      conversationUser={conversationUser}
                      setConversationUser={setConversationUser}
                    />
                  ) : (
                    <Column>
                      <Column w={500}>
                        <Typography variant="h5">Quote Details</Typography>
                        <Column a="flex-start">
                          <Row>
                            <img
                              src={data.contractById.user.profileImg}
                              className={classes.avatar}
                              alt="Profile"
                            />
                            <Column>
                              <a
                                href={`${process.env.REACT_APP_URL}/public-preview/${data.contractById.user._id}`}
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
                            <IconButton
                              icon="chat"
                              color="warning"
                              title="Chat"
                              onClickEvent={() =>
                                setConversationUser(data.contractById.user)
                              }
                              active={false}
                              styleOverride={{ marginRight: 10 }}
                            />
                          </Row>
                        </Column>
                        <div className={classes.divider}></div>
                        <Column a="flex-start">
                          <Typography className={classes.title}>
                            Cost
                          </Typography>
                          <Typography className={classes.summary}>
                            {data.contractById.cost}{' '}
                            {data.contractById.currency}
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
                          <IconButton
                            title="Interested"
                            color="primary"
                            icon="keyboard_arrow_right"
                            disabled={false}
                            onClickEvent={() => {
                              menu.updateMenuContext({
                                ...menu.jobPage,
                                secondaryPage: 'contract',
                                contractId: data.contractById._id,
                              });
                            }}
                            styleOverride={{ margin: 'auto', width: 200 }}
                            type="button"
                            iconPos="right"
                          />
                        )}
                      </MenuContext.Consumer>
                      <DividerMini />
                      <MenuContext.Consumer>
                        {(menu) => (
                          <Mutation
                            mutation={DECLINE_CONTRACT}
                            variables={{
                              contractId: data.contractById._id,
                            }}
                            onCompleted={() =>
                              menu.updateMenuContext({ ...menu.jobPage })
                            }
                          >
                            {(mutation) => {
                              return (
                                <IconButton
                                  title="Decline"
                                  color="warning"
                                  icon="thumb_down"
                                  disabled={false}
                                  onClickEvent={() => {
                                    mutation();
                                  }}
                                  styleOverride={{ margin: 'auto', width: 200 }}
                                  type="button"
                                  iconPos="right"
                                />
                              );
                            }}
                          </Mutation>
                        )}
                      </MenuContext.Consumer>
                    </Column>
                  )}
                </CardComponent>
              );
            return null;
          }}
        </Query>
      </Column>
    </Column>
  );
}
