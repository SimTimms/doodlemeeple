import React from 'react';
import { Typography } from '@material-ui/core';
import {
  HeaderTwo,
  HeaderThree,
  Column,
  Divider,
  GalleryCard,
  DividerMini,
} from '../../../../../../components';
import ReactPlayer from 'react-player';
import { nameShortener } from '../../../../../../utils';

export default function JobSummaryComponent({ job }) {
  return (
    <Column>
      <HeaderTwo str={nameShortener(job.name, 30)} />
      <Typography noWrap={false}>{job.summary}</Typography>
      <Divider />
      <Divider />
      <HeaderThree str="Creative Summary" />
      <Divider />
      <Typography>{job.creativeSummary}</Typography>
      <Divider />
      <Divider />
      {job.gallery && job.gallery.images.length ? (
        <Column>
          <HeaderThree str="Reference Images" />
          <Divider />

          <Column>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                paddingLeft: 40,
                paddingRight: 40,
                boxSizing: 'border-box',
              }}
            >
              {job.gallery.images.map((item, index) => {
                return <GalleryCard img={`${item.img}`} />;
              })}
            </div>
          </Column>

          <Divider />
          <Divider />
        </Column>
      ) : null}
      {job.scope !== '' && (
        <Column>
          <HeaderThree str="Scope of Work" />
          <Divider />
          <Typography>{job.scope}</Typography>
          <Divider />
          <Divider />
        </Column>
      )}
      {job.genre !== '' && (
        <Column>
          <DividerMini />
          <HeaderThree str="Genre/Style of Project" />
          <Divider />
          <Typography>{job.genre}</Typography>
          <Divider />
          <Divider />
        </Column>
      )}
      {job.mechanics !== '' && (
        <Column>
          <HeaderThree str="Game Mechanics" />
          <Divider />
          <Typography>{job.mechanics}</Typography>
          <Divider />
          <Divider />
        </Column>
      )}
      {job.timeframe !== '' && (
        <Column>
          <HeaderThree str="Timeframe" />
          <Divider />
          <Typography>{job.timeframe}</Typography>
          <Divider />
          <Divider />
        </Column>
      )}
      {job.budget !== '' && (
        <Column>
          <HeaderThree str="Budget" />
          <Divider />
          <Typography>{job.budget}</Typography>
          <Divider />
          <Divider />
        </Column>
      )}
      {job.extra !== '' && (
        <Column>
          <HeaderThree str="Extra Requirements" />
          <Divider />
          <Typography>{job.extra}</Typography>
          <Divider />
          <Divider />
        </Column>
      )}
      {job.showreel && (
        <Column>
          <HeaderThree str="Showreel" />
          <ReactPlayer
            url={job.showreel}
            playing
            controls={true}
            muted={true}
            style={{
              width: '100%',
              padding: 10,
              boxSizing: 'border-box',
              background: '#ddd',
              marginTop: 20,
            }}
            width="100%"
          />
          <Divider />
          <Divider />
        </Column>
      )}
    </Column>
  );
}
