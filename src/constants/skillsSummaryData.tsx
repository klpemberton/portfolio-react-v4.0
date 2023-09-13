export interface SkillsSummaryDataItem {
  icon: string;
  type: string;
  data: string[];
}

export const skillsSummaryData: SkillsSummaryDataItem[] = [
  {
    icon: '⚛️',
    type: 'Front End',
    data: [
      'JavaScript, React, TypeScript, GraphQL',
      'Unit, Integration, & E2E Testing',
      'Git, Yarn, npm, Gulp, Webpack, Jenkins',
      'Shared Component Architecture',
    ],
  },
  {
    icon: '👩‍💻',
    type: 'Full Stack',
    data: [
      'Node.js, TypeScript, SQL',
      'API Design & Development',
      'AWS: S3, Lambda, API Gateway, CloudFront',
      'Microservices',
    ],
  },
  {
    icon: '👩‍🏫',
    type: 'Leadership',
    data: ['Project & Team Lead', 'Code Review', 'Onboarding & Mentoring', 'Pair Programming'],
  },
];
