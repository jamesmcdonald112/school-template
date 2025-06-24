import { siteConfig } from '@/lib/config/schoolConfig'
import SectionHeading from '@/components/SectionHeading'
import ProgramCard from './ProgramCard'
import ProgramsGrid from '@/components/ProgramsGrid'

const {
  programsOverview: { heading: { title, subtitle }, programs, cta },
  theme: {
    accentColor,
    primaryTextColor,
    sectionHeading,
    typography,
    ctaButton,
  },
} = siteConfig




export default function ProgramsOverview() {
  return (
    <div className='py-24 sm:py-32'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">              
        <SectionHeading title={title} subtitleBelow={subtitle} align="left" className='max-w-2xl'/>

        <ProgramsGrid programs={programs} cta={cta} cardVariant="compact" />
      </div>

      {cta?.href && cta?.label && (
        <div className="mt-16 text-center">
          <a href={cta.href} className={`inline-block px-6 py-3 text-sm font-semibold transition duration-300 ${ctaButton.base}`}>
            {cta.label}
          </a>
        </div>
      )}
    </div>
  )
}
