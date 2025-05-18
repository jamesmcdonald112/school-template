import { siteConfig } from "@/lib/siteConfig"

export default function FinalCTA() {
  const {
    finalCta,
    theme: { backgroundSection, ctaButton, sectionHeading, typography },
  } = siteConfig

  return (
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className={`text-4xl font-semibold tracking-tight text-balance sm:text-5xl ${sectionHeading.color}`}>
          {finalCta.heading}
        </h2>
        <p className={`mx-auto mt-6 max-w-xl text-pretty ${typography.sectionSubtitle}`}>
          {finalCta.subheading}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-6 md:flex-row">
          <a
            href={finalCta.primaryCta.href}
            className={ctaButton.base}
          >
            {finalCta.primaryCta.label}
          </a>
          <a href={finalCta.secondaryCta.href} className={ctaButton.outline}>
            {finalCta.secondaryCta.label} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
