import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import clsx from 'clsx';
import SectionList from './sectionList';
import { IconButton } from '../../';

function AddSection({ setSections, sections, userType }) {
  const [display, setDisplay] = React.useState(false);
  const classes = useStyles();
  return (
    <div>
      <IconButton
        title={`Add a Skill (${3 - sections.length})`}
        likeSound={true}
        onClickEvent={() => (display ? setDisplay(false) : setDisplay(true))}
        styleOverride={{ marginLeft: 'auto', marginRight: 'auto' }}
        icon="brush"
      />
      <SectionList
        display={display}
        setDisplay={setDisplay}
        setSections={setSections}
        sections={sections}
        userType={userType}
      />
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
