import React from 'react';
import { MediaGallery } from '../../../../../../components';

export function MediaGalleryObject({ images, setImages, index }) {
  images = images ? images : [];
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
        items={images}
        setBgImage={url => {
          let imageArray = Object.assign([], images);
          imageArray.push({
            img: url,
          });
          setImages(imageArray);
        }}
        edit={true}
        setImages={setImages}
      />
    </div>
  );
}
