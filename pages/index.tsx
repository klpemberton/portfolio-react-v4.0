import React from 'react';
import styled from 'styled-components';
import PageContent from '../src/components/PageContent';
import ResumeJobsInfo from '../src/components/ResumeJobsInfo';
import { useRouter } from 'next/router';
import { SkillsSummaryDataItem, skillsSummaryData } from '../src/constants/skillsSummaryData';

const Heading = styled.h1`
  margin: 10px 0;
  text-align: center;

  span {
    border-bottom: 10px solid ${(props) => props.theme.colors.home};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    line-height: 55px;
  }
`;

const Subheading = styled.h2`
  width: 100%;
  margin: 30px auto;
  text-align: center;
  line-height: 1.69;
  border-bottom: none;

  span {
    border-bottom: 6px solid ${(props) => props.theme.colors.home};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    margin: 50px auto 0;
    line-height: 45px;
  }
`;

const HeadingNoUnderline = styled.h3`
  text-align: center;
`;

const IntroHeadingNoUnderline = styled(HeadingNoUnderline)`
  margin-top: 40px;
`;

const SmallHeadingNoUnderline = styled.h4`
  text-align: center;
`;

const VerySmallHeadingNoUnderline = styled.h5`
  font-size: 14px;
`;

const Paragraph = styled.p`
  margin: 25px 0;
`;

const Columns = styled.section`
  display: block;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    display: flex;
    flex-wrap: nowrap;
  }
`;

const List = styled.ul`
  margin-top: 0;
  padding-left: 0;
  flex: 1 1 auto;
  list-style-type: '✔️';

  &:first-child {
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile.maxWidth}px) {
      margin-bottom: 0;
    }
  }
  &:nth-child(2) {
    margin-top: 15px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
      margin: 0 1em;
    }
  }
`;

const ListHeading = styled.span<{ icon: string }>`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  margin: 0 0 15px;
  padding: 2px 0 4px;
  font-weight: bold;
  border-bottom: 3px solid ${(props) => props.theme.colors.home};

  > span {
    width: 100%;
  }

  > span:nth-child(1) {
    width: 40px;
    ${({ icon }) => icon !== '🖧' && `margin-right: 10px;`};
    font-size: 24px;
    font-weight: normal;
  }

  > span:nth-child(2) {
    font-size: 18px;
  }
`;

const ListItem = styled.li`
  margin-top: 3px;
  margin-left: 20px;
  padding-left: 10px;
`;

const Education = styled.div`
  width: 100%;
  margin: 0 auto 2em;
  text-align: center;

  ${HeadingNoUnderline} {
    margin: 17px 0 0;
  }

  ${SmallHeadingNoUnderline} {
    margin: 5px 0 0;
  }

  ${VerySmallHeadingNoUnderline} {
    margin: 5px 0 0;
  }
`;

export default function HomePage() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <PageContent pageTheme={pathname === '/' ? 'home' : pathname.substring(1)}>
      <Heading>
        <span>Kristine Pemberton</span>
      </Heading>
      {/* <Subheading>
        <span>Senior Front End Software Engineer</span>
      </Subheading> */}

      <IntroHeadingNoUnderline>
        13 years of experience developing and maintaining front end codebases within the full
        software development lifecycle.
      </IntroHeadingNoUnderline>

      <Paragraph>
        Fluent in various front end languages and related technologies; experienced with numerous
        frameworks, templating engines, and build systems; proven to be adaptable in learning new
        languages and methodologies. Reliable self-starter with excellent communication skills and
        demonstrated ability to thrive in a remote engineering team environment.
      </Paragraph>

      <SmallHeadingNoUnderline>Areas of Expertise:</SmallHeadingNoUnderline>

      <Columns>
        {skillsSummaryData.map(({ type, icon, data }: SkillsSummaryDataItem) => {
          return (
            <List key={type}>
              <ListHeading icon={icon}>
                <span>{icon}</span> <span>{type}</span>
              </ListHeading>
              {data.map((bulletText: string) => (
                <ListItem key={bulletText}>{bulletText}</ListItem>
              ))}
            </List>
          );
        })}
      </Columns>

      <Subheading>
        <span>Professional Experience</span>
      </Subheading>
      <ResumeJobsInfo />

      <Education>
        <Subheading>
          <span>Education</span>
        </Subheading>

        <HeadingNoUnderline>
          Computer Information Systems: Database &amp; Web Management
        </HeadingNoUnderline>

        <SmallHeadingNoUnderline>Associate of Applied Science</SmallHeadingNoUnderline>

        <VerySmallHeadingNoUnderline>
          IVY TECH COMMUNITY COLLEGE OF INDIANA, BLOOMINGTON, IN
        </VerySmallHeadingNoUnderline>
      </Education>
    </PageContent>
  );
}
