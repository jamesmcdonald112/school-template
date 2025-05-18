import { siteConfig } from '@/lib/siteConfig'
import SectionHeading from '@/components/SectionHeading'

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

function ProgramCard({
  name,
  href,
  image,
}: {
  name: string
  href: string
  image: string
}) {
  return (
    <a
      href={href}
      className="group block rounded-lg overflow-hidden shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg bg-white"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover"
        style={{ objectPosition: 'center 30%' }}
      />
        <div className="flex justify-center gap-1 items-center py-4">
          <h3 className={`text-base font-semibold ${primaryTextColor}`}>{name}</h3>
          {/* Arrow */}
          <svg
            className={`w-5 h-5 ${accentColor} ${ctaButton.textHover}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </div>                
    </a>
  )
}

export default function ProgramsOverview() {
  return (
    <div className='py-24 sm:py-32'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">              
        <SectionHeading title={title} subtitleBelow={subtitle} align="left" className='max-w-2xl'/>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramCard
              key={program.name}
              name={program.name}
              href={program.href}
              image={program.image}             
            />
          ))}
        </div>

        {cta?.href && cta?.label && (
          <div className="mt-16 text-center">
            <a
              href={cta.href}
              className={`inline-block px-6 py-3 text-sm font-semibold transition duration-300 ${ctaButton.base}`}
            >
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
