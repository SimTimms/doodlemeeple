import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';

export function toaster(msg) {
  toast(<div style={{ color: '#222', fontSize: 16 }}>{msg}</div>, {
    className: css({
      fontSize: 14,
      width: 100,
      marginLeft: 'auto',
      background: '#fff',
      border: '2px solid #222',
    }),
    progressClassName: css({
      background: `#eee`,
    }),
    bodyClassName: css({
      width: '100%',
      textAlign: 'center',
    }),
    autoClose: 2000,
    draggable: false,
    closeButton: false,
    hideProgressBar: true,
  });
}
