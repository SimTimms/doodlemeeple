import React from 'react';
import Slide from '@material-ui/core/Slide';
import {
  ProjectComponent,
  EmptyProjectComponent,
} from './components/projectComponent';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { PROFILE } from '../../../../data/queries';
import { LoadIcon, ContentHeader } from '../../../../components';

export function Projects() {
  const classes = useStyles();
  const [projectArray, setProjectArray] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader
          title="Projects"
          subTitle="List the projects and jobs you need help with"
        />
        <div className={classes.cardGrid}>
          {projectArray.map((project, index) => {
            return (
              <ProjectComponent key={`project_${index}`} project={project} />
            );
          })}
          <EmptyProjectComponent key={`project_empty`} />
        </div>
        <Query
          query={PROFILE}
          fetchPolicy="network-only"
          onCompleted={(data) => {}}
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
