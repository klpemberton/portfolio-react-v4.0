import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SiteHead({
	title = 'Kristine Pemberton',
	description = '',
	noIndex
}) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				{noIndex && <meta name="robots" content="noindex" />}
				<meta
					name="apple-mobile-web-app-title"
					content="Kristine Pemberton"
				/>
				<meta name="application-name" content="Kristine Pemberton" />
				<meta
					name="msapplication-config"
					content="/static/browserconfig.xml"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Montserrat:600,900"
					rel="stylesheet"
				/>
			</Head>
		</>
	);
}

SiteHead.propTypes = {
	description: PropTypes.string,
	noIndex: PropTypes.bool,
	title: PropTypes.string
};
