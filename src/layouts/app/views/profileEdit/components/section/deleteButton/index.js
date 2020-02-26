import React from 'react';
import Button from '@material-ui/core/Button';
import { Mutation } from 'react-apollo';
import { REMOVE_SECTION_MUTATION } from '../../../../../../../data/mutations';

export function DeleteButton({ index, sections, setSections, sectionId }) {
  return (
    <Mutation
      mutation={REMOVE_SECTION_MUTATION}
      variables={{
        id: sectionId,
      }}
    >
      {RemoveSectionMutation => {
        return (
          <Button
            color="secondary"
            onClick={() => {
              RemoveSectionMutation();
              let newSections = Object.assign([], sections);
              newSections.splice(index, 1);
              setSections(newSections);
            }}
          >
            Remove
          </Button>
        );
      }}
    </Mutation>
  );
}
