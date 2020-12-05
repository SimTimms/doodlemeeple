import Resizer from 'react-image-file-resizer';

export default function resizeImage(file, w, h) {
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      w,
      h,
      'JPEG',
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      'base64'
    );
  });
}
