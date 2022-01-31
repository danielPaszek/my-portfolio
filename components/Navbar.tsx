import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface NavbarProps {}
const sites = ['projects', 'about', 'resume']
const Navbar: React.FC<NavbarProps> = ({}) => {
  const [activeItem, setActiveItem] = useState('')
  const { pathname } = useRouter()
  useEffect(() => {
    if (pathname === '/') setActiveItem('about')
    else
      sites.forEach((site) => {
        if (pathname === `/${site}`) setActiveItem(site)
      })
  }, [])
  return (
    <div className="my-2 flex justify-between px-5 py-2 text-lg">
      <span className="font-bold capitalize text-end-grad">{activeItem}</span>

      <div className="">
        {sites.map(
          (el) =>
            el !== activeItem && (
              <Link key={el} href={`/${el === 'about' ? '' : el}`}>
                <a className="mr-2">
                  <span
                    onClick={() => setActiveItem(el)}
                    className="mx-2 rounded-xl bg-gradient-to-r from-start-grad to-end-grad px-3 py-2 font-medium capitalize"
                  >
                    {el}{' '}
                  </span>
                </a>
              </Link>
            )
        )}
      </div>
    </div>
  )
}
export default Navbar
