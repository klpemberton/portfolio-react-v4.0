import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Scrollbar } from 'react-scrollbars-custom';
import { desktop, mobile } from '../../styles/theme';

const contentSlideDesktop = keyframes`
  from { width: 0%; }
    to {
      width: 84%;
      transform: translateX(0%);
    }
  }
`;

const contentSlideMobile = keyframes`
  from { height: 0%; }
	to {
		height: 92%;
		transform: translateY(0%);
	}
`;

const Border = styled.div`
	position: relative;
	${desktop`
    left: 12%;
    width: 88%;
    height: 100%;
  `}
	${mobile`
    left: 0;
    width: 100%;
    height: 82%;
  `}
	padding: 20px;
	background: ${(props) => props.theme.colors[props.color]};
	${desktop`animation: ${contentSlideDesktop} .35s linear;`}
	${mobile`animation: ${contentSlideMobile} .35s linear;`}
`;

const ScrollbarSection = styled(Scrollbar)`
	width: 97%;
	height: 100%;
	${desktop`animation: ${contentSlideDesktop} .2s linear;`}
	${mobile`animation: ${contentSlideMobile} .2s linear;`}
	background: white;
	color: black;

	.ScrollbarsCustom {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.ScrollbarsCustom-Wrapper {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}

	.ScrollbarsCustom-TrackY {
		position: absolute;
		top: 0;
		right: 0;
		overflow: hidden;
		width: 20px;
		height: 100%;
		opacity: 0.5;

		.ScrollbarsCustom-ThumbY {
			width: 100%;
			height: 211px;
			transform: translateY(0px);
			touch-action: none;
			cursor: pointer;
			background: ${(props) =>
				props.color
					? props.theme.colors[props.color]
					: props.theme.colors.home} !important;
		}
	}

	.ScrollbarsCustom-Content {
		width: 100%;
		height: 100%;
	}
`;

const Wrapper = styled.article`
	position: relative;
	width: 100%;
	height: 100%;
	z-index: 8;
`;

const Content = styled.div`
	padding: 30px 45px 30px 30px;
	${desktop`padding: 3% 10% 1% 8%;`}
`;

export default function PageContent({ children, pageTheme }) {
	return (
		<Border color={pageTheme === '_error' ? 'error' : pageTheme}>
			<ScrollbarSection
				noDefaultStyles
				color={pageTheme === '_error' ? 'error' : pageTheme}
			>
				<Wrapper>
					<Content>{children}</Content>
				</Wrapper>
			</ScrollbarSection>
		</Border>
	);
}

PageContent.propTypes = {
	children: PropTypes.node,
	pageTheme: PropTypes.string
};
