import { siteConfig } from '@/lib/config/schoolConfig'
import SectionHeading from '@/components/SectionHeading'
import ProgramsGrid from '@/components/ProgramsGrid'

export default function ProgramsPage() {
  const { heading, programs, cta } = siteConfig.programsOverview

  return (
    <main className='py-24 sm:py-32'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">  
        <SectionHeading
          title={heading.title}
          subtitleBelow={heading.subtitle}
        />
        <ProgramsGrid programs={programs} cta={cta} cardVariant="expanded" />
      </div>
    </main>
  )
}