import React from 'react';
import Button from '@material-ui/core/Button';
import { Mutation } from 'react-apollo';
import { UPDATE_USER_MUTATION } from '../../../../../../data/mutations';
import { readableErrors } from '../../../../../../utils/readableErrors';

export function UpdateUserButton({
  profile,
  setError,
  errors,
  disabledValue,
  setDisabledValue,
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
        sections: [{ summary: 'Test Section' }, { summary: 'Test Section 2' }],
      }}
      onError={error => {
        setError(readableErrors(error, errors));
      }}
    >
      {SignupMutation => {
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
              color="secondary"
              style={{ margin: 10 }}
              disabled={!validate}
            >
              Save
            </Button>
          </div>
        );
      }}
    </Mutation>
  );
}
