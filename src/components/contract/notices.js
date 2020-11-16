import React from 'react';
import { NoticeBox } from '../';

export default function Notices({ status }) {
  return (
    <div style={{ width: '100%' }}>
      {status === 'paid' ? (
        <NoticeBox
          title="In Progress"
          subTitle={`This contract has been fully deposited and is considered to be active & binding`}
          color="secondary"
        />
      ) : (
        status !== 'accepted' && (
          <NoticeBox
            title="Read Me"
            subTitle={`Please read the following General Service Agreement and Click "I Agree" to continue.`}
            color="primary"
          />
        )
      )}
    </div>
  );
}
