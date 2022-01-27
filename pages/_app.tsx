import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="my-14 grid grid-cols-12 gap-6 px-5 md:px-20 lg:px-28 xl:px-48">
        <div className="col-span-12 rounded-2xl bg-white pt-4 shadow-2xl dark:bg-slate-700 lg:col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-12 flex flex-col overflow-hidden rounded-2xl  bg-white pt-4 shadow-2xl dark:bg-slate-700 lg:col-span-9">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
