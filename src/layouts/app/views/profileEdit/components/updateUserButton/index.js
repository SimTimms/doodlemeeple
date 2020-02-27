import React from 'react';
import Button from '@material-ui/core/Button';
import { Mutation } from 'react-apollo';
import { UPDATE_USER_MUTATION } from '../../../../../../data/mutations';
import { readableErrors } from '../../../../../../utils/readableErrors';

export function UpdateUserButton({
  userName,
  summary,
  bgImage,
  profileImg,
  setError,
  errors,
  disabledValue,
  setDisabledValue,
}) {
  return (
    <Mutation
      mutation={UPDATE_USER_MUTATION}
      variables={{
        name: userName,
        summary,
        profileBG: bgImage,
        profileImg,
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
              disabled={!disabledValue}
            >
              Save
            </Button>
          </div>
        );
      }}
    </Mutation>
  );
}
