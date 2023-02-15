import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Scrollbar } from 'react-scrollbars-custom';

interface PageContent {
  children: ReactNode;
  pageTheme: string;
}

const Border = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  height: 82%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    left: 11vw;
    width: 88%;
    height: 100%;
  }
  padding: 20px;
  background: ${({ color, theme }) => theme.colors[color]};
`;

const ScrollbarSection = styled(Scrollbar)`
  width: 97%;
  height: 100%;
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
    width: calc(100% - 17px);
    height: 100%;

    && .ScrollbarsCustom-Scroller {
      margin-right: 0 !important;
    }
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
      background: ${({ color, theme }) =>
        color ? theme.colors[color] : theme.colors.home} !important;
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

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    padding: 3% 10% 1% 8%;
  }
`;

const PageContent = ({ children, pageTheme }: PageContent) => {
  return (
    <Border color={pageTheme === '_error' ? 'error' : pageTheme}>
      <ScrollbarSection noDefaultStyles color={pageTheme === '_error' ? 'error' : pageTheme}>
        <Wrapper>
          <Content>{children}</Content>
        </Wrapper>
      </ScrollbarSection>
    </Border>
  );
};

export default PageContent;
