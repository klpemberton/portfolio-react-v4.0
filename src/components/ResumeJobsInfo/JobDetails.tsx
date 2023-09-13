import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { JobDetails as JobDetail, ResumeData } from '../../constants/resumeData';

const Icon = styled.span``;

const Details = styled.div`
  padding-left: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    padding-left: 0;
  }
`;

const DetailsContainer = styled.div<{ isOpen?: boolean }>`
  transform-origin: top;
  ${({ isOpen }) =>
    isOpen ? 'transform: scaleY(100%); transition: 0.1s linear all;' : 'transform: scaleY(0);'}
`;

const JobItem = styled.div<{ isOpen: boolean }>`
  height: 110px;

  ${({ isOpen, theme }) => `
    @media (min-width: ${theme.breakpoints.desktop.minWidth}px) {
      height: 65px;
    }
    ${isOpen ? `&& { height: auto; }` : ``}
    border-bottom: 2px solid ${theme.colors.home};
    overflow: hidden;

    ${Icon} {
      transform: rotate(0deg);
      transform: translateY(-5px);
      transition: 0.1s ease-in-out all;
      ${isOpen ? `transform: rotate(90deg);` : ``}
    }
`}
`;

const JobHeading = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 0 10px;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    height: auto;
  }
`;

const JobTitle = styled.h4`
  display: block;
  width: 100%;
  margin: -3px 0 0 20px;
  font-size: 13px;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    font-size: 16px;
  }

  span {
    display: block;
  }
`;

const CompanyInfo = styled.div`
  margin-bottom: 10px;
  font-weight: 700;
`;

const Summary = styled.p`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    font-size: 16px;
  }
`;

const Italic = styled.div`
  margin: 20px 0 10px;
  font-style: italic;
`;

const Accomplishments = styled.ul`
  margin: 5px 0 20px;
`;

const Accomplishment = styled.li`
  margin: 5px 0;
`;

const JobDetails = ({ title, dates, details }: ResumeData) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  return (
    <JobItem role="tab" isOpen={isOpen}>
      <JobHeading
        onClick={toggleOpen}
        role="button"
        aria-label={`Toggle details for job: ${title}`}
      >
        <Icon>👉</Icon>

        <JobTitle>
          <span>{title}</span>
          <span>{dates}</span>
        </JobTitle>
      </JobHeading>

      <DetailsContainer isOpen={isOpen} role="tabpanel" aria-expanded={isOpen}>
        {details.map(({ company, location, summary, accomplishments }: JobDetail) => {
          return (
            <Details key={`${company}-${location}`}>
              <CompanyInfo>
                <p>
                  {company} - {location}
                </p>
              </CompanyInfo>
              <Summary>{summary}</Summary>
              <Italic>Selected Accomplishments:</Italic>

              <Accomplishments>
                {accomplishments.map((accomplishment: string) => {
                  return <Accomplishment key={accomplishment}>{accomplishment}</Accomplishment>;
                })}
              </Accomplishments>
            </Details>
          );
        })}
      </DetailsContainer>
    </JobItem>
  );
};

export default JobDetails;
