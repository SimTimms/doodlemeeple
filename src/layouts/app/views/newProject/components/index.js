import React from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './styles';
import smithy from 'src/assets/smithy.jpg';
import { Form, FormInput } from 'src/components/form';

export function ProjectHeader({ profile }) {
  const classes = useStyles();
  const [image, setImage] = React.useState('');

  const addImage = !image ? (
    <Icon
      className={classes.imageIcon}
      onClick={() => {
        setImage(smithy);
      }}
    >
      add_photo_alternate
    </Icon>
  ) : (
    <Icon
      className={classes.imageIcon}
      onClick={() => {
        setImage(smithy);
      }}
    >
      add_photo_alternate
    </Icon>
  );

  return (
    <div
      className={classes.wrapper}
      style={{ backgroundImage: `url(${image})` }}
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
export function GalleryHeader({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.galleryWrapper}>
      <Typography gutterBottom variant="h5">
        {title}
      </Typography>
      <Icon className={classes.galleryIcon}>edit</Icon>
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
