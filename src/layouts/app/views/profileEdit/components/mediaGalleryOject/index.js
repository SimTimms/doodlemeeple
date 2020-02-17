import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import jumping from '../../../../../../assets/jumping.jpg';
import CardContent from '@material-ui/core/CardContent';
import { MediaGallery } from '../../../../../../components/mediaGallery';

export function MediaGalleryObject({ gallery, sections, setSections, index }) {
  return (
    <CardContent>
      <Typography color="textSecondary" component="p">
        Summary
      </Typography>
      <TextField
        id={'summary'}
        label={'Summary'}
        value={gallery.summary}
        onChange={e => {
          let newGallery = Object.assign({}, gallery);
          let newSections = Object.assign([], sections);
          newGallery.summary = e.target.value;
          newSections.splice(index, 1, { gallery: newGallery });
          setSections(newSections);
        }}
        margin="normal"
        variant="outlined"
        style={{ width: '100%' }}
      />
      <Typography color="textSecondary" component="p">
        Upload Images
      </Typography>
      <MediaGallery
        items={gallery.images}
        setItems={() => {
          let newGallery = Object.assign({}, gallery);
          let newSections = Object.assign([], sections);
          newGallery.images.push({
            img: jumping,
            title: 'Image',
            author: 'author',
            cols: 1,
          });
          newSections.splice(index, 1, { gallery: newGallery });
          setSections(newSections);
        }}
        edit={true}
      />
    </CardContent>
  );
}
