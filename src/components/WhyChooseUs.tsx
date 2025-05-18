import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/lib/siteConfig'
import SectionHeading from './SectionHeading'

export default function WhyChooseUs() {
  const {
    whyChooseUs: { heading, subtitle, image, features, learnMoreLabel, learnMoreHref },
    theme: { primaryTextColor, accentColor, typography, ctaButton },
  } = siteConfig

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 h-full">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl lg:max-w-lg h-full max-h-[500px] sm:max-h-[700px]">
              <img
                alt={image.alt}
                src={image.src}
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
          </div>
          <div>
            <div className="text-base/7 text-gray-700 lg:max-w-lg">
              <SectionHeading
                title={heading}
                subtitleAbove={subtitle}        
                align="left"
              />
              <div className="max-w-xl">
                <p className={`mt-6 ${typography.body}`}>
                  {features[0]?.description}
                </p>
                <ul className={`mt-8 space-y-4`}>
                  {features.map((point, idx) => {
                    const IconComponent = point.icon || CheckIcon;
                    return (
                      <li key={idx} className="flex items-start space-x-3">
                        <IconComponent
                          className={`mt-1 h-6 w-6 flex-none ${accentColor}`}
                          aria-hidden="true"
                        />
                        <span>
                          <strong className={`font-semibold ${accentColor}`}>{point.title}</strong>{' '}
                          {point.description}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="mt-10 flex">
              <a href={learnMoreHref} className={`text-base/7 font-semibold ${ctaButton.outline}`}>
                {learnMoreLabel} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
