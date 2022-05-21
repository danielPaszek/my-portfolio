import { service } from './../data'

export default function Home() {
  return (
    <div className="flex h-full flex-col">
      <p className="my-2 px-6  pt-2 font-medium">
        Hi! I am CS student at Politechnika Poznanska and self taught Web
        Developer. I know a bit of backend and frontend as well. I know JS,TS
        (Node.js and React) and tools comming with it. Also I know PHP and
        Laravel. I am creator of npm package called pubs-db :D.
      </p>
      <div className="h-full border-t bg-slate-200 p-2 px-6 dark:bg-slate-600">
        <h1 className="text-xl font-semibold ">What I can do:</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {service.map((el) => (
            <div key={el.title} className="w-full px-2 py-2">
              <div className="flex items-center space-x-4">
                <el.Icon className="h-12 w-12 text-start-grad" />
                <h2 className="text-xl font-medium">{el.title}</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: el.about }}></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
