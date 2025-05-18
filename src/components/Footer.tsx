import { siteConfig } from "@/lib/siteConfig"

const { footer, theme } = siteConfig

export default function Footer() {
  return (
    <footer className={`${theme.primaryColor}`}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav aria-label="Footer" className={`-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 ${theme.typography.body}`}>
          {footer.links.map((item) => (
            <a key={item.name} href={item.href} className="text-white hover:text-gray-300">
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {footer.social.map((item) => (
            <a key={item.name} href={item.href} className="text-white hover:text-gray-300">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </a>
          ))}
        </div>
        <p className={`mt-10 text-center ${theme.typography.body} text-white`}>{footer.copy}</p>
      </div>
    </footer>
  )
}
