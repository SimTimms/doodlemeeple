import React, { useEffect } from 'react';
import { Divider, TextField, Typography, Icon } from '@material-ui/core';
import { MediaGalleryObject } from '../../mediaGalleryOject';
import ReactPlayer from 'react-player';
import autosave from '../../../../../../../utils/autosave';
import { ToastContainer, toast } from 'react-toastify';
import { useStyles } from './styles';
import { FieldTitle } from '../fieldTitle';
import { NotableProject } from '../../notableProject';
import { AddNotableProject } from '../../notableProject/addButton';
import Testimonials from '../../testimonials';
import { TYPE_HELPER } from '../../../../../../../utils';

function GallerySection({ section }) {
  const classes = useStyles();
  console.log(section);

  const {
    summary,
    gallery,
    notableProjects,
    testimonials,
    showreel,
    type,
  } = section;

  console.log(gallery);

  return (
    <div>
      <Divider />
      <ToastContainer />

      <div className={classes.sectionWrapper}>
        <div className={classes.sectionHeader}>
          <Typography variant="h5" style={{ width: '100%' }}>
            {type}
          </Typography>
          <Typography variant="body1" component="p" style={{ paddingTop: 10 }}>
            {summary}
          </Typography>
          {gallery.images.map((item) => {
            return <img src={`${item.img}`} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
