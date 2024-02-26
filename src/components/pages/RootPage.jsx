import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const RootPage = () => {
  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default RootPage