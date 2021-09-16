import React from 'react';
import { MenuButtonStandard } from '../../components';
import { Mutation } from 'react-apollo';
import { UPDATE_MY_POST } from './data';
import { toaster } from '../../utils/toaster';

export default function PostToBoard({ myPost, setMyPost }) {
  return (
    <Mutation
      mutation={UPDATE_MY_POST}
      variables={{
        ...myPost,
        approved: myPost.approved ? false : true,
      }}
      onCompleted={() => {
        toaster(myPost.approved ? 'Removed' : 'Posted');
        setMyPost({ ...myPost, approved: myPost.approved ? false : true });
      }}
    >
      {(updateMutation) => {
        return (
          <MenuButtonStandard
            title={myPost.approved ? 'Remove from Board' : 'Post to Board'}
            icon={myPost.approved ? 'undo' : 'mail'}
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
