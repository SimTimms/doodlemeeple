import React from 'react';
import Icon from '@material-ui/core/Icon';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './styles';
import smithy from '../../../../../assets/smithy.jpg';
import { FormInput } from '../../../../../components';

export function ProjectHeader({ profile, setPrimaryImage, primaryImage }) {
  const classes = useStyles();

  const addImage = !primaryImage ? (
    <Icon
      className={classes.imageIcon}
      onClick={() => {
        setPrimaryImage(smithy);
      }}
    >
      add_photo_alternate
    </Icon>
  ) : (
    <Icon
      className={classes.imageIcon}
      onClick={() => {
        setPrimaryImage(smithy);
      }}
    >
      add_photo_alternate
    </Icon>
  );

  return (
    <div
      className={classes.wrapper}
      style={{ backgroundImage: `url(${primaryImage})` }}
    >
      {addImage}
      <div
        style={{
          position: 'relative',
        }}
      >
        <CardMedia
          component="img"
          alt="Profile Photo"
          height="140"
          image={profile.profileImg}
          title="Profile Photo"
          className={classes.cardMedia}
        />
      </div>
    </div>
  );
}

export function ProjectComponent({ fieldValue, setFieldValue, title, width }) {
  const classes = useStyles();

  return (
    <div className={classes.profileWrapper} style={{ width: width }}>
      <FormInput
        fieldName={'title'}
        fieldTitle={title}
        fieldValue={fieldValue}
        setFieldValue={setFieldValue}
        style={{ width: '100%' }}
      />

      <Icon className={classes.galleryIcon}>edit</Icon>
    </div>
  );
}
