import ClientInquiryForm from '@/components/ClientInquiryForm'
import Divider from '@/components/Divider'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import HomeHero  from '@/components/HomeHero'
import HowItWorks from '@/components/HowItWorks'
import ProgramsOverview from '@/components/ProgramsOverview'
import Testimonials from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ProgramsOverview />
      <Divider />
      <ClientInquiryForm config={{ schoolId: 'test-school-id-2' }}/> 
      <HowItWorks />
      <Divider />
      <Testimonials />
      <Divider />
      <WhyChooseUs />
      <Divider />
      <FinalCTA />      
      <Divider />
      <FAQ />
    </main>
  )
}