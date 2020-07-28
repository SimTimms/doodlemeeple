import React from 'react';
import Slide from '@material-ui/core/Slide';
import { JobComponent, EmptyJobComponent } from './components/jobComponent';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { JOBS } from '../../../../../data/queries';
import { ContentHeader, Column } from '../../../../../components';

export default function Jobs() {
  const classes = useStyles();
  const [jobArray, setJobArray] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Column align="center" justify="flex-start">
          <ContentHeader
            title="Projects"
            subTitle="The jobs you've posted on DoodleMeeple"
            subTitleExtra=""
            button={null}
          />

          <Query
            query={JOBS}
            fetchPolicy="network-only"
            onCompleted={(data) => {
              setJobArray(data.jobsByUser);
            }}
          >
            {({ data }) => {
              return data
                ? data.jobsByUser.map((job, index) => {
                    return (
                      <JobComponent
                        key={`project_${index}`}
                        job={job}
                        game={job.game ? job.game : { name: '' }}
                      />
                    );
                  })
                : null;
            }}
          </Query>
          <EmptyJobComponent key={`project_empty`} />
        </Column>
      </div>
    </Slide>
  );
}
