import React from 'react';
import {
  ContractSummary,
  IconButton,
  ActionWrapper,
  Contract,
  ProfileCardBasic,
  HeaderTwo,
  Divider,
  Column,
  Meta,
  BorderBox,
} from '../../../../../../components';
import { toaster } from '../../../../../../utils/toaster';
import { DECLINE_CONTRACT } from '../../../../../../data/mutations';
import { FAVOURITES } from '../../../../../../data/queries';

import { Mutation, Query } from 'react-apollo';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function Quote({ display, contractData, setContract, history }) {
  const classes = useStyles();
  const [openContract, setOpenContract] = React.useState(false);
  const [favourites, setFavourites] = React.useState([]);

  return (
    <div
      className={clsx({
        [classes.wrapper]: true,
        [classes.hide]: !display,
      })}
    >
      <HeaderTwo str={`Creative`} />

      <Query
        query={FAVOURITES}
        onCompleted={(data) => {
          setFavourites(data.profile.favourites.map((fav) => fav.receiver._id));
        }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          return null;
        }}
      </Query>
      <Column j="center" a="center">
        <ProfileCardBasic
          history={history}
          creative={contractData.user}
          favourite={
            favourites.indexOf(contractData.user._id) > -1 ? true : false
          }
        />
      </Column>
      <HeaderTwo str="Quote" />

      <Divider />
      <div className={classes.root}>
        <ContractSummary contractData={contractData} />
        {openContract && (
          <Contract
            contractData={contractData}
            setOpenContract={setOpenContract}
          />
        )}
        {!openContract && (
          <ActionWrapper>
            <BorderBox>
              <Meta
                str={`Choose to read the full details or decline this offer`}
              />
              {contractData.status !== 'accepted' && (
                <IconButton
                  title="Continue"
                  color="primary"
                  icon="chevron_right"
                  disabled={false}
                  onClickEvent={() => {
                    setOpenContract(true);
                  }}
                  styleOverride={{ width: '100%' }}
                  type="button"
                  iconPos="right"
                />
              )}
              {contractData.status !== 'accepted' && (
                <Mutation
                  mutation={DECLINE_CONTRACT}
                  variables={{
                    contractId: contractData.id,
                  }}
                  onCompleted={(data) => {
                    toaster('Declined');
                    setContract({
                      ...contractData,
                      status: 'declined',
                    });
                  }}
                >
                  {(mutation) => {
                    return (
                      <IconButton
                        title="Decline"
                        color="warning"
                        icon="thumb_down"
                        disabled={false}
                        onClickEvent={mutation}
                        styleOverride={{ width: '100%' }}
                        type="button"
                        iconPos="right"
                      />
                    );
                  }}
                </Mutation>
              )}
            </BorderBox>
          </ActionWrapper>
        )}
      </div>
    </div>
  );
}
