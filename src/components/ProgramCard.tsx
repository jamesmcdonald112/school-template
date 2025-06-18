import { siteConfig } from "@/lib/siteConfig"

const {
  theme: {
    accentColor,
    primaryTextColor,  
    ctaButton,
  },
} = siteConfig

export default function ProgramCard({
  name,
  href,
  image,
  description,
  benefits,
  age,
  format,
  cta,
  variant = "compact",
}: {
  name: string
  href: string
  image: string
  description?: string
  benefits?: string[]
  age?: { min: number, max: number }
  format?: string
  cta?: {
    label: string
    href: string
  }
  variant?: "compact" | "expanded"
}) {
  const Wrapper = variant === "compact" ? "a" : "div"
  const wrapperProps = variant === "compact" ? { href } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className="block rounded-lg overflow-hidden shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg bg-white h-full"
    >
      <div className="flex flex-col h-full">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="flex flex-col justify-between flex-grow">
        <div className="flex justify-center gap-1 items-center py-4">
          <h3 className={`text-base font-semibold ${primaryTextColor}`}>{name}</h3>
          {variant === "compact" && (
            <svg
              className={`w-5 h-5 ${accentColor} ${ctaButton.textHover} transition-transform duration-300 group-hover:translate-x-1`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
        {variant === "expanded" && description && (
          <p className="text-sm text-gray-600 mt-2 px-4">{description}</p>
        )}
        {variant === "expanded" && benefits && (
          <ul className="mt-3 px-4 list-disc list-inside text-sm text-gray-500 space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        )}
        {variant === "expanded" && (age || format) && (
          <div className="flex flex-wrap gap-2 px-6 mt-4">
            {age && (
              <span className={`inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-semibold ${accentColor}`}>
                Ages {age.min}–{age.max}
              </span>
            )}
            {format && (
              <span className={`inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-semibold ${accentColor}`}>
                {format}
              </span>
            )}
          </div>
        )}
        {variant === "expanded" && cta && (
          <div className="mt-6 px-6 pb-4">
            <a
              href={cta.href}
              className={`block text-sm font-semibold relative cursor-pointer ${ctaButton.base} group-hover:text-inherit group-hover:after:w-full`}
            >
              {cta.label}
            </a>
          </div>
        )}
        </div>
      </div>
    </Wrapper>
  )
}