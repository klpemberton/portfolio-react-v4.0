import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { JobsFeatured, JobsAdditional } from './resumeData';
import { FaChevronCircleRight } from 'react-icons/fa';
import { desktop, mobile } from '../../styles/theme';

const ResumeContent = styled.section``;

const Jobs = styled.div``;

const Icon = styled.div``;

const Details = styled.div`
	visibility: hidden;

	transition: 0.2s ease-in-out all;
`;

const JobDetails = styled.div`
	${(props) => (props.isOpen ? 'height: 100%;' : 'height: 0;')}
	transition: 0.2s ease-in-out all;

	${Details} {
		transform-origin: top;
		${(props) =>
			props.isOpen
				? 'visibility: visible; transform: scaleY(100%);'
				: 'visibility: hidden; transform: scaleY(0);'}
	}
`;

const JobItem = styled.div`
	border-bottom: 2px solid ${(props) => props.theme.colors.home};

	${Icon} {
		svg {
			transform: rotate(0deg);
			transition: 0.2s ease-in-out all;
			${(props) => props.isOpen && 'transform: rotate(90deg); '}
		}
	}
`;

const JobHeading = styled.button`
	display: flex;
	align-items: center;
	width: 100%;
	padding-bottom: 0;
	background: transparent;
	border: none;
	cursor: pointer;

	${mobile`
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 10px;
  `}
`;

const JobTitle = styled.h4`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-left: 10px;

	${mobile`
    display: block;
    margin: -3px 20px 0;
    text-align: left;
  `}

	span {
		display: block;
		&:first-child {
			margin-bottom: 5px;
		}
	}
`;

const Italic = styled.div`
	margin: 15px 0 10px;
	font-style: italic;
`;

const Accomplishments = styled.ul`
	margin: 5px 0 20px;
`;

const Accomplishment = styled.li`
	margin: 5px 0;
`;

const AdditionalHeading = styled.h4`
	margin: 40px 0 10px;
`;

const AdditionalJobs = styled.ul`
	margin: 0;
	padding-left: 0;
`;

const AdditionalJob = styled.li`
	display: block;
	${desktop`display: flex;`}
	margin-top: 3px;
`;

const AdditionalJobTitle = styled.h5`
	margin: 0 0;
	font-size: 16px;
	text-transform: none;

	${mobile`
    &:not(first-child) {
      margin-top: 10px;
    }
  `}
`;

const Delineator = styled.div`
	margin: 0 10px;
	font-size: 24px;
	line-height: 1;

	${mobile`
    display: inline-block;
    margin: 0 10px 0 0;

    + span {
      display: inline-block;
    }
  `}
`;

const Education = styled.div``;

function Job({ job }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((isOpen) => !isOpen);
	}, []);

	return (
		<JobItem role="tab" isOpen={isOpen}>
			<JobHeading
				onClick={toggleOpen}
				role="button"
				aria-label={`Toggle details for job: ${job.title}`}
			>
				<Icon>
					<FaChevronCircleRight size={18} />
				</Icon>

				<JobTitle>
					<span>{job.title}</span>
					<span>{job.dates}</span>
				</JobTitle>
			</JobHeading>

			<JobDetails isOpen={isOpen} role="tabpanel" aria-expanded={isOpen}>
				{job.details.map((role, index) => {
					return (
						<Details key={index}>
							{role.summary}
							<br />
							<Italic>Selected Accomplishments:</Italic>

							<Accomplishments>
								{role.accomplishments.map((accomplishment) => {
									return (
										<Accomplishment key={accomplishment}>
											{accomplishment}
										</Accomplishment>
									);
								})}
							</Accomplishments>
						</Details>
					);
				})}
			</JobDetails>
		</JobItem>
	);
}

Job.propTypes = {
	job: PropTypes.object
};

export default function Resume() {
	return (
		<ResumeContent>
			<Jobs role="tablist">
				{JobsFeatured.map((job, index) => {
					return <Job key={index} job={job} />;
				})}
			</Jobs>

			<AdditionalHeading>Additional Experience</AdditionalHeading>
			<AdditionalJobs>
				{JobsAdditional.map((job) => {
					return (
						<AdditionalJob key={job.title}>
							<AdditionalJobTitle>{job.title}</AdditionalJobTitle>
							<Delineator>&middot;</Delineator>
							<span>{job.company}</span>
							{mobile && <br />}
							<Delineator>&middot;</Delineator>
							<span>{job.location}</span>
							&nbsp; ({job.dates})
						</AdditionalJob>
					);
				})}
			</AdditionalJobs>

			<Education />
		</ResumeContent>
	);
}
