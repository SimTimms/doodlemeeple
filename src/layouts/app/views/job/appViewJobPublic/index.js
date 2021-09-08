import React from 'react';
import { JobWidget } from '../../../../../widgets/job';
import { IconButton, Column } from '../../../../../components';
import { Mutation } from 'react-apollo';
import { CREATE_CONTRACT } from '../../../../../data/mutations';
import Cookies from 'js-cookie';
import { Query } from 'react-apollo';
import { JOB_WIDGET } from '../../../../../widgets/job/data';
import { MenuContext } from '../../../../../context';

export default function AppViewJobPublic({ jobId, history }) {
  const userId = Cookies.get('userId');

  return (
    <MenuContext.Consumer>
      {(menu) => (
        <Column>
          <JobWidget jobId={jobId} />
          <Query
            query={JOB_WIDGET}
            variables={{ jobId }}
            fetchPolicy="network-only"
          >
            {({ data }) => {
              if (data) {
                if (data.jobWidget.user._id !== userId) {
                  return (
                    <Mutation
                      mutation={CREATE_CONTRACT}
                      variables={{
                        currency: 'GBP',
                        cost: '100',
                        jobId,
                        status: '',
                      }}
                      onCompleted={(data) => {
                        history.push(
                          `/app/edit-quote/${data.contractCreateOne.recordId}`
                        );
                      }}
                    >
                      {(mutation) => {
                        return (
                          <IconButton
                            disabled={false}
                            color="warning"
                            title={'Apply'}
                            icon="fact_check"
                            onClickEvent={() => {
                              mutation();
                            }}
                          />
                        );
                      }}
                    </Mutation>
                  );
                }
              }
              return null;
            }}
          </Query>
        </Column>
      )}
    </MenuContext.Consumer>
  );
}
