import React from 'react';
import { IconButton } from '../../../../components';
import { MenuContext } from '../../../../context';

export default function JobDescriptionButton({ jobId }) {
  return (
    <MenuContext.Consumer>
      {(menu) => (
        <IconButton
          color="text-dark"
          title="Full Description"
          icon=""
          styleOverride={{ marginTop: 0 }}
          onClickEvent={() => {
            menu.updateMenuContext({
              ...menu.jobPage,
              jobId,
              secondaryPage: 'viewing_job',
            });
          }}
        />
      )}
    </MenuContext.Consumer>
  );
}
