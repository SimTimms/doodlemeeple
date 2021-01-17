import React from 'react';
import { MediaGallery } from '../../../../../../components';

export function MediaGalleryObjectProfile({
  images,
  setImages,
  galleryId,
  sectionType,
}) {
  images = images ? images : [];
  return (
    <div
      style={{
        width: '100%',
        marginTop: 15,
      }}
    >
      <MediaGallery
        items={images}
        setBgImage={(url) => {
          let imageArray = Object.assign([], images);
          imageArray.push({
            img: url,
          });
          setImages(imageArray);
        }}
        edit={true}
        setImages={setImages}
        galleryId={galleryId}
        sectionType={sectionType}
      />
    </div>
  );
}
