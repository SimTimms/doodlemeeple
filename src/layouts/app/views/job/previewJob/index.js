import React from 'react';
import { Card, Slide, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { LoadIcon, ContentHeader, FieldTitle } from '../../../../../components';
import { Query } from 'react-apollo';
import { JOB, GAMES } from '../../../../../data/queries';
import clsx from 'clsx';

export default function PreviewJob({ theme, jobId, history }) {
  const classes = useStyles();
  const [job, setJob] = React.useState({
    name: '',
    img: '',
    summary: '',
    location: '',
    gallery: {
      images: [],
    },
    game: { name: '', id: '', backgroundImg: '', summary: '' },
    showreel: '',
    type: 'job',
    creativeSummary: '',
    id: 'new',
    gameId: '',
    submitted: false,
  });

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader title={job.name} subTitle={job.summary} button={null} />
        <div style={{ width: '100%' }}>
          <Card className={classes.card}>{job.game.name}</Card>
          <Card className={classes.card}>{job.game.summary}</Card>

          <Card className={classes.card}>{job.creativeSummary} </Card>
        </div>

        <Query
          query={JOB}
          variables={{ jobId: jobId }}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            data.getJob &&
              setJob({ ...data.getJob, gameId: data.getJob.game.id });
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
