const sharedButtonBase = "rounded-md w-full sm:w-auto block text-center px-6 py-3 font-semibold transition duration-300";
const sharedOutline = "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300";
const sharedSectionHeading = {
  base: "tracking-tight",
  decorated: "border-l-4 pl-4",
};
const sharedTypography = {
  sectionSubtitle: "text-base sm:text-lg text-gray-500 leading-relaxed",
  stepTitle: "text-base font-medium text-gray-800",
  stepDescription: "text-lg sm:text-xl text-gray-700 leading-relaxed",
  body: "text-base sm:text-lg text-gray-700 leading-relaxed",
};

const sharedFormStyles = {
  label: "block mb-1 font-medium text-gray-700",
  input:
    "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
  textarea:
    "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]",
  error: "text-sm text-red-600 mt-1",
  success: "text-sm text-green-600 mt-1",
};

export const themeProfiles = {
  indigo: {
    primaryColor: "bg-indigo-600",
    primaryTextColor: "text-indigo-900",
    backgroundSection: "bg-slate-50",
    accentColor: "text-indigo-600",
    accentBgColor: "bg-indigo-400/50",
    font: "font-sans",
    waveFill: "#e0e7ff",
    fromColor: "white",
    toColor: "#f8f9fc",
    shadowColor: "shadow-[0_4px_20px_rgba(79,70,229,0.1)]",
    shadowHoverColor: "shadow-[0_6px_30px_rgba(79,70,229,0.2)]",
    ctaButton: {
      base: `${sharedButtonBase} bg-indigo-600 text-white hover:bg-indigo-500`,
      outline: `${sharedOutline} text-indigo-700 after:bg-indigo-700 hover:after:w-full hover:text-indigo-900`,
      textHover: "hover:text-indigo-300",
      lightOutline:
        "relative text-indigo-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-200 after:transition-all after:duration-300 hover:after:w-full hover:text-white",
    },
    sectionHeading: {
      ...sharedSectionHeading,
      color: "text-indigo-900",
      size: "text-2xl sm:text-3xl md:text-4xl font-bold",
    },
    typography: {
      ...sharedTypography,
      sectionSubtitleAbove: "text-sm font-semibold tracking-tight text-indigo-600",
    },
  },
  green: {
    primaryColor: "bg-green-600",
    primaryTextColor: "text-green-900",
    backgroundSection: "bg-green-50",
    accentColor: "text-green-700",
    accentBgColor: "bg-green-400/50",
    font: "font-sans",
    waveFill: "#d1fae5",
    fromColor: "white",
    toColor: "#ecfdf5",
    shadowColor: "shadow-[0_4px_20px_rgba(34,197,94,0.1)]",
    shadowHoverColor: "shadow-[0_6px_30px_rgba(34,197,94,0.2)]",
    ctaButton: {
      base: `${sharedButtonBase} bg-green-600 text-white hover:bg-green-500`,
      outline: `${sharedOutline} text-green-700 after:bg-green-700 hover:after:w-full hover:text-green-900`,
      textHover: "hover:text-green-300",
      lightOutline:
        "relative text-green-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-200 after:transition-all after:duration-300 hover:after:w-full hover:text-white",
    },
    sectionHeading: {
      ...sharedSectionHeading,
      color: "text-green-900",
      size: "text-2xl sm:text-3xl md:text-4xl font-bold",
    },
    typography: {
      ...sharedTypography,
      sectionSubtitleAbove: "text-sm font-semibold tracking-tight text-green-700",
    },
  },
  rose: {
    primaryColor: "bg-rose-500",
    primaryTextColor: "text-rose-900",
    backgroundSection: "bg-rose-50",
    accentColor: "text-rose-600",
    accentBgColor: "bg-rose-400/50",
    font: "font-serif",
    waveFill: "#ffe4e6",
    fromColor: "white",
    toColor: "#fff1f2",
    shadowColor: "shadow-[0_4px_20px_rgba(244,63,94,0.1)]",
    shadowHoverColor: "shadow-[0_6px_30px_rgba(244,63,94,0.2)]",
    ctaButton: {
      base: `${sharedButtonBase} bg-rose-500 text-white hover:bg-rose-400`,
      outline: `${sharedOutline} text-rose-700 after:bg-rose-700 hover:after:w-full hover:text-rose-900`,
      textHover: "hover:text-rose-300",
      lightOutline:
        "relative text-rose-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-rose-200 after:transition-all after:duration-300 hover:after:w-full hover:text-white",
    },
    sectionHeading: {
      ...sharedSectionHeading,
      color: "text-rose-900",
      size: "text-2xl sm:text-3xl md:text-4xl font-bold",
    },
    typography: {
      ...sharedTypography,
      sectionSubtitleAbove: "text-sm font-semibold tracking-tight text-rose-600",
    },
  },
  navy: {
    primaryColor: "bg-blue-900",
    primaryTextColor: "text-blue-900",
    backgroundSection: "bg-blue-50",
    accentColor: "text-blue-700",
    accentBgColor: "bg-blue-300/50",
    font: "font-sans",
    waveFill: "#e0f2fe",
    fromColor: "white",
    toColor: "#f0f9ff",
    shadowColor: "shadow-[0_4px_20px_rgba(30,58,138,0.1)]",
    shadowHoverColor: "shadow-[0_6px_30px_rgba(30,58,138,0.2)]",
    ctaButton: {
      base: `${sharedButtonBase} bg-blue-900 text-white hover:bg-blue-800`,
      outline: `${sharedOutline} text-blue-800 after:bg-blue-800 hover:after:w-full hover:text-blue-900`,
      textHover: "hover:text-blue-300",
      lightOutline:
        "relative text-blue-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-200 after:transition-all after:duration-300 hover:after:w-full hover:text-white",
    },
    sectionHeading: {
      ...sharedSectionHeading,
      color: "text-blue-900",
      size: "text-2xl sm:text-3xl md:text-4xl font-bold",
    },
    typography: {
      ...sharedTypography,
      sectionSubtitleAbove: "text-sm font-semibold tracking-tight text-blue-700",
    },
  },
  neutral: {
    primaryColor: "bg-zinc-700",
    primaryTextColor: "text-zinc-800",
    backgroundSection: "bg-zinc-50",
    accentColor: "text-zinc-600",
    accentBgColor: "bg-zinc-300/30",
    font: "font-sans",
    waveFill: "#f4f4f5",
    fromColor: "white",
    toColor: "#f8f8f8",
    shadowColor: "shadow-[0_4px_20px_rgba(63,63,70,0.08)]",
    shadowHoverColor: "shadow-[0_6px_30px_rgba(63,63,70,0.15)]",
    ctaButton: {
      base: `${sharedButtonBase} bg-zinc-700 text-white hover:bg-zinc-600`,
      outline: `${sharedOutline} text-zinc-700 after:bg-zinc-700 hover:after:w-full hover:text-zinc-800`,
      textHover: "hover:text-zinc-500",
      lightOutline:
        "relative text-zinc-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-zinc-200 after:transition-all after:duration-300 hover:after:w-full hover:text-white",
    },
    sectionHeading: {
      ...sharedSectionHeading,
      color: "text-zinc-800",
      size: "text-2xl sm:text-3xl md:text-4xl font-bold",
    },
    typography: {
      ...sharedTypography,
      sectionSubtitleAbove: "text-sm font-semibold tracking-tight text-zinc-600",
    },
  },
  classic: {
    primaryColor: "bg-[#bfae9e]",
    primaryTextColor: "text-[#3e3e3e]",
    backgroundSection: "bg-[#f9f6f2]",
    accentColor: "text-[#8b7c6d]",
    accentBgColor: "bg-[#dcd1c3]/40",
    font: "font-serif",
    waveFill: "#f9f6f2",
    fromColor: "white",
    toColor: "#f2ece5",
    shadowColor: "shadow-[0_4px_20px_rgba(191,174,158,0.1)]",
    shadowHoverColor: "shadow-[0_6px_30px_rgba(191,174,158,0.2)]",
    ctaButton: {
      base: `${sharedButtonBase} bg-[#bfae9e] text-white hover:bg-[#a99887]`,
      outline: `${sharedOutline} text-[#8b7c6d] after:bg-[#8b7c6d] hover:after:w-full hover:text-[#6d5f52]`,
      textHover: "hover:text-[#bfae9e]",
      lightOutline:
        "relative text-[#e3dad2] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#e3dad2] after:transition-all after:duration-300 hover:after:w-full hover:text-white",
    },
    sectionHeading: {
      ...sharedSectionHeading,
      color: "text-[#3e3e3e]",
      size: "text-2xl sm:text-3xl md:text-4xl font-bold",
    },
    typography: {
      ...sharedTypography,
      sectionSubtitleAbove: "text-sm font-semibold tracking-tight text-[#8b7c6d]",
    },
  },
} as const;

export type ThemeProfile = (typeof themeProfiles)[keyof typeof themeProfiles];

export const sharedFormStylesExport = sharedFormStyles;
