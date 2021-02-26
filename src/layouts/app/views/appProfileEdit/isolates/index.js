import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  LoadIcon,
  IconButton,
  Divider,
  Column,
} from '../../../../../components';
import { Mutation } from 'react-apollo';
import { UPDATE_USER_MUTATION } from '../../../../../data/mutations';
import { readableErrors } from '../../../../../utils/readableErrors';
import { toaster } from '../../../../../utils/toaster';
import autosave from '../../../../../utils/autosave';

import * as CONSTANTS from './constants';
import * as INPUTS from './inputs';

export default function Isolates({
  profile,
  loading,
  setProfile,
  sections,
  setSections,
  isolate,
  history,
}) {
  const classes = useStyles();
  const [changes, setChanges] = React.useState(0);
  const [errors, setError] = React.useState({
    name: null,
    email: null,
    password: null,
  });

  return (
    <Mutation
      mutation={UPDATE_USER_MUTATION}
      variables={{
        ...profile,
      }}
      onCompleted={() => {
        toaster('Autosave');
        setChanges(changes + 1);
      }}
      onError={(error) => {
        toaster('Error');
        setError(readableErrors(error, errors));
      }}
    >
      {(SignupMutation) => {
        return (
          <div className={classes.root}>
            {loading ? (
              <LoadIcon />
            ) : (
              <Column h="100%" w={500}>
                <Typography variant="h6" style={{ color: '#fff' }}>
                  {CONSTANTS[isolate]}
                </Typography>
                <Divider />
                {isolate === 'preference' &&
                  INPUTS.preference({
                    profile: profile,
                    setProfile: setProfile,
                    autosave: autosave,
                    SignupMutation: SignupMutation,
                  })}
                {isolate === 'summary' &&
                  INPUTS.summary({
                    profile: profile,
                    setProfile: setProfile,
                    autosave: autosave,
                    SignupMutation: SignupMutation,
                  })}
                {isolate === 'social' &&
                  INPUTS.social({
                    profile: profile,
                    setProfile: setProfile,
                    autosave: autosave,
                    SignupMutation: SignupMutation,
                  })}
                {isolate === 'contact' &&
                  INPUTS.contact({
                    profile: profile,
                    setProfile: setProfile,
                    autosave: autosave,
                    SignupMutation: SignupMutation,
                  })}
                {isolate === 'skill' &&
                  INPUTS.skill({
                    profile: profile,
                    setProfile: setProfile,
                    autosave: autosave,
                    SignupMutation: SignupMutation,
                    sections,
                    setSections,
                  })}
                {isolate === 'avatar' &&
                  INPUTS.avatar({
                    profile: profile,
                    setProfile: setProfile,
                    autosave: autosave,
                    SignupMutation: SignupMutation,
                    sections,
                    setSections,
                  })}
                {isolate === 'feature' &&
                  INPUTS.feature({
                    profile: profile,
                    setProfile: setProfile,
                    autosave: autosave,
                    SignupMutation: SignupMutation,
                    sections,
                    setSections,
                  })}
                <Divider />
                <IconButton
                  title="Done"
                  icon="check"
                  onClickEvent={() => history.push('/app/tasks')}
                  color="text-white-mini"
                  iconPos="right"
                />
              </Column>
            )}
          </div>
        );
      }}
    </Mutation>
  );
}
