import HeroSection from './heroSection'
import About from './about'
import HowItWork from './howItWork'
import FeaturedProperty from './featuredProperty'
import Trusted from './trusted'

const page = () => {
  return (
    <div>
      <div>
        <HeroSection />
      </div>

      <div className='mt-50'>
        <About />
      </div>

      <div>
        <HowItWork />
      </div>

      <div>
        <FeaturedProperty />
      </div>

      <div>
        <Trusted />
      </div>
      
    </div>
  )
}

export default page
