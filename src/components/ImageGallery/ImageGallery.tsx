import React, { RefObject } from 'react';
import Gallery, { RenderImageProps } from 'react-photo-gallery';
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

  const imageRenderer = ({ index, left, top, photo }: RenderImageProps) => (
    <img
      alt={photo.alt}
      height={photo.height}
      key={index}
      loading="lazy"
      src={photo.src}
      style={{ position: 'absolute', left, top }}
      width={photo.width}
    />
  );

  return (
    <div ref={ref as RefObject<HTMLDivElement>}>
      {showGallery && (
        <Gallery
          photos={images}
          direction="column"
          columns={getColumns}
          renderImage={imageRenderer}
        />
      )}
    </div>
  );
});

ImageGallery.displayName = 'ImageGallery';
export default ImageGallery;
