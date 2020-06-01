import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import clsx from 'clsx';
import { ArtistCard } from './ArtistCard';
import heromaster from '../../../assets/heromaster.jpg';
import jumping from '../../../assets/jumping.jpg';
import map from '../../../assets/map.jpg';

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
          {`Add a Skill (${3 - sections.length})`}
        </Typography>
      </CardContent>

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
          img={jumping}
        />
        <ArtistCard
          setDisplay={setDisplay}
          sections={sections}
          setSections={setSections}
          type="graphic-artist"
          img={heromaster}
        />
        <ArtistCard
          setDisplay={setDisplay}
          sections={sections}
          setSections={setSections}
          type="rulebook-editor"
          img={map}
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
