import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './styles';
import clsx from 'clsx';
import { ArtistCard } from './ArtistCard';

function AddSection({ setSections, sections }) {
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
        <ArtistCard
          setDisplay={setDisplay}
          sections={sections}
          setSections={setSections}
          type="artist"
        />
        <ArtistCard
          setDisplay={setDisplay}
          sections={sections}
          setSections={setSections}
          type="graphic-artist"
        />
        <ArtistCard
          setDisplay={setDisplay}
          sections={sections}
          setSections={setSections}
          type="rulebook-editor"
        />
        <ArtistCard
          setDisplay={setDisplay}
          sections={sections}
          setSections={setSections}
          type="content-editor"
        />
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

export default AddSection;
