import React from 'react';
import JobDescription from './jobDescription';
import {
  Row,
  Column,
  CardComponent,
  MenuButtonStandard,
  Divider,
} from '../../components';
import { Mutation, Query } from 'react-apollo';
import {
  DECLINE_INVITE,
  JOB_CONTRACT,
  CREATE_CONTRACT,
  JOB_WIDGET,
} from './data';
import { UserContext } from '../../context';

export default function JobDescriptionWidget({ jobId, ...props }) {
  const { history } = props;
  return (
    <UserContext.Consumer>
      {(userId) => (
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
                      <JobDescription job={data.jobWidget} history={history} />
                    </CardComponent>
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
                                    history.push(
                                      `/app/edit-quote/${data.jobContract._id}`
                                    );
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
                                onCompleted={(data) => {
                                  history.push(
                                    `/app/edit-quote/${data.contractCreateOne.recordId}`
                                  );
                                }}
                                onError={() => {}}
                              >
                                {(mutation) => {
                                  return (
                                    <Column>
                                      <MenuButtonStandard
                                        disabled={false}
                                        color="warning"
                                        title={'Create a Quote'}
                                        icon="fact_check"
                                        onClickEvent={() => {
                                          mutation();
                                        }}
                                      />
                                      <Divider />
                                      {!job.isPublic && (
                                        <Mutation
                                          mutation={DECLINE_INVITE}
                                          variables={{
                                            jobId: job._id,
                                          }}
                                          onCompleted={() => {
                                            history.push(
                                              '/app/projects/history'
                                            );
                                          }}
                                          onError={() => {}}
                                        >
                                          {(declineInvite) => {
                                            return (
                                              <MenuButtonStandard
                                                title={'Decline Invite'}
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
                  </Column>
                );
              }

              return null;
            }}
          </Query>
        </Row>
      )}
    </UserContext.Consumer>
  );
}
