import React from 'react';
import Slide from '@material-ui/core/Slide';
import { JobComponent, EmptyJobComponent } from './components/jobComponent';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { JOBS } from '../../../../data/queries';
import { LoadIcon, ContentHeader } from '../../../../components';

export function Jobs() {
  const classes = useStyles();
  const [jobArray, setJobArray] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader
          title="Briefs"
          subTitle="The jobs you've posted on DoodleMeeple"
        />
        <div className={classes.cardGrid}>
          {jobArray.map((job, index) => {
            return <JobComponent key={`project_${index}`} job={job} />;
          })}
          <EmptyJobComponent key={`project_empty`} />
        </div>
        <Query
          query={JOBS}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setJobArray(data.getJobs);
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <LoadIcon />;
            if (error) return <div>Error</div>;
            return <div></div>;
          }}
        </Query>
      </div>
    </Slide>
  );
}
