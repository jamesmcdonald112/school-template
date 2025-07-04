import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { siteConfig } from '@/lib/config/schoolConfig'

const { faq, theme } = siteConfig

export default function FAQ() {
  return (    
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <h2 className={`text-4xl font-semibold tracking-tight sm:text-5xl ${theme.sectionHeading.color}`}>
          Frequently asked questions
        </h2>
        <dl className="mt-16 divide-y divide-gray-900/10">
          {faq.questions.map((item) => (
            <Disclosure key={item.question} as="div" className="py-6 first:pt-0 last:pb-0">
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                  <span className={`text-base/7 font-semibold ${theme.sectionHeading.color}`}>{item.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <PlusIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                    <MinusIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-2 pr-12">
                <p className={`${theme.typography.body}`}>{item.answer}</p>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  )
}
