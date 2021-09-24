import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';

export default function ImageGallery({ images }) {
	const columns = (containerWidth) => {
		let columns = 1;
		if (containerWidth >= 500) {
			columns = 2;
		}
		if (containerWidth >= 900) {
			columns = 3;
		}
		if (containerWidth >= 1500) {
			columns = 4;
		}
		return columns;
	};

	return <Gallery photos={images} direction="column" columns={columns} />;
}

ImageGallery.propTypes = {
	images: PropTypes.array
};
