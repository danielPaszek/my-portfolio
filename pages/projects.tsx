import React, { useState } from 'react'
import Project from '../components/Project'
import { projects as projectData } from '../data'
import { allCategories, Category } from '../types'

interface projectsProps {}

const Projects: React.FC<projectsProps> = ({}) => {
  const [projects, setProjects] = useState(projectData)
  const [active, setActive] = useState('all')

  const handleFilter = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectData)
      setActive('all')
      return
    }
    setProjects(projectData.filter((el) => el.category.includes(category)))
    setActive(category)
  }
  return (
    <div>
      <nav className="px-4">
        <ul className="flex list-none space-x-4 overflow-x-auto px-2 font-medium">
          {allCategories.map((el, inx) => (
            <li
              key={inx}
              onClick={() => handleFilter(el)}
              className={`cursor-pointer capitalize ${
                active === el ? 'text-start-grad' : 'hover:text-start-grad'
              } `}
            >
              {el}
            </li>
          ))}
        </ul>
      </nav>
      <div className="relative my-2 grid grid-cols-12 gap-4">
        {projects.map((project) => (
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            key={project.name}
          >
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Projects
