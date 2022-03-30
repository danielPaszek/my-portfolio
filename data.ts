import { RiComputerLine } from 'react-icons/ri'
import { FiDatabase } from 'react-icons/fi'
import { IProject, IService, ISkill } from './types'
import { AiFillGithub, AiOutlineApi } from 'react-icons/ai'
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import { BiBrain } from 'react-icons/bi'
import { FaMobileAlt } from 'react-icons/fa'

export const service: IService[] = [
  {
    title: 'Frontend Developer',
    about:
      'I have decent knowledge of <b>React.js</b>. Also I know CSS pretty good and use <b>tailwindcss</b> daily. I use ES6+ and Typescript too',
    Icon: RiComputerLine,
  },
  {
    title: 'Backend Developer',
    about:
      'handle database, server and api using <b>Express</b>. I have decent knowledge of <b>SQL</b> and orms(Prisma,TypeORM).I know basics of Python too',
    Icon: FiDatabase,
  },
  {
    title: 'Fullstack Developer',
    about:
      'Worked with <b>Next.js</b> and <b>Typescript</b> and loved it. Stuff like tRPC, Prisma, PlanetScale/Firebase are really lovely to work with and I have used them a lot',
    Icon: SiNextdotjs,
  },
  {
    title: 'Github',
    about: 'I Used github to work solo or with colleagues',
    Icon: AiFillGithub,
  },
  {
    title: 'Lorem',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet posuere odio',
    Icon: AiFillGithub,
  },
  {
    title: 'Lorem',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet posuere odio',
    Icon: AiFillGithub,
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
    name: 'React',
    level: 50,
    Icon: SiReact,
  },
  {
    name: 'SQL',
    level: 45,
    Icon: SiPostgresql,
  },
  {
    name: 'Python',
    level: 30,
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
    level: 55,
    Icon: SiNodedotjs,
  },
  {
    name: 'REST/CRUD',
    level: 55,
    Icon: AiOutlineApi,
  },
  {
    name: 'Design Patterns',
    level: 50,
    Icon: BiBrain,
  },

  {
    name: 'Github',
    level: 50,
    Icon: AiFillGithub,
  },
  {
    name: 'Responsive Design',
    level: 50,
    Icon: FaMobileAlt,
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
