export const experience = [
  {
    id: 'techmatrix-ase',
    role: 'Associate Software Engineer – Salesforce Developer',
    company: 'TechMatrix Consulting',
    period: 'Present',
    type: 'Full-time',
    summary:
      'Building and maintaining Salesforce CRM solutions end to end — from data modeling and Apex business logic to Lightning Web Components, Flow automation and Agentforce agents.',
    highlights: [
      'Develop Apex classes, triggers and test classes following bulkification and trigger-handler best practices.',
      'Build Lightning Web Components wired to Apex controllers for dynamic, responsive record experiences.',
      'Automate business processes with record-triggered, screen and scheduled Flows, validation rules and approval processes.',
      'Configure the Salesforce security model: profiles, permission sets, roles, sharing rules and field-level security.',
      'Design Agentforce agents with reasoning instructions and Apex invocable actions for case self-service.',
      'Debug with logs and Developer Console, and manage deployments across sandboxes and production.',
    ],
    stack: ['Apex', 'LWC', 'Flows', 'SOQL', 'Agentforce', 'Salesforce Admin'],
  },
  {
    id: 'techmatrix-trainee',
    role: 'Trainee Software Engineer – Salesforce Developer',
    company: 'TechMatrix Consulting',
    period: 'Traineeship',
    type: 'Training',
    summary:
      'Completed intensive Salesforce development training covering the platform end to end, then shipped internal CRM projects on real org configurations.',
    highlights: [
      'Learned Apex, SOQL/SOSL, LWC and declarative automation through hands-on org builds.',
      'Delivered CRM prototypes covering admissions, fee collection and farming operations.',
      'Practiced Salesforce administration: objects, page layouts, record types and data import via Data Loader.',
    ],
    stack: ['Apex', 'LWC', 'SOQL', 'Salesforce CRM', 'Data Loader'],
  },
];

export const certifications = [
  {
    id: 'oracle-ml',
    title: 'Oracle Machine Learning using Autonomous Database 2023 Certified Associate',
    issuer: 'Oracle',
    year: '2023',
    icon: 'BrainCircuit',
    tags: ['Machine Learning', 'Autonomous Database', 'SQL'],
  },
  {
    id: 'alteryx-core',
    title: 'Alteryx Designer Core',
    issuer: 'Alteryx',
    year: '',
    icon: 'BarChart3',
    tags: ['Data Prep', 'Analytics', 'Workflow Automation'],
  },
  {
    id: 'csa',
    title: 'Cloud Security Alliance',
    issuer: 'Cloud Security Alliance',
    year: '',
    icon: 'ShieldCheck',
    tags: ['Cloud Security', 'Governance', 'Best Practices'],
  },
  // Add new certifications here — the card grid picks them up automatically.
];

export const education = [
  {
    id: 'btech',
    degree: 'B.Tech – Computer Science and Engineering',
    institution: 'MIT Academy of Engineering, Alandi, Pune',
    period: '',
    details: [
      'Core coursework in Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks and Object-Oriented Programming.',
      'Applied software engineering through full-stack and cloud CRM projects.',
      'Foundation that maps directly to Apex, data modeling and enterprise integration work.',
    ],
  },
];
