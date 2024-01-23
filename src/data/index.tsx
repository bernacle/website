import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from '@/images/logos'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/images/icons'

export const RESUME_DATA = {
  name: 'Bruno Simplicio',
  initials: 'BS',
  location: 'Dourados, Brazil, EST',
  locationLink: 'https://www.google.com/maps/place/Dourados,+MS,+Brazil/',
  about: 'Senior Software Engineer specialized in Typescript.',
  summary: `With a decade of hands-on experience, I'm a dedicated software engineer with a passion for crafting robust and scalable applications. My proficiency in Typescript and adept use of Design Patterns ensure the development of clean, maintainable code. Specializing in web and backend development, particularly in Node.js and React, I've consistently played a pivotal role in the success of numerous projects. Eager to embrace new technologies and expand my skill set, I am enthusiastic about bringing my experience to a challenging and rewarding role where I can continue making impactful contributions.`,
  avatarUrl:
    'https://media.licdn.com/dms/image/C4D03AQHjk9c017Xrlg/profile-displayphoto-shrink_800_800/0/1661969673720?e=1710979200&v=beta&t=gCG70bu1C_sxZ_JKkyx4B6u3Q_fZI0nS_GC-WFO6Zi4',
  personalWebsiteUrl: 'https://jarocki.me',
  contact: {
    email: 'dev@brunosimplicio.com',
    tel: '+5561999695564',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/bernacle',
        icon: GitHubIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/bruno-simplicio-790a4a30/',
        icon: LinkedInIcon,
      },
      {
        name: 'X',
        url: 'https://twitter.com/_brunosimplicio',
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: 'Universidade Federal da Grande Dourados',
      degree: 'Bachelor in Information Systems',
      start: '2007',
      end: '2012',
    },
  ],
  work: [
    {
      company: 'Notabene',
      link: 'https://notabene.id',
      badges: ['remote'],
      title: 'Senior Software Engineer',
      start: '2021',
      end: 'Present',
      description: `I was one of the initial engineers when the company consisted only of the founders and myself. Collaborating closely with the CTO, I contributed significantly to the development of a travel rule API and dashboard, enabling crypto companies to adhere to country regulations.
      My involvement extended to key projects, including crafting a decision rules engine for transactions, developing a widget for exchanges to collect data, and more recently, assisting in the transition from a monorepo to more agile microservices. In this transformation, we utilized Kafka to ensure better communication, elevate overall system availability, and enhance scalability.
      In the dynamic setting of a startup's early stages, my role expanded beyond technical contributions. I actively participated in hiring, interviewing, and onboarding new engineers—reflecting the versatility required in wearing multiple hats to support the company's growth.`,
    },
    {
      company: 'Banco do Brasil',
      link: 'https://bb.com.br',
      badges: ['remote'],
      title: 'Lead Backend Developer',
      start: '2020',
      end: '2021',
      description: `With a compact team of developers and one project manager, we successfully scoped and built an application to automate the API design process for the Open Finance initiative at Banco do Brasil. Developed using Node.js and PostgreSQL, this application was specifically designed to streamline the bank's workflow by minimizing the time dedicated to manual API design.`,
    },
    {
      company: 'Crowdbotics',
      link: 'https://www.crowdbotics.com/',
      badges: ['remote', 'freelance'],
      title: 'React Native Developer',
      start: '2020',
      end: '2020',
      description:
        'Delivered a React Native mobile app for a medical and aesthetic business, enhancing patient experience and streamlining appointment scheduling. The app had some great features, such as live map with directions, in-app payments using Square, upload of images and PDF documents and chat messages.',
    },
    {
      company: 'Combinis',
      link: '#',
      badges: ['remote'],
      title: 'Full Stack Developer & Co-Founder',
      start: '2019',
      end: '2020',
      description: `As a full-stack developer, I collaborated with three co-founders to build and launch an internal classified advertisements app for employees of large companies. Leveraging React Native for the mobile app and Firebase for the backend. Within a week of release, the app achieved 2000 downloads, and that was a significant achievement for the entire team. Unfortunately, the pandemic led to the app's discontinuation, but the journey was an incredible learning experience for me.`,
    },
    {
      company: 'Banco do Brasil',
      link: 'https://bb.com.br',
      badges: ['onsite'],
      title: 'Lead Full Stack Developer',
      start: '2018',
      end: '2020',
      description: `For a duration of two years, I took on the role of leading a team of developers in the creation of the Open Finance developer platform for the bank. This platform was strategically developed to facilitate the sale of API services by the bank and to enhance the overall experience for external developers. The platform itself was built using a combination of Angular and Java.`,
    },
    {
      company: 'Banco do Brasil',
      link: 'https://bb.com.br',
      badges: ['onsite'],
      title: 'API Software Engineer',
      start: '2017',
      end: '2018',
      description: `I played a key role in the transformation of legacy banking services into modern RESTful APIs, actively contributing to the development of API functionalities using Java. The security of these APIs was strengthened through the implementation of OAuth 2.0 protocols for enhanced protection.`,
    },
    {
      company: 'Banco do Brasil',
      link: 'https://bb.com.br',
      badges: ['onsite'],
      title: 'Junior Software Engineer',
      start: '2014',
      end: '2017',
      description: `Throughout this period, I actively collaborated with a team of experienced developers on several key projects utilizing AngularJS and Java. This phase was particularly important for me, providing valuable experiences and insights`,
    },
  ],
  skills: [
    'TypeScript',
    'JavaScript',
    'React/Next.js',
    'Node.js',
    'Express',
    'Postgres',
    'Kafka',
    'Design Patterns',
    'Cryptography',
  ],
  projects: [
    {
      title: 'Consultly',
      techStack: [
        'Side Project',
        'TypeScript',
        'Next.js',
        'Vite',
        'GraphQL',
        'WebRTC',
      ],
      description: 'A platform to build and grow your online business',
      logo: ConsultlyLogo,
      link: {
        label: 'consultly.com',
        href: 'https://consultly.com/',
      },
    },
    {
      title: 'Monito',
      techStack: ['Side Project', 'TypeScript', 'Next.js', 'Browser Extension'],
      description:
        'Browser extension that records everything happening in a web application',
      logo: MonitoLogo,
      link: {
        label: 'monito.dev',
        href: 'https://monito.dev/',
      },
    },
    {
      title: 'Jarocki.me',
      techStack: ['Side Project', 'Next.js', 'MDX'],
      description:
        'My personal website and blog. Built with Next.js and Notion API',
      logo: JarockiMeLogo,
      link: {
        label: 'github.com',
        href: 'https://jarocki.me/',
      },
    },
    {
      title: 'Minimal',
      techStack: ['Side Project', 'Next.js', 'Puppeteer'],
      description:
        'Minimalist calendars, habit trackers and planners generator',
      logo: Minimal,
      link: {
        label: 'useminimal.com',
        href: 'https://useminimal.com/',
      },
    },
    {
      title: 'Barepapers',
      techStack: ['Side Project', 'Next.js', 'Puppeteer'],
      description:
        'Generates beautiful wallpapers using random shapes and gradients',
      logo: BarepapersLogo,
      link: {
        label: 'barepapers.com',
        href: 'https://barepapers.com/',
      },
    },
    {
      title: 'Year progress',
      techStack: ['Side Project', 'TypeScript', 'Next.js'],
      description: 'Tracks current year progress and displays a countdown',
      logo: YearProgressLogo,
      link: {
        label: 'getyearprogress.com',
        href: 'https://getyearprogress.com/',
      },
    },
    {
      title: 'Parabol',
      techStack: [
        'Full Stack Developer',
        'TypeScript',
        'React',
        'Node.js',
        'GraphQL',
      ],
      description:
        'The Agile meeting co-pilot that delivers better meetings with less effort',
      logo: ParabolLogo,
      link: {
        label: 'github.com',
        href: 'https://parabol.co/',
      },
    },
    {
      title: 'Evercast',
      techStack: [
        'Lead Frontend Developer',

        'TypeScript',
        'React',
        'Node.js',
        'GraphQL',
      ],
      description:
        'Creative collaboration platform that combines video conferencing and HD media streaming',
      logo: EvercastLogo,
      link: {
        label: 'evercast.us',
        href: 'https://www.evercast.us/',
      },
    },
    {
      title: 'Mobile Vikings',
      techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
      description:
        'Android application for leading virtual mobile operator in Poland',
      logo: MobileVikingsLogo,
      link: {
        label: 'mobilevikings.pl',
        href: 'https://mobilevikings.pl/',
      },
    },
    {
      title: 'Howdy',
      techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
      description:
        'Howdy is a place for you to join communities you care about',
      logo: Howdy,
      link: {
        label: 'play.google.com',
        href: 'https://howdy.co/',
      },
    },
    {
      title: 'Tastycloud',
      techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
      description:
        'Android application for managing and displaying restaurant menus in kiosk mode',
      logo: TastyCloudLogo,
      link: {
        label: 'tastycloud.fr',
        href: 'https://www.tastycloud.fr/',
      },
    },
    {
      title: 'Ambit',
      techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
      description:
        'Android application that helps with sharing your contact details',
      logo: AmbitLogo,
    },
    {
      title: 'Bim',
      techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
      description:
        'Android application that helps with booking a table in a restaurants',
      logo: BimLogo,
    },
    {
      title: 'Canal Digital GO',
      techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
      description:
        'Video streaming mobile application for Canal Digital subscribers',
      logo: CDGOLogo,
    },
  ],
} as const
