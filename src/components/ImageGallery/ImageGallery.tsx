import React, { RefObject } from 'react';
import Gallery from 'react-photo-gallery';
import { GalleryPhoto } from '../../constants/galleryPhotos';

interface ImageGalleryProps {
  images: GalleryPhoto[];
  showGallery: boolean;
}

const ImageGallery = React.forwardRef(({ images, showGallery }: ImageGalleryProps, ref) => {
  const getColumns = (containerWidth: number) => {
    if (containerWidth >= 1500) {
      return 4;
    } else if (containerWidth >= 900) {
      return 3;
    } else if (containerWidth >= 500) {
      return 2;
    }

    return 1;
  };

  return (
    <div ref={ref as RefObject<HTMLDivElement>}>
      {showGallery && <Gallery photos={images} direction="column" columns={getColumns} />}
    </div>
  );
});

ImageGallery.displayName = 'ImageGallery';
export default ImageGallery;
