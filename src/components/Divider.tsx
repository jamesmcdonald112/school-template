import { siteConfig } from '@/lib/siteConfig'

export default function Divider() {
  const { accentBgColor } = siteConfig.theme

  return (
    <div className="relative my-24">
      <div
        aria-hidden="true"
        className={`mx-auto h-px w-full max-w-4xl ${accentBgColor}`}
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        }}
      />
    </div>
  )
}
