export const defaultCareers = [
  {
    id: 'ias',
    name: 'IAS / Civil Services',
    icon: '🏛️',
    exam_name: 'UPSC CSE',
    duration: '5-10 years',
    stream: 'government',
    difficulty: 'very-high',
    description: 'Become an Indian Administrative Officer. Serve the nation through policy and administration.',
    long_desc: 'The Indian Administrative Service (IAS) is the premier administrative civil service of India. IAS officers hold key positions in both Central and State governments, implementing policies and administering public affairs.',
    tags: ['UPSC', 'Civil Services', 'Administration'],
    roadmap: [
      { step: 1, title: 'Complete Graduation', desc: 'Any bachelor\'s degree.', duration: '3 years' },
      { step: 2, title: 'UPSC Prelims', desc: 'Clear Prelims with GS and CSAT.', duration: '1-2 years' },
      { step: 3, title: 'UPSC Mains', desc: '9 papers covering GS, Essay, and Optional.', duration: '6 months' },
      { step: 4, title: 'Interview', desc: 'Personality test and assessment.', duration: '3 months' }
    ],
    skills: ['Analytical Thinking', 'Leadership', 'Communication'],
    exams_detail: [
      { name: 'UPSC CSE Prelims', stage: 'Stage 1', frequency: 'Annual', mode: 'Offline' },
      { name: 'UPSC CSE Mains', stage: 'Stage 2', frequency: 'Annual', mode: 'Offline' }
    ],
    resources_detail: [
      { icon: '📖', name: 'NCERT Books', type: 'Books' },
      { icon: '▶️', name: 'Unacademy UPSC', type: 'YouTube' }
    ],
    qualification: 'Any Graduate',
    recruiters: 'Government of India'
  },
  {
    id: 'ips',
    name: 'IPS / Police Services',
    icon: '👮',
    exam_name: 'UPSC CSE',
    duration: '5-8 years',
    stream: 'government',
    difficulty: 'very-high',
    description: 'Lead police forces, maintain law and order as an IPS officer.',
    long_desc: 'IPS officers lead police forces at state and central levels, ensuring law and order, investigating crimes, and managing internal security.',
    tags: ['UPSC', 'Police', 'Law Enforcement'],
    roadmap: [
      { step: 1, title: 'Complete Graduation', desc: 'Any bachelor\'s degree.', duration: '3 years' },
      { step: 2, title: 'UPSC CSE', desc: 'Clear exam and choose IPS based on rank.', duration: '1-2 years' },
      { step: 3, title: 'Training', desc: 'Training at SVPNPA Hyderabad.', duration: '2 years' }
    ],
    skills: ['Leadership', 'Physical Fitness', 'Crisis Management'],
    exams_detail: [{ name: 'UPSC CSE', stage: 'All', frequency: 'Annual', mode: 'Offline' }],
    resources_detail: [{ icon: '📖', name: 'Police Manuals', type: 'Book' }],
    qualification: 'Any Graduate',
    recruiters: 'State Police, CBI, IB'
  },
  {
    id: 'mbbs',
    name: 'MBBS / Doctor',
    icon: '⚕️',
    exam_name: 'NEET UG',
    duration: '5-10 years',
    stream: 'medical',
    difficulty: 'high',
    description: 'Practice medicine, save lives. Become a doctor through MBBS and specialization.',
    long_desc: 'MBBS is the entry-level medical degree. Doctors diagnose and treat patients, perform surgeries, and work in various specializations.',
    tags: ['NEET', 'Medical', 'Healthcare'],
    roadmap: [
      { step: 1, title: 'Class 12 PCB', desc: 'Study Biology, Physics, Chemistry.', duration: '2 years' },
      { step: 2, title: 'NEET UG Exam', desc: 'Clear NEET for college entrance.', duration: '1 year' },
      { step: 3, title: 'MBBS Degree', desc: 'Medical studies + internship.', duration: '5.5 years' }
    ],
    skills: ['Biology', 'Clinical Diagnosis', 'Empathy'],
    exams_detail: [{ name: 'NEET UG', stage: 'Entry', frequency: 'Annual', mode: 'Offline' }],
    resources_detail: [{ icon: '📖', name: 'NCERT Biology', type: 'Book' }],
    qualification: 'Class 12 PCB',
    recruiters: 'Hospitals, Clinics, Research'
  },
  {
    id: 'software',
    name: 'Software Engineer',
    icon: '💻',
    exam_name: 'JEE Mains',
    duration: '4-6 years',
    stream: 'tech',
    difficulty: 'moderate',
    description: 'Build apps, websites, and systems. Work at top tech companies.',
    long_desc: 'Software Engineers design, develop, and maintain software systems. They work at tech giants like Google or innovative startups.',
    tags: ['Programming', 'JEE', 'B.Tech'],
    roadmap: [
      { step: 1, title: 'Class 11-12 PCM', desc: 'Study Math and Physics.', duration: '2 years' },
      { step: 2, title: 'JEE Main', desc: 'NIT/IIT entrance.', duration: '1 year' },
      { step: 3, title: 'B.Tech CS/IT', desc: '4-year engineering degree.', duration: '4 years' }
    ],
    skills: ['Data Structures', 'Coding', 'System Design'],
    exams_detail: [{ name: 'JEE Main', stage: 'Entry', frequency: '2x/year', mode: 'CBT' }],
    resources_detail: [{ icon: '🌐', name: 'LeetCode', type: 'Website' }],
    qualification: 'Class 12 PCM',
    recruiters: 'Google, Amazon, TCS'
  },
  {
    id: 'ca',
    name: 'Chartered Accountant',
    icon: '📊',
    exam_name: 'CA Foundation',
    duration: '5-6 years',
    stream: 'commerce',
    difficulty: 'high',
    description: 'Expert in accounting, audit, and taxation. Top finance career.',
    long_desc: 'Chartered Accountancy is the premier finance qualification in India, involving auditing and taxation.',
    tags: ['ICAI', 'Finance', 'Audit'],
    roadmap: [
      { step: 1, title: 'CA Foundation', desc: 'Entry level exam.', duration: '6 months' },
      { step: 2, title: 'CA Intermediate', desc: 'Level 2 exam.', duration: '1 year' },
      { step: 3, title: 'Articleship', desc: '3-year practical training.', duration: '3 years' },
      { step: 4, title: 'CA Final', desc: 'Top level exam.', duration: '1 year' }
    ],
    skills: ['Accounting', 'Taxation', 'Auditing'],
    exams_detail: [{ name: 'CA Foundation', stage: 'Entry', frequency: '2x/year', mode: 'Offline' }],
    resources_detail: [{ icon: '📖', name: 'ICAI Material', type: 'Book' }],
    qualification: 'Class 12',
    recruiters: 'Big 4, Banks'
  },
  {
    id: 'banking',
    name: 'Bank PO / Clerk',
    icon: '🏦',
    exam_name: 'IBPS PO / SBI PO',
    duration: '2-4 years',
    stream: 'commerce',
    difficulty: 'moderate',
    description: 'Work in public sector banks as a Probationary Officer.',
    long_desc: 'Banking jobs offer stability and careers in public sector financial institutions.',
    tags: ['IBPS', 'SBI', 'Banking'],
    roadmap: [
      { step: 1, title: 'Graduation', desc: 'Any bachelor\'s degree.', duration: '3 years' },
      { step: 2, title: 'Bank Prep', desc: 'Quant and Reasoning study.', duration: '1-2 years' },
      { step: 3, title: 'Exam Success', desc: 'Clear Prelims, Mains, Interview.', duration: '6 months' }
    ],
    skills: ['Quantitative Aptitude', 'Reasoning'],
    exams_detail: [{ name: 'IBPS PO', stage: 'Entry', frequency: 'Annual', mode: 'CBT' }],
    resources_detail: [{ icon: '▶️', name: 'Adda247', type: 'YouTube' }],
    qualification: 'Graduate',
    recruiters: 'SBI, PNB'
  },
  {
    id: 'defence',
    name: 'Defence Services',
    icon: '⚔️',
    exam_name: 'NDA / CDS',
    duration: '3-6 years',
    stream: 'government',
    difficulty: 'high',
    description: 'Serve in the Indian Army, Navy, or Air Force as an officer.',
    long_desc: 'Serve the nation through the armed forces with honor and discipline.',
    tags: ['NDA', 'Armed Forces'],
    roadmap: [
      { step: 1, title: 'NDA Exam', desc: 'Clear for Army/Navy/Air Force.', duration: '1 year' },
      { step: 2, title: 'SSB Interview', desc: '5-day assessment.', duration: '1 week' },
      { step: 3, title: 'Training', desc: 'Military Academy training.', duration: '3 years' }
    ],
    skills: ['Physical Fitness', 'Strategy'],
    exams_detail: [{ name: 'NDA', stage: 'After 12th', frequency: '2x/year', mode: 'Offline' }],
    resources_detail: [],
    qualification: 'Class 12 / Graduate',
    recruiters: 'Army, Navy, Air Force'
  },
  {
    id: 'teacher',
    name: 'Teacher / Professor',
    icon: '🎓',
    exam_name: 'UGC NET / TET',
    duration: '4-8 years',
    stream: 'arts',
    difficulty: 'moderate',
    description: 'Shape young minds as a teacher or professor.',
    long_desc: 'Educate students at various levels through schools or universities.',
    tags: ['TET', 'Education'],
    roadmap: [
      { step: 1, title: 'Graduation', desc: 'Foundation in subject.', duration: '3 years' },
      { step: 2, title: 'B.Ed / Masters', desc: 'Required degree for teaching.', duration: '2 years' }
    ],
    skills: ['Patience', 'Communication'],
    exams_detail: [{ name: 'UGC NET', stage: 'Professor level', frequency: '2x/year', mode: 'CBT' }],
    resources_detail: [],
    qualification: 'Graduate + B.Ed',
    recruiters: 'Schools, Colleges'
  }
];
