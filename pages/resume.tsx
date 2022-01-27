import React from 'react'
import { languages, tools } from '../data'
import { ISkill } from '../types'

interface resumeProps {}

const Resume: React.FC<resumeProps> = ({}) => {
  return (
    <div className="flex flex-col ">
      <div className="mb-6 grid grid-cols-1 gap-5 px-6 lg:grid-cols-2">
        <div className="flex flex-col">
          <h2 className="text-xl font-medium">Education:</h2>
          <div className="px-2">
            <p className="mt-1">-VIII High School in Poznan</p>
            <p className="mt-1">
              -Currently CS student at Politechnika Poznanska
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-medium">Experience</h2>
          <p className="mt-1 px-2">-None</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-xl font-medium">Languages:</h1>
          <div className="">
            {languages.map((el) => (
              <Bar key={el.name} item={el} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-xl font-medium">Tools:</h1>
          <div className="">
            {tools.map((el) => (
              <Bar key={el.name} item={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Resume

const Bar: React.FC<{ item: ISkill }> = ({ item }) => {
  return (
    <div className="my-4 rounded-full bg-slate-200">
      <div
        className="flex items-center rounded-full bg-gradient-to-r from-start-grad to-end-grad px-4 py-2"
        style={{ width: `${item.level}%` }}
      >
        {<item.Icon />} <span className="px-2">{item.name}</span>
      </div>
    </div>
  )
}
