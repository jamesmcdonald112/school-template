import { siteConfig } from '@/lib/config/schoolConfig'

const {
  howItWorks: { title, subtitle, steps },
  theme: {
    primaryColor,
    ctaButton,
    font,
    sectionHeading,
    typography,
  },
} = siteConfig


export default function HowItWorks() {
  const ctaTextColor = ctaButton.outline.includes('text-') ? ctaButton.outline.split(' ').find(cls => cls.startsWith('text-')) : ''

  return (
    <div className={`${font}`}>
      <div id="how-it-works" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className={`${sectionHeading.base} ${sectionHeading.color} ${sectionHeading.size}`}>
              {title}
            </h2>
            <p className={`mt-4 max-w-prose ${typography.sectionSubtitle}`}>
              {subtitle}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {steps.map((feature) => (
                <a
                  href={feature.href}
                  key={feature.title}
                  className="group flex flex-col rounded-xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg p-6"
                >
                  <dt className={typography.stepTitle}>
                    <div className={`mb-6 flex size-10 items-center justify-center rounded-lg ${primaryColor}`}>
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className={`mt-1 flex flex-auto flex-col ${typography.stepDescription}`}>
                    <p className="flex-auto">{feature.description}</p>
                    <p className={`mt-6 text-sm font-semibold relative ${ctaTextColor}`}>
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 group-hover:after:w-full after:bg-current">
                        {feature.linkLabel} <span aria-hidden="true">→</span>
                      </span>
                    </p>
                  </dd>
                </a>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
