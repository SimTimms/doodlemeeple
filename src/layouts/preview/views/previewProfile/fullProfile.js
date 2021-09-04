import React from 'react';
import { useStyles } from './styles';
import { IconButton } from '../../../../components';
import Cookies from 'js-cookie';
import clsx from 'clsx';
import { FullProfileCard } from '../../../../widgets/profileCard';
import { HistoryContext } from '../../../../context';

export default function FullProfile({ profileId, publicView, ...props }) {
  const classes = useStyles();
  const userId = Cookies.get('userId');
  const { setFullProfile } = props;

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <div
          className={clsx({
            [classes.root]: true,
            [classes.popup]: setFullProfile,
          })}
        >
          <div className={classes.root}>
            {setFullProfile && (
              <IconButton
                title="Close"
                icon="close"
                color="primary"
                onClickEvent={() => {
                  setFullProfile(null);
                }}
              ></IconButton>
            )}

            {!publicView && profileId === userId && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  top: 0,
                  position: 'absolute',
                }}
              >
                <IconButton
                  title="Edit"
                  icon="edit"
                  color="primary"
                  onClickEvent={() => {
                    history.push('/app/edit-profile');
                  }}
                ></IconButton>
              </div>
            )}
            <FullProfileCard history={history} creativeId={profileId} />
          </div>
        </div>
      )}
    </HistoryContext.Consumer>
  );
}
