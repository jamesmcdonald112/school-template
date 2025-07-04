import { siteConfig } from "@/lib/config/schoolConfig"

export default function Hero() {

    const { badge, headline, subheadline, ctas, note, bullets, image } = siteConfig.hero
    const { ctaButton, font } = siteConfig.theme

    return (
      <div className={`bg-gray-900 ${font}`}>
  
        <div className="relative isolate overflow-hidden pt-14">
          <img
            alt={image.alt}
            src={image.src}
            className="absolute inset-0 -z-10 size-full object-cover "
          />
          <div className="absolute inset-0 -z-10 bg-black/60" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-100 ring-1 ring-white/10 hover:ring-white/20">
                  {badge.label}{' '}
                  <a href={badge.href} className='font-semibold'>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {badge.actionLabel}<span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl capitalize">
                  {headline}
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-100 sm:text-xl/8">
                  {subheadline}
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-6 w-full md:flex-row">
                  <a
                    href={ctas[0].href}
                    className={`w-full md:w-auto rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 ${ctaButton.base}`}
                  >
                    {ctas[0].label}
                  </a>
                  <a href={ctas[1].href} className={`text-sm/6 font-semibold ${ctaButton.lightOutline}`}>
                    {ctas[1].label} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    )
  }