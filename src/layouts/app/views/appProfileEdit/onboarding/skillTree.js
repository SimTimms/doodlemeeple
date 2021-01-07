import React from 'react';
import { useStyles } from './styles';
import { Typography, Icon } from '@material-ui/core';
import { Column, Row, IconButton } from '../../../../../components';

export default function SkillTree({ profile, setProfile }) {
  const classes = useStyles();
  const [xp, setXp] = React.useState(5);
  const [skills, setSkills] = React.useState({ image3: false });

  function spendXP(cost, setSkill) {
    const newSkills = { ...skills };
    newSkills[setSkill] = true;
    xp >= cost && setSkills({ ...newSkills });
    setXp(xp < cost ? xp : xp - cost);
  }
  function ClassButton({ title, icon, on, onClickEvent, cost }) {
    return (
      <div
        onClick={onClickEvent}
        style={{
          border: '1px dashed #fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 50,
          maxHeight: 50,
          minWidth: 50,
          maxWidth: 50,
          borderRadius: 5,
          margin: 5,
          cursor: 'pointer',
          background: on ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)',
        }}
        title={title}
      >
        <Column>
          <Icon style={{ color: '#fff' }}>{on ? icon : 'lock'}</Icon>
          <Typography style={{ fontSize: 10, color: '#fff' }} align="center">
            {title}
          </Typography>
          <Typography style={{ fontSize: 10, color: '#fff' }} align="center">
            {`${cost ? cost : 0}XP`}
          </Typography>
        </Column>
      </div>
    );
  }

  return (
    <Column>
      {xp}
      <Row a="flex-start">
        <ClassButton title="Creator" icon="work" on={false} />
        <Column b="1px solid rgba(255,255,255,0.2)" br={5} p={5}>
          <ClassButton title="Creative" icon="brush" on={false} />
          <Row a="flex-start">
            <Column>
              <ClassButton title="3D" icon="lock" on={false} />
              <Column b="1px solid rgba(255,255,255,0.2)" br={5} p={5} w="none">
                <Row a="flex-start">
                  <Column>
                    <ClassButton
                      title="3 Images"
                      cost={1}
                      icon="image_gallery"
                      on={skills.image3}
                      onClickEvent={() => spendXP(1, 'image3')}
                    />
                    <ClassButton
                      title="6 Images"
                      cost={2}
                      icon="image_gallery"
                      on={skills.image6}
                      onClickEvent={() => spendXP(2, 'image6')}
                    />
                    <ClassButton
                      title="Video"
                      cost={4}
                      icon="youtube"
                      on={skills.video}
                      onClickEvent={() => spendXP(4, 'video')}
                    />
                  </Column>
                  <ClassButton title="Projects" icon="lock" on={false} />
                  <ClassButton title="Reviews" icon="lock" on={false} />
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
        <ClassButton title="Marketing" on={false} />
        <ClassButton title="Campaign" on={false} />
        <ClassButton title="Development" on={false} />
      </Row>
    </Column>
  );
}
