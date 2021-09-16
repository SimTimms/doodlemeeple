import React from 'react';
import { MenuButtonStandard } from '../../components';
import { Mutation } from 'react-apollo';
import { UPDATE_MY_POST } from './data';
import { toaster } from '../../utils/toaster';

export default function Update({ myPost }) {
  return (
    <Mutation
      mutation={UPDATE_MY_POST}
      variables={{
        ...myPost,
      }}
      onCompleted={(data) => {
        toaster('Saved');
      }}
    >
      {(updateMutation) => {
        return (
          <MenuButtonStandard
            title="Update"
            icon="save"
            disabled={myPost.name.length < 5}
            onClickEvent={() => {
              updateMutation();
            }}
            fullWidth={true}
          />
        );
      }}
    </Mutation>
  );
}
