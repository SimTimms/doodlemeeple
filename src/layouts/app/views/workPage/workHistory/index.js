import React from 'react';
import { Query } from 'react-apollo';
import { CONTRACT_HISTORY, INVITE_HISTORY } from './data';
import {
  Column,
  DividerWithBorder,
  InviteComponent,
} from '../../../../../components';
import { QuoteComponent } from '../../../../../widgets';

export default function JobHistory() {
  return (
    <Column>
      <Query query={CONTRACT_HISTORY} fetchPolicy="network-only">
        {({ data }) => {
          const contractHistory = data
            ? data.contractHistory.map((contract, index) => {
                return (
                  <QuoteComponent key={`work_${index}`} contract={contract} />
                );
              })
            : null;

          return contractHistory ? (
            <Column a="center" j="flex-start">
              <Column w={700}>{contractHistory}</Column>
            </Column>
          ) : null;
        }}
      </Query>
      <DividerWithBorder />
      <Query query={INVITE_HISTORY} fetchPolicy="network-only">
        {({ data }) => {
          const inviteHistory = data
            ? data.inviteHistory.map((invite, index) => {
                return (
                  <InviteComponent
                    key={`work_${index}`}
                    invite={invite}
                    onClickEvent={() => null}
                  />
                );
              })
            : null;

          return inviteHistory ? (
            <Column a="center" j="flex-start">
              <Column w={700}>{inviteHistory}</Column>
            </Column>
          ) : null;
        }}
      </Query>
    </Column>
  );
}
