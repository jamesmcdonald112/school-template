import { siteConfig } from '@/lib/config/schoolConfig'
import clsx from 'clsx'

interface SectionHeadingProps {
  subheading?: string;
  title: string;
  subtitleBelow?: string;
  subtitleAbove?: string;
  align?: 'center' | 'left' | 'right';
  className?: string;
}

export default function SectionHeading({
  subheading,
  title,
  subtitleBelow,
  subtitleAbove,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const { sectionHeading, typography, accentColor } = siteConfig.theme
  const alignment = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'

  return (
    <div
      className={clsx(
        'w-full',
        alignment,
        className
      )}
    >
      {subheading && (
        <p className={clsx('mb-1 text-sm font-semibold uppercase tracking-wide', accentColor)}>
          {subheading}
        </p>
      )}
      {subtitleAbove && (
        <p
          className={clsx(
            'mb-1 font-semibold tracking-wide',            
            typography.sectionSubtitleAbove,
          )}
        >
          {subtitleAbove}
        </p>
      )}
      <h2
        className={clsx(
          sectionHeading.base,
          sectionHeading.color,
          sectionHeading.size,
          'leading-tight mb-4'
        )}
      >
        {title}
      </h2>
      {subtitleBelow && (
        <p
          className={clsx(
            typography.sectionSubtitle
          )}
        >
          {subtitleBelow}
        </p>
      )}
    </div>
  )
}