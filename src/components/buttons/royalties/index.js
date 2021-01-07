import React, { useEffect } from 'react';
import { Mutation } from 'react-apollo';
import { UPDATE_ROYALTIES } from '../../../data/mutations';
import { useStyles } from './styles';
import { IconButton } from '../../';
import { toaster } from '../../../utils/toaster';

export default function Royalties({ royalties }) {
  const classes = useStyles();
  const [royaltiesState, setRoyaltiesState] = React.useState(false);

  useEffect(() => {
    setRoyaltiesState(royalties);
  }, [royalties]);

  return (
    <Mutation
      mutation={UPDATE_ROYALTIES}
      variables={{
        acceptsRoyalties: royaltiesState ? false : true,
      }}
      onCompleted={() => toaster('Royalties Set')}
    >
      {(mutation) => {
        return (
          <div className={classes.root}>
            <IconButton
              icon={!royaltiesState ? 'toggle_off' : 'toggle_on'}
              title={
                !royaltiesState
                  ? 'I will accept full payment only'
                  : 'I will accept some payment in royalties'
              }
              disabled={false}
              color="text-dark"
              onClickEvent={() => {
                setRoyaltiesState(royaltiesState ? false : true);
                mutation();
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
