import { RiComputerLine } from 'react-icons/ri'
import { FiDatabase } from 'react-icons/fi'
import { IProject, IService, ISkill } from './types'
import { AiFillGithub, AiOutlineApi } from 'react-icons/ai'
import {
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import { BiBookBookmark, BiBrain } from 'react-icons/bi'
import { FaMobileAlt } from 'react-icons/fa'

export const service: IService[] = [
  {
    title: 'Frontend Developer',
    about:
      'I have decent knowledge of <b>React.js</b>. Also I know CSS pretty good and use <b>tailwindcss</b>. I use JS,ES6+ and Typescript daily.',
    Icon: RiComputerLine,
  },
  {
    title: 'Backend Developer',
    about:
      'handle database, server and api using <b>PHP</b> or <b>Node.js</b>. I have decent knowledge of <b>SQL</b> and <b>MVC</b> structure.',
    Icon: FiDatabase,
  },
  {
    title: 'PHP and Laravel',
    about: 'I know PHP and basics of Laravel.',
    Icon: SiPhp,
  },
  {
    title: 'Fullstack Developer',
    about:
      'Worked with <b>Next.js</b> and <b>Typescript</b> and loved it. Tools like tRPC, Prisma, PlanetScale/Firebase really speeds up your work.',
    Icon: SiNextdotjs,
  },
  {
    title: 'Github',
    about: 'I Used github to work solo or with colleagues.',
    Icon: AiFillGithub,
  },

  {
    title: 'Others',
    about:
      'I know basics of Python, R, Kotlin, C++. Mostly from my CS studies.',
    Icon: BiBookBookmark,
  },
]

export const languages: ISkill[] = [
  {
    name: 'Typescript',
    level: 80,
    Icon: SiTypescript,
  },
  {
    name: 'Javascript',
    level: 80,
    Icon: SiJavascript,
  },
  {
    name: 'PHP',
    level: 60,
    Icon: SiPhp,
  },
  {
    name: 'SQL',
    level: 60,
    Icon: SiPostgresql,
  },
  {
    name: 'React',
    level: 50,
    Icon: SiReact,
  },
  {
    name: 'Python',
    level: 20,
    Icon: SiPython,
  },
]
export const tools: ISkill[] = [
  {
    name: 'Next.js',
    level: 60,
    Icon: SiNextdotjs,
  },
  {
    name: 'Express',
    level: 60,
    Icon: SiNodedotjs,
  },
  {
    name: 'Laravel',
    level: 60,
    Icon: SiLaravel,
  },
  {
    name: 'REST/CRUD',
    level: 55,
    Icon: AiOutlineApi,
  },
  {
    name: 'Responsive Design',
    level: 50,
    Icon: FaMobileAlt,
  },
  {
    name: 'Github',
    level: 40,
    Icon: AiFillGithub,
  },
  {
    name: 'Design Patterns',
    level: 35,
    Icon: BiBrain,
  },
]

export const projects: IProject[] = [
  {
    name: 'InMemoryDatabase',
    description: 'npm package to manage small memory db',
    category: ['node', 'my own'],
    githubUrl: 'https://github.com/danielPaszek/inMemoryDatabase',
    imagePath: '/images/npm.png',
    keyTechs: ['node', 'Typescript', 'Design Patterns'],
  },
  {
    name: 'everything in One',
    description:
      'Project that started from tutorial but I added a lot more functionalities',
    category: ['react', 'my own', 'from tutorial'],
    githubUrl: 'https://github.com/danielPaszek/testing-skills',
    imagePath: '/images/everything.png',
    keyTechs: ['react', 'Javascript', 'Firebase'],
    deployedUrl: 'https://slack-clone-b8d74.web.app/',
  },
  {
    name: 'LiReddit',
    description: 'Project from 14h ben award fullstack tutorial',
    category: ['react', 'from tutorial', 'node'],
    githubUrl:
      'https://github.com/danielPaszek/fullstack-graphql-from-tutorial',
    imagePath: '/images/lireddit.png',
    keyTechs: ['react/Next', 'Typescript', 'Postgres', 'GraphQL'],
  },
  {
    name: 'Netflix Clone',
    description: 'Project from Sonny Sanga tutorial',
    category: ['react', 'from tutorial'],
    githubUrl: 'https://github.com/danielPaszek/netflix-clone-from-tutorial',
    imagePath: '/images/netflix.png',
    keyTechs: ['react', 'Javascript'],
    deployedUrl: 'https://netflix-clone-eae8a.firebaseapp.com/',
  },
]
