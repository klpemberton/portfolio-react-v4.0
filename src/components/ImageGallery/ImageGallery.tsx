import React, { RefObject } from 'react';
import PhotoAlbum from 'react-photo-album';
import { GalleryPhoto } from '../../constants/galleryPhotos';

interface ImageGalleryProps {
  images: GalleryPhoto[];
  showGallery: boolean;
}

const ImageGallery = React.forwardRef(({ images, showGallery }: ImageGalleryProps, ref) => {
  const getColumns = (containerWidth: number) => {
    if (containerWidth >= 1500) return 4;
    if (containerWidth >= 900) return 3;
    if (containerWidth >= 500) return 2;
    return 1;
  };

  // const renderPhoto = ({
  //   photo,
  //   layout: { width, height },
  //   imageProps: { alt, style, ...rest }
  // }: RenderPhotoProps) => (
  //   <img
  //     {...rest}
  //     alt={alt}
  //     loading="lazy"
  //     src={photo.src}
  //     style={{
  //       ...style,
  //       objectFit: "cover",
  //     }}
  //     width={width}
  //     height={height}
  //   />
  // );

  return (
    <div ref={ref as RefObject<HTMLDivElement>}>
      {showGallery && (
        <PhotoAlbum
          layout="columns"
          photos={images}
          columns={getColumns}
          // renderPhoto={renderPhoto}
        />
      )}
    </div>
  );
});

ImageGallery.displayName = 'ImageGallery';
export default ImageGallery;
