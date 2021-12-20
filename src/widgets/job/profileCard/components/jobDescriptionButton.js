import React from 'react';
import { MenuButtonStandardText } from '../../../../components';
import { MenuContext } from '../../../../context';

export default function JobDescriptionButton({ jobId }) {
  return (
    <MenuContext.Consumer>
      {(menu) => (
        <MenuButtonStandardText
          title="Full Description"
          mb={true}
          styleOverride={{ marginTop: 0 }}
          onClickEvent={() => {
            menu.updateMenuContext({
              primaryPage: 'jobs',
              jobPage: {
                ...menu.jobPage,
                jobId: jobId,
                primaryPage: 'job_board',
                secondaryPage: 'viewing_job',
              },
              homePage: { ...menu.jobPage },
              workPage: { ...menu.workPage },
            });
          }}
        />
      )}
    </MenuContext.Consumer>
  );
}
