import React from 'react';
import { Button, Icon, Typography } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import { REMOVE_SECTION_MUTATION } from '../../../../../../../data/mutations';
import { useStyles } from './styles';

export function DeleteButton({ index, sections, setSections, sectionId }) {
  const classes = useStyles();
  const [confirm, setConfirm] = React.useState(false);
  return (
    <Mutation
      mutation={REMOVE_SECTION_MUTATION}
      variables={{
        id: sectionId,
      }}
    >
      {(RemoveSectionMutation) => {
        return confirm ? (
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 3,
              marginBottom: 3,
            }}
          >
            <Typography variant="body1" color="textPrimary">
              Delete Section?
            </Typography>
            <Button
              onClick={() => {
                sectionId !== 'new' && RemoveSectionMutation();
                let newSections = Object.assign([], sections);
                newSections.splice(index, 1);
                setSections(newSections);
              }}
              variant="contained"
              className={classes.deleteButtonConfirmYes}
              color="primary"
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                setConfirm(false);
              }}
              variant="contained"
              className={classes.deleteButtonConfirmNo}
            >
              No
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => {
              setConfirm(true);
            }}
            variant="contained"
            className={classes.deleteButton}
          >
            <Icon style={{ fontSize: 18, color: '#fff' }}>delete</Icon>
          </Button>
        );
      }}
    </Mutation>
  );
}
