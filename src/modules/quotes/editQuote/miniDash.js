import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  MenuButtonStandard,
  DividerMini,
  Divider,
} from '../../../components';
import { Mutation } from 'react-apollo';
import { UPDATE_CONTRACT } from '../../../data/mutations';
import { MenuContext } from '../../../context';

export default function MiniDash({ contract }) {
  return !contract ? null : (
    <MenuContext.Consumer>
      {(menu) => (
        <Column j="flex-start">
          <Typography>What would you like to do? </Typography>
          <Divider />
          <MenuButtonStandard title="Edit" />
          <DividerMini />
          <Mutation
            mutation={UPDATE_CONTRACT}
            variables={{
              _id: contract._id,
              status: 'deleted',
            }}
            onCompleted={() => {
              menu.updateMenuContext({
                ...menu.jobPage,
                primaryPage: 'history',
                secondaryPage: null,
                jobId: null,
                contractId: null,
              });
            }}
          >
            {(mutation) => {
              return (
                <MenuButtonStandard
                  title="Delete"
                  type="delete"
                  onClickEvent={() => mutation()}
                />
              );
            }}
          </Mutation>
        </Column>
      )}
    </MenuContext.Consumer>
  );
}
