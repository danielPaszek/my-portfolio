import { RiComputerLine } from 'react-icons/ri'
import { FiDatabase } from 'react-icons/fi'
import { IService, ISkill } from './types'
import { AiFillGithub } from 'react-icons/ai'
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import { ImDatabase } from 'react-icons/im'
import { BiBrain } from 'react-icons/bi'

export const service: IService[] = [
  {
    title: 'Frontend Developer',
    about:
      'I have decent knowledge of <b>React.js</b> and Redux. Also I know CSS pretty good and use <b>tailwindcss</b> daily. I use ES6+ and Typescript too',
    Icon: RiComputerLine,
  },
  {
    title: 'Backend Developer',
    about:
      'handle database, server and api using <b>Express</b>. I have pretty good knowledge of <b>SQL</b> and orms(Prisma,TypeORM).I know basics of Python too',
    Icon: FiDatabase,
  },
  {
    title: 'Fullstack Developer',
    about:
      'Worked with <b>Next.js</b> and <b>Typescript</b> and loved it. Stuff like tRPC, Prisma, PlanetScale/Firebase are really lovely to work with and I used them a lot',
    Icon: SiNextdotjs,
  },
  {
    title: 'Github',
    about: 'Use github to work solo or with colleague',
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
    level: 100,
    Icon: SiTypescript,
  },
  {
    name: 'Javascript',
    level: 85,
    Icon: SiJavascript,
  },

  {
    name: 'React',
    level: 60,
    Icon: SiReact,
  },
  {
    name: 'SQL',
    level: 50,
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
    level: 75,
    Icon: SiNextdotjs,
  },
  {
    name: 'Express',
    level: 70,
    Icon: SiNodedotjs,
  },
  {
    name: 'Github',
    level: 65,
    Icon: AiFillGithub,
  },
  {
    name: 'Design Patterns',
    level: 60,
    Icon: BiBrain,
  },
  {
    name: 'ORMs',
    level: 60,
    Icon: ImDatabase,
  },
]
