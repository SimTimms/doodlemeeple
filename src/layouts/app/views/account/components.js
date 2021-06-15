import React from 'react';
import { IconButton } from '../../../../components';
import { Mutation } from 'react-apollo';
import { UPDATE_EMAIL } from '../../../../data/mutations';
import { readableErrors } from '../../../../utils/readableErrors';
import { toaster } from '../../../../utils/toaster';
import { validate } from 'email-validator';

export function SaveButton({ email, errors, setError }) {
  function submitChecks(mutation) {
    let passed = true;

    const emailPass = validate(email);
    !emailPass && (passed = false);

    setError({
      email: !emailPass ? 'Valid email required' : null,
    });

    passed && mutation();
  }

  return (
    <Mutation
      mutation={UPDATE_EMAIL}
      variables={{
        email,
      }}
      onError={(error) => {
        setError(readableErrors(error, errors));
      }}
      onCompleted={() => {
        toaster('Autosave');
      }}
    >
      {(mutation) => {
        return (
          <IconButton
            onClickEvent={() => {
              submitChecks(mutation);
            }}
            icon="save"
            title="Save"
            color="primary"
            style={{ margin: 10 }}
          />
        );
      }}
    </Mutation>
  );
}
