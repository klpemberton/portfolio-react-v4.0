import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PageContent from '../src/components/PageContent';
import ImageGallery from '../src/components/ImageGallery';
import useIntersectionObserver from '../src/hooks/useIntersectionObserver';

const photos = [
  {
    src: '/bira.png',
    width: 4,
    height: 3,
  },
  {
    src: '/longslanding.jpg',
    width: 3,
    height: 5,
  },

  {
    src: '/salad.jpg',
    width: 4,
    height: 3,
  },

  {
    src: '/vance.png',
    width: 3,
    height: 3,
  },
  {
    src: '/vintwearhouse.png',
    width: 5,
    height: 3,
  },
  {
    src: '/eldercare.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '/dancecircus.jpg',
    width: 4,
    height: 3,
  },
  {
    src: '/walters.png',
    width: 5,
    height: 3,
  },
];

const Heading = styled.h1`
  margin: 10px 0 30px;
  font-size: 34px;
  border-bottom: 3px solid black;

  span {
    border-bottom: 10px solid ${(props) => props.theme.colors.portfolio};
  }
`;

const Paragraph = styled.p``;

const Subheading = styled.h2`
  width: 65%;
  margin: 40px auto 20px;
  text-align: center;

  span {
    border-bottom: 6px solid ${(props) => props.theme.colors.portfolio};
  }
`;

const WebItem = styled.div`
  margin-top: 40px;
`;

const WebItemName = styled.h3``;

const WebItemLink = styled.a`
  color: black;
  text-decoration: none;
  border-bottom: 3px solid ${(props) => props.theme.colors.portfolio};
`;

const WebItemLinkSmall = styled(WebItemLink)`
  display: inline-block;
  margin-bottom: 10px;
  font-weight: 700;
`;

const WebItemInfo = styled.div`
  margin-left: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    margin-left: 40px;
  }
`;

const options = {
  root: null,
  rootMargin: '100px',
  threshold: 0.5,
};

export default function PortfolioPage() {
  const [showGallery, setShowGallery] = useState<boolean>(false);
  const galleryRef = useRef<Element | null>();
  const observer = useIntersectionObserver(options, galleryRef);

  useEffect(() => {
    if (observer?.isIntersecting) {
      setShowGallery(true);
    }
  }, [observer]);

  return (
    <PageContent pageTheme="portfolio">
      <Heading>
        <span>Portfolio</span>
      </Heading>

      <Subheading>
        <span>Ecology</span>
      </Subheading>
      <Paragraph>
        I am passionate about restoring native ecosystems, protecting watersheds, preserving
        old-growth forests, and saving the salmon.
      </Paragraph>

      <WebItem>
        <WebItemName>
          <WebItemLink
            href="https://storymaps.arcgis.com/stories/aee7fb7fbdd74407bf447101ae7d76c0"
            target="_blank"
          >
            Steigerwald National Wildlife Refuge - Washougal, WA
          </WebItemLink>
        </WebItemName>

        <WebItemInfo>
          <WebItemLinkSmall href="https://www.instagram.com/p/Cl39Nmtp689/" target="_blank">
            December 3, 2022
          </WebItemLinkSmall>{' '}
          •{' '}
          <WebItemLinkSmall href="https://www.instagram.com/p/CoF5h9CvTvQ/" target="_blank">
            January 28, 2023
          </WebItemLinkSmall>{' '}
          •{' '}
          <WebItemLinkSmall
            href="https://estuarypartnership.app.neoncrm.com/np/clients/estuarypartnership/event.jsp?event=317"
            target="_blank"
          >
            March 11, 2023
          </WebItemLinkSmall>
          <br />
          Volunteering with The Lower Columbia Estuary Partnership to plant native trees snd shrubs
          to enhance native habitat and improve the water quality of Gibbons Creek during the final
          year of this amazing project, the largest ever restoration project on the lower Columbia
          River.
        </WebItemInfo>
      </WebItem>

      <WebItem>
        <WebItemName>
          <WebItemLink href="https://www.instagram.com/p/CfeVFc3hxyl/" target="_blank">
            Beaver Marsh Park - Vancouver, WA
          </WebItemLink>
        </WebItemName>

        <WebItemInfo>
          Volunteered with The Watershed Alliance for removal of English ivy and holly along Burnt
          Bridge Creek.
        </WebItemInfo>
      </WebItem>

      <WebItem>
        <WebItemName>
          <WebItemLink href="https://www.instagram.com/p/Cc4CxLbBF-A/" target="_blank">
            Mable Kerr Park - Washougal, WA
          </WebItemLink>
        </WebItemName>

        <WebItemInfo>
          Volunteered with the Lower Columbia Estuary Partnership for removal of Himalayan
          blackberry, English ivy, and other invasives along Campen Creek.
        </WebItemInfo>
      </WebItem>

      <WebItem>
        <WebItemName>
          <WebItemLink>Skamania County, WA</WebItemLink>
        </WebItemName>

        <WebItemInfo>
          Ongoing removal of Himalayan blackberry, English ivy, Herb Robert, tansy, thistle, and
          other invasives on 3+ acre personal property. This removal is allowing existing native
          plants to thrive and repopulate. Includes monitoring and preservation of 2+ acres of
          non-virgin old-growth forest and restoration of 1+ acre of second-growth forest.
        </WebItemInfo>
      </WebItem>

      <Subheading>
        <span>Web</span>
      </Subheading>
      <Paragraph>
        In my day job I&apos;m a full-time Software Engineer, but I&apos;ve also done some freelance
        work on the side.
      </Paragraph>
      <WebItem>
        <WebItemName>
          <WebItemLink href="https://kristinepemberton.com" target="_blank">
            kristinepemberton.com
          </WebItemLink>
        </WebItemName>

        <WebItemInfo>
          <strong>Tools Used:</strong> React 18.0, Next.js
          <br />
          <strong>Summary:</strong> You are here! This is my personal portfolio site and testing
          ground for new technologies and ideas.
        </WebItemInfo>
      </WebItem>

      <WebItem>
        <WebItemName>
          <WebItemLink href="https://sloacademy.com" target="_blank">
            SLO Academy
          </WebItemLink>
        </WebItemName>

        <WebItemInfo>
          <strong>Tools Used:</strong> JavaScript, PHP
          <br />
          <strong>Summary:</strong> SLO Academy provides professional tutoring and test prep
          services in SLO County and online.
        </WebItemInfo>
      </WebItem>

      <WebItem>
        <WebItemName>
          <WebItemLink href="http://monroeprosecutor.us" target="_blank">
            Monroe County Prosecutor
          </WebItemLink>
        </WebItemName>

        <WebItemInfo>
          <strong>Tools Used:</strong> WordPress
          <br />
          <strong>Summary:</strong> The official website of the Monroe County Prosecutor, Monroe
          County, Indiana.
        </WebItemInfo>
      </WebItem>

      <Subheading>
        <span>Print</span>
      </Subheading>
      <Paragraph>
        I&apos;ve also dabbled in PhotoShop and InDesign. Here&apos;s some stuff I&apos;ve designed
        for print media.
      </Paragraph>

      <ImageGallery images={photos} ref={galleryRef} showGallery={showGallery} />
    </PageContent>
  );
}
