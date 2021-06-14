import React from 'react';
import {
  FieldTitleDashboard,
  Column,
  CardComponent,
  MediaGallery,
} from '../../../../components/sharedComponents';

import { checkLength } from '../../unlock';

export default function Section8({ setJob, job }) {
  function setImages(imageArray) {
    setJob({ ...job, gallery: { ...job.gallery, images: [...imageArray] } });
  }
  const locked =
    !checkLength(job.name, 'name') ||
    !checkLength(job.genre, 'genre') ||
    !checkLength(job.summary, 'summary') ||
    !checkLength(job.creativeSummary, 'creativeSummary') ||
    job.keywords.length === 0;
  return (
    <CardComponent locked={locked} lockedMsg="Reference Images">
      <FieldTitleDashboard name="Reference Images" />
      <Column>
        <MediaGallery
          items={job.gallery.images || []}
          edit={true}
          setImages={setImages}
          galleryId={job.gallery._id}
        />
      </Column>
    </CardComponent>
  );
}
