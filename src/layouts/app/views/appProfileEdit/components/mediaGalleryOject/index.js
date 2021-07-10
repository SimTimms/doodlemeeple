import React from 'react';
import { MediaGallery } from '../../../../../../components';

export function MediaGalleryObjectProfile({
  images,
  setImages,
  galleryId,
  sectionType,
  ...props
}) {
  images = images ? images : [];
  const { badges } = props;
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
        badges={badges}
      />
    </div>
  );
}
