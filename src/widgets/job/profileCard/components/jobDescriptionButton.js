import React from 'react';
import { MenuButtonStandard } from '../../../../components';
import { MenuContext } from '../../../../context';

export default function JobDescriptionButton({ jobId }) {
  return (
    <MenuContext.Consumer>
      {(menu) => (
        <MenuButtonStandard
          title="Full Description"
          mb={true}
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
