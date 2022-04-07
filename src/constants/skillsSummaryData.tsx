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
      'JavaScript, React, Redux, Vue.js, TypeScript',
      'API Integration',
      'Git, yarn, npm, Gulp, Webpack, Jenkins',
      'Shared Component Architecture',
    ],
  },
  {
    icon: '👩‍💻',
    type: 'Back End',
    data: [
      'Node.js, TypeScript',
      'API Design & Development',
      'AWS: S3, Lambda, API Gateway, CloudFront',
      'Microservices',
    ],
  },
  {
    icon: '👩‍🏫',
    type: 'Leadership',
    data: ['Code Review', 'Training/Mentoring', 'Pair Programming', 'Project Lead'],
  },
];
