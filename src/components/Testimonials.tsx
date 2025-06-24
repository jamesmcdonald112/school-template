import { siteConfig } from '@/lib/config/schoolConfig'
import SectionHeading from './SectionHeading'
import { StarIcon } from '@heroicons/react/20/solid'


const {
  theme: { primaryTextColor, shadowColor, shadowHoverColor, sectionHeading, typography },
  testimonials: { heading, groups },
} = siteConfig

const testimonials = groups.flat()

function Stars({
  starQuantity,
  className = '',
  size = 8
}: {
  starQuantity: number
  className?: string
  size?: number
}) {
  return (
    <div
      className={`flex text-yellow-300 ${className}`}
      aria-hidden="true"
    >
      {[...Array(starQuantity)].map((_, i) => (
        <StarIcon key={i} className={`w-${size} h-${size}`} />
      ))}
    </div>
  )
}


export default function Testimonials() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Stars starQuantity={5} className='mb-6 justify-center'/>
        <SectionHeading title={heading} />        
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(({ body, author }) => {
              const { name, context, instrument } = author;
              return (
                <div key={name} className="pt-0">
                  <figure className={`rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-10 text-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 ${shadowColor} hover:${shadowHoverColor}`}>
                    <blockquote className={typography.stepDescription}>
                      <p>{`${body}`}</p>
                    </blockquote>
                    <figcaption className="mt-8 text-lg">
                      <div className={typography.stepTitle}>{name}</div>
                      <div className={typography.sectionSubtitle}>
                        {context},{' '}
                        <span className={siteConfig.theme.accentColor}>
                          {instrument}
                        </span>
                        <Stars starQuantity={5} size={5} className='mt-2'/>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
