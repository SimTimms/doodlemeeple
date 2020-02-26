import React from 'react';
import { MediaGallery } from '../../../../../../components/mediaGallery';

export function MediaGalleryObject({ images, setImages, index }) {
  return (
    <div
      style={{
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: 5,
        marginTop: 15,
      }}
    >
      <MediaGallery
        items={images.images}
        setItems={() => {
          let imageArray = Object.assign({}, images);
          imageArray.images.push({
            img: 'https://dm-uploads-uk.s3.amazonaws.com/purps',
          });
          setImages(imageArray);
        }}
        edit={true}
      />
    </div>
  );
}
