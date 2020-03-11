import React from 'react';
import Button from '@material-ui/core/Button';
import { Mutation } from 'react-apollo';
import Icon from '@material-ui/core/Icon';

export function SaveButton({
  sectionId,
  sectionValues,
  disabledValue,
  setDisabledValue,
  mutation,
}) {
  return (
    <Mutation
      mutation={mutation}
      variables={{
        id: sectionId,
        section: sectionValues,
      }}
    >
      {mutation => {
        return (
          <Button
            onClick={() => {
              setDisabledValue(false);
              mutation();
            }}
            variant="contained"
            color="secondary"
            disabled={!disabledValue}
          >
            <Icon style={{ fontSize: 18, color: '#fff' }}>save</Icon>
          </Button>
        );
      }}
    </Mutation>
  );
}
