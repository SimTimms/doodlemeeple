import React from 'react';
import { useStyles } from './styles';
import ViewConversation from '../../../../../messages/views/messaging/viewConversation';
import clsx from 'clsx';

export default function Chat({ display, conversationId, history }) {
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.wrapper]: true,
        [classes.hide]: !display,
      })}
    >
      <div
        style={{
          padding: 10,
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          background: '#efeff5',
          position: 'relative',
          textAlign: 'left',
        }}
      >
        {conversationId && (
          <ViewConversation
            history={history}
            conversationId={conversationId}
            titles={false}
          />
        )}
      </div>
    </div>
  );
}
