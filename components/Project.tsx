import React, { useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import Image from 'next/image'
import { IProject } from '../types'
import { AiFillGithub, AiOutlineClose } from 'react-icons/ai'

interface ProjectProps {
  project: IProject
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const myRef = useRef<HTMLDivElement>(null)
  const [showDetails, setShowDetails] = useState(false)
  const onShowDetails = () => {
    flushSync(() => setShowDetails(true))
    myRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }
  return (
    <div>
      <Image
        height={150}
        width={300}
        layout="responsive"
        src={project.imagePath}
        className="cursor-pointer"
        onClick={() => onShowDetails()}
      />
      <p className="my-2 text-center">{project.name}</p>
      {showDetails && (
        <div className="absolute top-0 left-0 z-10 grid h-full w-full auto-rows-min gap-y-28 gap-x-10 bg-slate-200 px-6 py-4 dark:bg-gray-900 md:grid-cols-2">
          <div ref={myRef}>
            <img src={project.imagePath} />
            <div className="my-4 flex items-center justify-evenly space-x-1">
              <a
                className="flex items-center space-x-2 rounded-lg bg-gradient-to-r from-start-grad to-end-grad p-2 px-3 font-medium dark:bg-slate-600"
                target={'_blank'}
                href={project.githubUrl}
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              {project.deployedUrl && (
                <a
                  className=" rounded-lg bg-gradient-to-r from-start-grad to-end-grad p-2 px-3 font-medium dark:bg-slate-600"
                  target={'_blank'}
                  href={project.deployedUrl}
                >
                  Hosted
                </a>
              )}
            </div>
          </div>
          <div className="">
            <h2 className="my-4 text-xl">{project.name}</h2>
            <p>{project.description}</p>
            <div className="mt-5 flex flex-wrap justify-evenly text-sm">
              {project.keyTechs.map((el) => (
                <span className="my-2 rounded-md bg-slate-400 p-2  px-3 dark:bg-slate-600">
                  {el}
                </span>
              ))}
            </div>
          </div>
          <button
            className="absolute top-3 right-3 rounded-full p-1"
            onClick={() => setShowDetails(false)}
          >
            <AiOutlineClose size={40} className="" />
          </button>
        </div>
      )}
    </div>
  )
}
export default Project
