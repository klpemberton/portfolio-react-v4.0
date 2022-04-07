import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PageContent from '../src/components/PageContent';
import ImageGallery from '../src/components/ImageGallery';
import useIntersectionObserver from '../src/hooks/useIntersectionObserver';
import { galleryPhotos } from '../src/constants/galleryPhotos';

const Heading = styled.h1`
  margin: 10px 0 30px;
  font-size: 34px;
  border-bottom: 3px solid black;

  span {
    border-bottom: 10px solid ${(props) => props.theme.colors.about};
  }
`;

const Content = styled.div`
  display: block;
  margin-bottom: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Paragraph = styled.p`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    margin: 10px 30px 20px 0;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.about};
  text-decoration: none;
`;

const options = {
  root: null,
  rootMargin: '100px',
  threshold: 0.5,
};

export default function AboutPage() {
  const [showGallery, setShowGallery] = useState(false);
  const galleryRef = useRef<Element | null>();
  const observer = useIntersectionObserver(options, galleryRef);

  useEffect(() => {
    if (observer?.isIntersecting) {
      setShowGallery(true);
    }
  }, [observer]);

  return (
    <PageContent pageTheme="about">
      <Heading>
        <span>About Me</span>
      </Heading>

      <Content>
        <Paragraph>
          I&apos;m Kristine and I&apos;m a web developer. I began creating websites as a little kid.
          Here&apos;s my very first site,&nbsp;
          <Link href="http://geocities.ws/purrfectpetzplace/" target="_blank">
            Purrfect Petz Place
          </Link>
          , based on the old Petz PC games (turn on your ad blocker! Someone mirrored the Geocities
          servers long ago and flooded all the sites with ads).
        </Paragraph>

        <Paragraph>
          Making websites is still essentially what I do today, with 12 years of hands-on
          professional experience at large corporations based in Bloomington, Indiana and San Luis
          Obispo, Los Angeles, and San Mateo, California. I&apos;m currently a full-time remote
          Senior Front End Software Engineer for a femtech comapny called Favor.
        </Paragraph>

        <Paragraph>
          I am at my happiest when spending time with animals and nature. I love anything to do with
          the great outdoors, and am currently obsessed with mountains and mountaineering. I love to
          travel, and in the last 4 years have resided in Morro Bay, California; Spokane,
          Washington; and now Washougal, Washington in the beautiful Columbia River Gorge National
          Scenic Area.
        </Paragraph>
      </Content>

      <ImageGallery images={galleryPhotos} ref={galleryRef} showGallery={showGallery} />
    </PageContent>
  );
}
