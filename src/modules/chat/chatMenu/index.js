import React from 'react';
import { IconButton, Row } from '../../../components';

export default function ChatMenu({
  setConversationUser,
  setMessages,
  setPageNbr,
  pageNbr,
  setRefreshCount,
  refreshCount,
}) {
  return (
    <Row>
      <IconButton
        icon="close"
        title=""
        iconPos="right"
        color="text-mini"
        styleOverride={{
          zIndex: 10,
        }}
        onClickEvent={() => {
          setConversationUser(null);
        }}
      />
      <IconButton
        icon="more_horiz"
        title=""
        iconPos="right"
        color="text-mini"
        onClickEvent={() => {
          setPageNbr(pageNbr + 1);
        }}
      />
      <IconButton
        icon="refresh"
        title=""
        iconPos="right"
        color="text-mini"
        onClickEvent={() => {
          setMessages([]);
          setRefreshCount(refreshCount + 1);
        }}
      />
    </Row>
  );
}
