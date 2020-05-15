import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import ReactPlayer from 'react-player';
import {
  SubHeader,
  MainHeader,
  Card,
  Testimonials,
  Projects,
} from './components';
import {
  IconTitle,
  InlineHeader,
  SectionWrapper,
  DMCard,
} from '../../../../../../../components';

function EditorSection({ section }) {
  const classes = useStyles();

  const {
    summary,
    gallery,
    notableProjects,
    testimonials,
    showreel,
    type,
  } = section;

  return (
    <SectionWrapper header={type} button={null}>
      <div className={classes.sectionHeader}>
        {showreel && (
          <DMCard>
            <InlineHeader>
              <IconTitle icon="play_circle_outline" title="Showreel" />
            </InlineHeader>
            <ReactPlayer
              url={showreel}
              playing
              controls={true}
              muted={true}
              style={{
                background: '#333',
                width: '100%',
              }}
              config={{
                youtube: {
                  embedOptions: { modestbranding: 1, autoplay: 0 },
                  playerVars: { modestbranding: 1, autoplay: 0 },
                },
              }}
              width="100%"
            />
          </DMCard>
        )}

        <DMCard>
          <InlineHeader>
            <IconTitle icon="account_box" title="About my Editing" />
          </InlineHeader>
          <Typography
            variant="body1"
            component="p"
            style={{ padding: 30, width: '100%', boxSizing: 'border-box' }}
          >
            {summary}
          </Typography>
        </DMCard>
        {testimonials.length > 0 && (
          <DMCard>
            <InlineHeader>
              <IconTitle icon="chat" title="Editor Testimonials" />
            </InlineHeader>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Testimonials testimonials={testimonials} />
            </div>
          </DMCard>
        )}
        {notableProjects.length > 0 && (
          <DMCard>
            <InlineHeader>
              <IconTitle icon="work" title="Editor Projects" />
            </InlineHeader>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Projects projects={notableProjects} />
            </div>
          </DMCard>
        )}
      </div>
    </SectionWrapper>
  );
}

export default EditorSection;
