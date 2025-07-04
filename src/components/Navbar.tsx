'use client'

import { siteConfig } from '@/lib/config/schoolConfig'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const { navbar: { schoolName, logoSrc, logoAlt, links }, theme: { primaryColor, ctaButton } } = siteConfig
const navigation = links

export function  Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="relative flex items-center justify-center p-6 lg:px-8">
            <div className="absolute left-6 flex lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">{schoolName}</span>
                <img
                    alt={logoAlt}
                    src={logoSrc}
                    className="h-8 w-auto"
                />
                </a>
            </div>
            <div className="absolute right-6 flex lg:hidden">
                <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                <a key={item.name} href={item.href} className={`text-sm font-semibold text-white transition-colors duration-300 ${ctaButton.textHover}`}>
                    {item.name}
                </a>
                ))}
            </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">{schoolName}</span>
                    <img
                    alt={logoAlt}
                    src={logoSrc}
                    className="h-8 w-auto"
                    />
                </a>
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-400"
                >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
                </div>
                <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                    <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white transition-colors duration-300 hover:${ctaButton.textHover}`}
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                </div>
                </div>
            </DialogPanel>
            </Dialog>
        </header>
    )
}