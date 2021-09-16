import React from 'react';
import SummaryViewCreative from '../../../../layouts/app/views/job/jobDashboard/components/summaryViewCreative';
import { MenuContext } from '../../../../context';
import { JOB_CREATIVE } from '../../../../data/queries';
import { Query } from 'react-apollo';

export default function WorkDashboard() {
  return (
    <MenuContext.Consumer>
      {(menu) => (
        <Query
          query={JOB_CREATIVE}
          variables={{ jobId: menu.workPage.jobId }}
          fetchPolicy="network-only"
        >
          {({ data }) => {
            if (!data) return null;
            return <SummaryViewCreative job={data.jobChecklist} menu={menu} />;
          }}
        </Query>
      )}
    </MenuContext.Consumer>
  );
}
