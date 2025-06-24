import { siteConfig } from "@/lib/config/schoolConfig"
import ProgramCard from "./ProgramCard"

export default function ProgramsGrid({
  programs,
  cta,
  cardVariant = 'compact',
}: {
  programs: any[],
  cta?: { label: string, href: string },
  cardVariant?: 'compact' | 'expanded'
}) {
  const { ctaButton } = siteConfig.theme

  return (
    <>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => {
          console.log("program data", program);
          return (
          <ProgramCard
            key={program.name}
            name={program.name}
            href={program.href}
            image={program.image}
            age={program.ageRange}
            format={program.format}
            description={program.description}
            benefits={program.benefits}
            cta={program.cta}
            variant={cardVariant}
          />
          )
        })}
      </div>
    </>
  )
}