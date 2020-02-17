import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
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
        <Icon style={{ fontSize: 50, color: '#fff' }}>add_circle</Icon>
        <Typography
          color="textSecondary"
          component="p"
          style={{ fontSize: 24, color: '#fff', marginLeft: 10 }}
        >
          Add a Skill
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
              gallery: {
                id: Math.floor(Math.random() * 100),
                summary: '',
                images: [],
              },
            };
            const newSections = Object.assign([], sections);
            newSections.push(newSection);
            setSections(newSections);
          }}
        >
          <Icon style={{ fontSize: 50, color: '#333' }}>brush</Icon>
          <Typography color="textSecondary" component="p">
            Digital Artist
          </Typography>
        </Card>
        <Card
          className={classes.skillCard}
          onClick={() => {
            const newSection = {
              graphicArtist: {
                id: Math.floor(Math.random() * 100),
                summary: '',
                images: [],
              },
            };
            const newSections = Object.assign([], sections);
            newSections.push(newSection);
            setSections(newSections);
          }}
        >
          <Icon style={{ fontSize: 50, color: '#333' }}>font_download</Icon>
          <Typography color="textSecondary" component="p">
            Graphic Artist
          </Typography>
        </Card>
        <Card className={classes.skillCard}>
          <Icon style={{ fontSize: 50, color: '#333' }}>edit</Icon>
          <Typography color="textSecondary" component="p">
            Copy Writer
          </Typography>
        </Card>
        <Button
          color="secondary"
          onClick={() => {
            setDisplay(false);
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
