import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className='bg-black text-blue-400 text-center text-3xl p-4'>HomePage</h1>

      <div className='h-screen flex flex-col text-center place-content-center bg-blue-400'>
        <p>
          Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
        </p>
        <p>
          My default route is named <code>home</code>, link to me with `
          <Link to={routes.home()}>Home</Link>`
        </p>
      </div>
    </>
  )
}

export default HomePage
