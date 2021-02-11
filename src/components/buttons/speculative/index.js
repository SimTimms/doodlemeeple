import React, { useEffect } from 'react';
import { Mutation } from 'react-apollo';
import { UPDATE_SPECULATIVE } from '../../../data/mutations';
import { useStyles } from './styles';
import { IconButton } from '../../';
import { toaster } from '../../../utils/toaster';

export default function Speculative({ acceptsSpeculative }) {
  const classes = useStyles();
  const [speculative, setSpeculative] = React.useState(false);

  useEffect(() => {
    setSpeculative(acceptsSpeculative);
  }, [acceptsSpeculative]);

  return (
    <Mutation
      mutation={UPDATE_SPECULATIVE}
      variables={{
        acceptsSpeculative: speculative ? false : true,
      }}
      onCompleted={() => toaster('Speculative Set')}
    >
      {(mutation) => {
        function changeSpeculative() {
          setSpeculative(speculative ? false : true);
          mutation();
        }

        return (
          <div className={classes.root}>
            <IconButton
              icon={!speculative ? 'toggle_off' : 'toggle_on'}
              title={
                !speculative
                  ? 'I only quote for jobs starting soon'
                  : 'I will quote on any job'
              }
              disabled={false}
              color="text-dark"
              onClickEvent={() => {
                changeSpeculative();
              }}
              styleOverride={{
                margin: 0,
                marginLeft: 10,
                width: 340,
                paddingLeft: 10,
                paddingRight: 10,
              }}
              type="button"
              iconPos="right"
            />
          </div>
        );
      }}
    </Mutation>
  );
}
