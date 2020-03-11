import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './styles';
import clsx from 'clsx';

export function AddSection({ setSections, sections }) {
  const [display, setDisplay] = React.useState(false);
  const classes = useStyles();

  return (
    <div>
      <CardContent
        className={clsx({
          [classes.root]: true,
          [classes.hide]: display,
        })}
        onClick={() => (display ? setDisplay(false) : setDisplay(true))}
      >
        <Icon style={{ fontSize: 18, color: '#fff' }}>add_circle</Icon>
        <Typography
          variant="body1"
          component="p"
          style={{ fontSize: 16, color: '#fff', marginLeft: 10 }}
        >
          {`Skill (${3 - sections.length})`}
        </Typography>
      </CardContent>
      <Divider />
      <div
        className={clsx({
          [classes.skillWrapper]: true,
          [classes.skillWrapperOpen]: display,
        })}
      >
        <Card
          className={classes.skillCard}
          onClick={() => {
            setDisplay(false);
            const newSection = {
              id: 'new',
              title: '',
              summary: '',
              gallery: {
                images: [],
              },
              notableProjects: [],
              testimonials: [],
            };
            const newSections = Object.assign([], sections);
            newSections.push(newSection);
            setSections(newSections);
          }}
        >
          <Icon style={{ fontSize: 20, marginRight: 10 }}>brush</Icon>
          <Typography variant="body1" component="p">
            Artist
          </Typography>
        </Card>
        <Card
          className={classes.skillCard}
          onClick={() => {
            setDisplay(false);
            const newSection = {
              id: 'new',
              title: '',
              summary: '',
              gallery: {
                images: [],
              },
              notableProjects: [],
              testimonials: [],
            };
            const newSections = Object.assign([], sections);
            newSections.push(newSection);
            setSections(newSections);
          }}
        >
          <Icon style={{ fontSize: 20, marginRight: 10 }}>create</Icon>
          <Typography variant="body1" component="p">
            Artist
          </Typography>
        </Card>
      </div>
      <CardContent
        className={clsx({
          [classes.cancel]: true,
          [classes.hide]: !display,
        })}
        onClick={() => {
          setDisplay(false);
        }}
      >
        <Icon style={{ fontSize: 18, color: '#aaa' }}>keyboard_arrow_up</Icon>
      </CardContent>
    </div>
  );
}
