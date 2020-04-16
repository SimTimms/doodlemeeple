import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { SubHeader, MainHeader, Testimonials, Projects } from './components';

function EditorSection({ section }) {
  const classes = useStyles();

  const { summary, notableProjects, testimonials, type } = section;

  return (
    <div>
      <Divider />

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionHeader}>
          <MainHeader title={type} />
          <SubHeader title="Summary" />
          <Typography
            variant="body1"
            component="p"
            style={{ padding: 30, width: '100%' }}
          >
            {summary}
          </Typography>
          {testimonials.length > 0 && <SubHeader title="Testimonials" />}
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
          {notableProjects.length > 0 && <SubHeader title="Projects" />}
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
        </div>
      </div>
    </div>
  );
}

export default EditorSection;
