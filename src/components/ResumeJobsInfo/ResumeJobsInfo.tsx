import React from 'react';
import styled from 'styled-components';
import {
  AdditionalJob as AdditionalJobType,
  JobsDataAdditional,
  JobsDataFeatured,
  ResumeData,
} from '../../constants/resumeData';
import JobDetails from './JobDetails';

const AdditionalHeading = styled.h4`
  margin: 40px 0 10px;
`;

const AdditionalJobs = styled.ul`
  margin: 0;
  padding-left: 0;
`;

const AdditionalJob = styled.li`
  display: block;
  margin-top: 3px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    display: flex;
  }
`;

const AdditionalJobTitle = styled.h5`
  margin: 0 0;
  font-size: 16px;
  text-transform: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile.maxWidth}px) {
    &:not(first-child) {
      margin-top: 10px;
    }
  }
`;

const Delineator = styled.div`
  margin: 0 10px;
  font-size: 24px;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile.maxWidth}px) {
    display: inline-block;
    margin: 0 10px 0 0;

    + span {
      display: inline-block;
    }
  }
`;

const Resume = () => (
  <section>
    <div role="tablist">
      {JobsDataFeatured.map(({ title, dates, details }: ResumeData) => {
        return (
          <JobDetails key={`${title}-${dates}`} title={title} dates={dates} details={details} />
        );
      })}
    </div>

    <AdditionalHeading>Additional Experience</AdditionalHeading>
    <AdditionalJobs>
      {JobsDataAdditional.map(({ title, company, location, dates }: AdditionalJobType) => {
        return (
          <AdditionalJob key={`${title}-${dates}`}>
            <AdditionalJobTitle>{title}</AdditionalJobTitle>
            <Delineator>&middot;</Delineator>
            <span>{company}</span>
            <br />
            <Delineator>&middot;</Delineator>
            <span>{location}</span>
            &nbsp; ({dates})
          </AdditionalJob>
        );
      })}
    </AdditionalJobs>
  </section>
);

export default Resume;
