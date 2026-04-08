import HomePage from './HomePage'
import Navbar from '@/components/header/navBar'
import Footer from '../components/footer/footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default page