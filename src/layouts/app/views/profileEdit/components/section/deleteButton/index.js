import React from 'react';
import { Button, Icon } from '@material-ui/core';
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
            onClick={() => {
              sectionId !== 'new' && RemoveSectionMutation();
              let newSections = Object.assign([], sections);
              newSections.splice(index, 1);
              setSections(newSections);
            }}
            variant="contained"
            style={{
              margin: 3,
              boxShadow: 'none',
              marginLeft: 'auto',
              minWidth: 32,
              maxWidth: 32,
              minHeight: 32,
              maxHeight: 32,
              borderRadius: '50%',
            }}
          >
            <Icon style={{ fontSize: 18, color: '#fff' }}>delete</Icon>
          </Button>
        );
      }}
    </Mutation>
  );
}
