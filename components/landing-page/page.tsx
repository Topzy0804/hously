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

      <div className='md:mt-50 mt-64 py-24 md:py-1'>
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
