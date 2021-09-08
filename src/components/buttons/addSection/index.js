import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import clsx from 'clsx';
import SectionList from './sectionList';
import { MenuButtonStandard, Column, DividerMini } from '../../';

function AddSection({ setSections, sections, userType, ...props }) {
  const [display, setDisplay] = React.useState(false);
  const classes = useStyles();
  const { badges } = props;
  const maxSkill = badges
    ? badges.filter((badge) => badge.badgeType === 'golden').length > 0
      ? 6
      : 3
    : 3;

  return (
    <Column>
      <DividerMini />
      <MenuButtonStandard
        title={`Add a Skill (${maxSkill - sections.length})`}
        onClickEvent={() => (display ? setDisplay(false) : setDisplay(true))}
        styleOverride={{ marginLeft: 'auto', marginRight: 'auto' }}
        icon="brush"
      />
      <DividerMini />

      <SectionList
        display={display}
        setDisplay={setDisplay}
        setSections={setSections}
        sections={sections}
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
    </Column>
  );
}

export default AddSection;
