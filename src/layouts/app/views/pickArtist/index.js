// @ts-nocheck
import React from 'react';
import {
  Card,
  Slide,
  TextField,
  Typography,
  Button,
  Icon,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import {
  LoadIcon,
  ContentHeader,
  DeleteButton,
  FieldTitle,
  ProfileCard,
} from '../../../../components';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import { UPDATE_JOB, CREATE_JOB, REMOVE_JOB } from '../../../../data/mutations';
import { JOB, GAMES, CREATIVES } from '../../../../data/queries';
import { toaster } from '../../../../utils/toaster';
import autosave from '../../../../utils/autosave';

export function PickArtist({
  theme,
  jobId,
  autosaveIsOn,
  history,
  favourites,
}) {
  const classes = useStyles();
  const [games, setGames] = React.useState([]);
  const [job, setJob] = React.useState({
    name: '',
    img: '',
    summary: '',
    location: '',
    gallery: {
      images: [],
    },
    showreel: '',
    type: 'job',
    creativeSummary: '',
    id: 'new',
    gameId: '',
    submitted: false,
  });
  const [disabledValue, setDisabledValue] = React.useState(false);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader title="Invite Artists" subTitle="Invite Artists" />

        <div style={{ width: '100%' }}>
          <FieldTitle name="5. Invite Artists" description="" warning="" />
          <Query
            query={CREATIVES}
            fetchPolicy="network-only"
            onCompleted={(data) => {}}
          >
            {({ loading, error, data }) => {
              if (loading) return <LoadIcon />;
              if (error) return <div>Error</div>;

              return (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: '100%',
                    flexWrap: 'wrap',
                  }}
                >
                  {data.getCreatives.map((creative) => {
                    return (
                      <ProfileCard
                        creative={creative}
                        favourite={
                          favourites.indexOf(creative.id) > -1 ? true : false
                        }
                        gameId={job.game.id}
                        jobId={job.id}
                        invite={creative.invitesReceived.filter(
                          (filterItem) => filterItem.job.id === job.id,
                        )}
                      />
                    );
                  })}
                </div>
              );
            }}
          </Query>
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
