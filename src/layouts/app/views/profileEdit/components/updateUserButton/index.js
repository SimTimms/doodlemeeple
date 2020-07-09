import React from 'react';
import Button from '@material-ui/core/Button';
import { Mutation } from 'react-apollo';
import { UPDATE_USER_MUTATION } from '../../../../../../data/mutations';
import { readableErrors } from '../../../../../../utils/readableErrors';
import Icon from '@material-ui/core/Icon';

export function UpdateUserButton({
  profile,
  setError,
  errors,
  disabledValue,
  setDisabledValue,
  toast,
}) {
  const validate = profile.userName.length < 3 ? false : disabledValue;

  return (
    <Mutation
      mutation={UPDATE_USER_MUTATION}
      variables={{
        name: profile.userName,
        summary: profile.summary,
        profileBG: profile.bgImage,
        profileImg: profile.profileImg,
      }}
      onCompleted={() => {
        toast();
      }}
      onError={(error) => {
        setError(readableErrors(error, errors));
      }}
    >
      {(SignupMutation) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => {
                setDisabledValue(false);
                SignupMutation();
              }}
              variant="contained"
              color="primary"
              style={{ margin: 10 }}
              disabled={!validate}
            >
              <Icon style={{ fontSize: 18, color: '#fff' }}>save</Icon>
            </Button>
          </div>
        );
      }}
    </Mutation>
  );
}
