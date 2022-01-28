import { IconType } from 'react-icons/lib'

export interface IService {
  title: string
  about: string
  Icon: IconType
}
export interface ISkill {
  name: string
  level: number
  Icon: IconType
}

export interface IProject {
  name: string
  description: string
  imagePath: string
  deployedUrl?: string
  githubUrl: string
  category: Category[]
  keyTechs: string[]
}

export type Category = 'node' | 'react' | 'my own' | 'from tutorial'
export const allCategories: (Category | 'all')[] = [
  'all',
  'node',
  'react',
  'my own',
  'from tutorial',
]
