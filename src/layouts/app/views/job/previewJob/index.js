import React from 'react';
import { Card, Slide, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  LoadIcon,
  ContentHeader,
  IconTitle,
  InlineHeader,
  IconButton,
} from '../../../../../components';

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
        <ContentHeader title={job.name} subTitle="" button={null} />
        <div style={{ width: '100%' }}>
          <Card className={classes.card}>
            <InlineHeader>
              <IconTitle icon="work" title="Brief Details" />
            </InlineHeader>
            <div style={{ padding: 10 }}>
              <Typography variant="body1">{job.summary}</Typography>
            </div>
          </Card>
          <Card className={classes.card}>
            <InlineHeader>
              <IconTitle icon="account_box" title="Creative Details" />
            </InlineHeader>
            <div style={{ padding: 10 }}>
              <Typography variant="body1">{job.creativeSummary}</Typography>
            </div>
          </Card>
          <Card className={classes.card}>
            <InlineHeader>
              <IconTitle icon="casino" title="Game Details" />
            </InlineHeader>
            <div style={{ padding: 10 }}>
              <Typography variant="h2">{job.game.name}</Typography>
              <Typography variant="body1">{job.game.summary}</Typography>
              {job.game.id && (
                <IconButton
                  onClickEvent={() => {
                    history.push(`/app/view-game/${job.game.id}`);
                  }}
                  disabled={false}
                  icon="keyboard_arrow_right"
                  title="View Game"
                />
              )}
            </div>
          </Card>
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
