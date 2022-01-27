import React from 'react'
import Image from 'next/image'
import profilePic from '../public/kapitan.jpg'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { useTheme } from 'next-themes'

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  const { theme, setTheme } = useTheme()
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div className="flex flex-col items-center gap-3 py-5">
      <Image
        className=" rounded-full"
        src={profilePic}
        alt="profile picture"
        height={128}
        width={128}
        layout="fixed"
      />
      <h3 className="my-4 text-3xl tracking-wider">
        <span>Daniel</span> Paszek
      </h3>
      <p className="w-[80%] rounded-2xl bg-slate-200 px-2 py-1 text-center dark:bg-slate-600">
        Web Developer
      </p>
      <p className="w-[80%] rounded-2xl bg-slate-200 px-2 py-1 text-center dark:bg-slate-600">
        CS Student
      </p>
      {/* icons */}
      <div className="flex w-full justify-around">
        <a href="https://github.com/danielPaszek" target={'_blank'}>
          <AiFillGithub className="h-8 w-8 cursor-pointer" />
        </a>

        <a
          href="https://www.linkedin.com/in/daniel-paszek-a12a2a206/"
          target={'_blank'}
        >
          <AiFillLinkedin className="h-8 w-8 cursor-pointer text-blue-600" />
        </a>
      </div>
      <div className="flex w-full flex-col gap-2 bg-slate-200 py-2 text-center dark:bg-slate-600">
        <div className="flex justify-center space-x-4">
          <GoLocation className="h-6 w-6 " />
          <span>Buk (near Poznań), Poland</span>
        </div>
        <p>paszekdaniel2001@gmail.com</p>
        <p>694720250</p>
      </div>
      <button
        onClick={() => changeTheme()}
        className="rounded-xl bg-gradient-to-r from-start-grad to-end-grad px-3 py-2 "
      >
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}
export default Sidebar
