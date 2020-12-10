export default function imageOptimiser(imageURL) {
  let optimisedImage = imageURL.replace(
    'https://dm-uploads-uk.s3.amazonaws.com/',
    'https://dm-upload-resize.s3.amazonaws.com/small/'
  );
  optimisedImage = optimisedImage.replace(
    'https://dm-test-bucket-0121.s3.amazonaws.com/',
    'https://dm-upload-resize.s3.amazonaws.com/small/'
  );

  const image = new Image();
  let error = false;
  image.src = optimisedImage;
  image.onerror = () => (error = true);
  return error ? imageURL : optimisedImage;
}
