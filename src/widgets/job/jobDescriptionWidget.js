import React from 'react';
import JobDescription from './jobDescription';
import {
  Row,
  Column,
  CardComponent,
  MenuButtonStandard,
  DividerMini,
} from '../../components';
import { Mutation, Query } from 'react-apollo';
import {
  DECLINE_INVITE,
  JOB_CONTRACT,
  CREATE_CONTRACT,
  JOB_WIDGET,
} from './data';
import { UserContext, MenuContext, HistoryContext } from '../../context';

export default function JobDescriptionWidget({ jobId }) {
  return (
    <UserContext.Consumer>
      {(userId) => (
        <MenuContext.Consumer>
          {(menu) => (
            <HistoryContext.Consumer>
              {(history) => (
                <Row wrap="wrap">
                  <Query
                    query={JOB_WIDGET}
                    variables={{ jobId }}
                    fetchPolicy="network-only"
                  >
                    {({ data }) => {
                      if (data) {
                        const job = data.jobWidget;
                        return (
                          <Column w={500} m="20px 0 0 0">
                            <CardComponent>
                              <JobDescription
                                job={data.jobWidget}
                                history={history}
                              />

                              {userId &&
                                userId !== job.user._id &&
                                job.submitted !== 'accepted' &&
                                !job.isExternal && (
                                  <Query
                                    query={JOB_CONTRACT}
                                    variables={{ jobId: job._id }}
                                    fetchPolicy="network-only"
                                    onCompleted={(data) => null}
                                  >
                                    {({ data }) => {
                                      return data && data.jobContract ? (
                                        <Column>
                                          <MenuButtonStandard
                                            disabled={false}
                                            color="warning"
                                            title={'Edit Quote'}
                                            icon="fact_check"
                                            onClickEvent={() => {
                                              menu.updateMenuContext({
                                                ...menu,
                                                primaryPage: 'work',
                                                workPage: {
                                                  ...menu.workPage,
                                                  primaryPage: 'quotes',
                                                  secondaryPage: 'quote_list',
                                                  inviteId: null,
                                                  jobId: job._id,
                                                },
                                              });
                                            }}
                                          />
                                        </Column>
                                      ) : (
                                        <Mutation
                                          mutation={CREATE_CONTRACT}
                                          variables={{
                                            currency: 'GBP',
                                            cost: '100',
                                            jobId: job._id,
                                            status: '',
                                          }}
                                          onCompleted={() => {
                                            menu.updateMenuContext({
                                              ...menu,
                                              primaryPage: 'work',
                                              workPage: {
                                                ...menu.workPage,
                                                primaryPage: 'quotes',
                                                secondaryPage: 'quote_list',
                                                inviteId: null,
                                                jobId: job._id,
                                              },
                                            });
                                          }}
                                          onError={() => {}}
                                        >
                                          {(mutation) => {
                                            return (
                                              <Column>
                                                <MenuButtonStandard
                                                  disabled={false}
                                                  color="warning"
                                                  title={'Apply'}
                                                  icon="fact_check"
                                                  onClickEvent={() => {
                                                    mutation();
                                                  }}
                                                />
                                                <DividerMini />
                                                {!job.isPublic && (
                                                  <Mutation
                                                    mutation={DECLINE_INVITE}
                                                    variables={{
                                                      jobId: job._id,
                                                    }}
                                                    onCompleted={() => {
                                                      menu.updateMenuContext({
                                                        ...menu.jobPage,
                                                        primaryPage: 'history',
                                                      });
                                                    }}
                                                    onError={() => {}}
                                                  >
                                                    {(declineInvite) => {
                                                      return (
                                                        <MenuButtonStandard
                                                          title={
                                                            'Decline Invite'
                                                          }
                                                          onClickEvent={() => {
                                                            declineInvite();
                                                          }}
                                                          type="delete"
                                                        />
                                                      );
                                                    }}
                                                  </Mutation>
                                                )}
                                              </Column>
                                            );
                                          }}
                                        </Mutation>
                                      );
                                    }}
                                  </Query>
                                )}
                            </CardComponent>
                          </Column>
                        );
                      }

                      return null;
                    }}
                  </Query>
                </Row>
              )}
            </HistoryContext.Consumer>
          )}
        </MenuContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}
