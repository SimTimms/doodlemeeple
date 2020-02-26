import React from 'react';
import Button from '@material-ui/core/Button';
import { Mutation } from 'react-apollo';
import { UPDATE_SECTION_MUTATION } from '../../../../../../../data/mutations';

export function SaveButton({
  sectionId,
  sectionValues,
  disabledValue,
  setDisabledValue,
}) {
  console.log(sectionValues);
  return (
    <Mutation
      mutation={UPDATE_SECTION_MUTATION}
      variables={{
        id: sectionId,
        section: sectionValues,
      }}
    >
      {UpdateSectionMutation => {
        return (
          <Button
            onClick={() => {
              setDisabledValue(false);
              UpdateSectionMutation();
            }}
            variant="contained"
            color="secondary"
            disabled={!disabledValue}
          >
            Save
          </Button>
        );
      }}
    </Mutation>
  );
}
