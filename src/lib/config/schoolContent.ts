import { schoolInfo } from "./schoolInfo";
import { instruments } from "@/types/instruments";
import {
  AcademicCapIcon,
  UserGroupIcon,
  ChartBarIcon,
  MusicalNoteIcon,
  MicrophoneIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";


export const navbar = {
  schoolName: schoolInfo.name,
  logoSrc: schoolInfo.logo.src,
  logoAlt: schoolInfo.logo.alt,
  links: [
    { name: "Programs", href: "/programs" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export const hero = {
  badge: {
    id: "limited-spots",
    label: "Now enrolling for September",
    href: "/contact",
    actionLabel: "Get Info",
  },
  headline: "Music lessons children actually love — and stick with.",
  subheadline: `Piano, guitar, drums, violin, voice — taught by caring teachers, right here in ${schoolInfo.location}. Fun-focused, exam-ready, and trusted by over ${schoolInfo.familiesServed} families.`,
  ctas: [
    {
      id: "see-programs",
      label: "See Our Programs",
      href: "#programs",
    },
    {
      id: "check-availability",
      label: "Check Availability",
      href: "#contact",
    },
  ],
  note: `Trusted by over ${schoolInfo.familiesServed} ${schoolInfo.location} families since ${schoolInfo.established}.`,
  bullets: [
    "Group & private lessons for all ages",
    "Beginner-friendly, exam-ready",
    "No setup fees or long-term commitments",
  ],
  image: {
    src: "/hero.webp",
    alt: "Smiling child playing piano in a group music class",
  },
};

export const howItWorks = {
  title: "How It Works",
  subtitle:
    "Getting started is simple — and we’ll guide you every step of the way.",
  steps: [
    {
      title: "Choose a Program",
      description:
        "Select an Instrument. Group or private options are available, depending on age and experience level.",
      icon: AcademicCapIcon,
      href: "/programs",
      linkLabel: "See Programs",
    },
    {
      title: "Get Matched with a Teacher & Class",
      description:
        "We’ll recommend a teacher based on your child’s age, skill level, and schedule. You’ll get a welcome email with details and next steps.",
      icon: UserGroupIcon,
      href: "/about",
      linkLabel: "Meet the Teachers",
    },
    {
      title: "Start Learning & Growing",
      description:
        "Lessons run weekly during the school term. We focus on steady progress, confidence, and helping students enjoy the music they’re learning.",
      icon: ChartBarIcon,
      href: "/testimonials",
      linkLabel: "Hear from Parents & Students",
    },
  ],
};

export const programsOverview = {
  heading: {
    title: "Find the Right Fit for Your Child",
    subtitle:
      "We offer music programs for every age and interest — from playful first steps to performance-ready teens.",
  },
  programs: [
    {
      name: "Mini Musicians",
      instrument: instruments.Voice,
      icon: UserIcon,
      href: "/mini-musicians",
      image: "/mini-musicians.webp",
      ageRange: { min: 4, max: 6 },
      format: "Group",
      description:
        "Play-based discovery of rhythm, melody, and movement — perfect for early learners.",
      benefits: [
        "Build confidence and coordination through music",
        "Hands-on instrument exploration",
        "Foundation for future musical learning",
      ],
      cta: {
        label: "Learn More",
        href: "/mini-musicians",
      },
    },
    {
      name: "Beginner Piano",
      instrument: instruments.Piano,
      icon: MusicalNoteIcon,
      href: "/beginner-piano",
      image: "/beginner-piano.webp",
      ageRange: { min: 6, max: 10 },
      format: "Group or Private",
      description:
        "A fun, structured introduction to piano for children — no experience required. Learn notes, rhythm, and favorite songs.",
      benefits: [
        "Step-by-step progression at your child’s pace",
        "Develop musical literacy and confidence",
        "Supportive, engaging teachers",
      ],
      cta: {
        label: "Explore Beginner Piano",
        href: "/beginner-piano",
      },
    },
    {
      name: "Guitar Foundations",
      instrument: instruments.Guitar,
      icon: MusicalNoteIcon,
      href: "/guitar-foundations",
      image: "/guitar-foundations.webp",
      ageRange: { min: 8, max: 13 },
      format: "Group or Private",
      description:
        "Start strumming and picking from day one. Kids learn chords, riffs, and songs in a supportive, fun environment.",
      benefits: [
        "Play real songs from the start",
        "Learn with friends or one-on-one",
        "Build strong technique and rhythm",
      ],
      cta: {
        label: "See Guitar Program",
        href: "/guitar-foundations",
      },
    },
    {
      name: "Singing & Stage",
      instrument: instruments.Voice,
      icon: MicrophoneIcon,
      href: "/singing-and-stage",
      image: "/singing-and-stage.webp",
      ageRange: { min: 7, max: 14 },
      format: "Group or Private",
      description:
        "Find your voice! Kids explore singing, performance, and stage presence in a supportive group or private setting.",
      benefits: [
        "Boost confidence and creativity",
        "Learn healthy vocal technique",
        "Opportunities for solo and group performance",
      ],
      cta: {
        label: "Discover Singing & Stage",
        href: "/singing-and-stage",
      },
    },
    {
      name: "Teen Band Lab",
      instrument: instruments.Guitar,
      icon: UserGroupIcon,
      href: "/teen-band-lab",
      image: "/teen-band-lab.webp",
      ageRange: { min: 12, max: 17 },
      format: "Group",
      description:
        "Take your skills to the next level! Teens join a real band, collaborate, write, and perform music together.",
      benefits: [
        "Real-world band experience",
        "Songwriting and creativity workshops",
        "Performance and recording opportunities",
      ],
      cta: {
        label: "Join Band Lab",
        href: "/teen-band-lab",
      },
    },
  ],
  cta: {
    label: "See All Programs",
    href: "/programs",
  },
};

export const whyChooseUs = {
  heading: `Why Families Choose ${schoolInfo.name}`,
  subtitle: "Real progress. Caring teachers. Music kids love coming back to.",
  image: {
    src: "/why-choose-us.webp",
    alt: "A happy student learning music with a caring teacher",
  },
  features: [
    {
      title: "Experienced, Passionate Teachers",
      description:
        "Every teacher is carefully selected for their expertise and warmth. We support them with ongoing training and curriculum tools to help every child thrive.",
      icon: AcademicCapIcon, // add if your component uses icons here
    },
    {
      title: "Parent-Approved Curriculum",
      description:
        "Our lesson structure blends fun with structure. Kids stay engaged while making real, measurable progress — even if they’re just getting started.",
      icon: UserGroupIcon,
    },
    {
      title: "Flexible & Family-Friendly",
      description:
        "We offer easy rescheduling, term-based enrollment, and clear communication — so music fits smoothly into your routine, not the other way around.",
      icon: AdjustmentsHorizontalIcon,
    },
    {
      title: `Trusted by ${schoolInfo.familiesServed}+ ${schoolInfo.location} Families`,
      description:
        "Word-of-mouth is our biggest growth engine. We’ve earned the trust of hundreds of local families by delivering results kids — and parents — feel proud of.",
      icon: SparklesIcon,
    },
  ],
  learnMoreHref: "/about", // example URL for the Learn More link
  learnMoreLabel: "Learn more about our company", // text for the link
};

export const testimonials = {
  heading: `Trusted by Over ${schoolInfo.familiesServed} ${schoolInfo.location} Families`,
  groups: [
    [
      {
        body: "My daughter started piano lessons here two years ago and now practices without being asked. The teachers make learning fun and progress-focused.",
        author: {
          name: "Sarah R.",
          context: "Parent of a 10-year-old",
          instrument: "Piano",
        },
      },
      {
        body: "The structure and kindness here are unmatched. Our son looks forward to every lesson.",
        author: {
          name: "Jason T.",
          context: "Parent of a 7-year-old",
          instrument: "Guitar",
        },
      },
      {
        body: "I was nervous to take up voice lessons as an adult, but I felt welcomed from day one.",
        author: {
          name: "Emily D.",
          context: "Adult student",
          instrument: "Voice",
        },
      },
    ],
    [
      {
        body: "Our daughter is excited every week and even started writing her own music thanks to the creativity encouraged here.",
        author: {
          name: "Mark L.",
          context: "Parent of a 9-year-old",
          instrument: "Piano",
        },
      },
      {
        body: "We’ve tried a few schools before this, but this one finally stuck. It’s the balance of fun and focus that works.",
        author: {
          name: "Anne C.",
          context: "Parent",
          instrument: "Multiple",
        },
      },
    ],
  ],
};

export const faq = {
  heading: "Frequently Asked Questions",
  questions: [
    {
      question: "What age can my child start music lessons?",
      answer:
        "We typically recommend starting from age 4+, but it depends on the child. We’ll help guide you to the right program.",
    },
    {
      question: "Do I need to have an instrument at home?",
      answer:
        "Not right away! We can help you decide on the right instrument when your child is ready.",
    },
    {
      question: "Can we try a lesson before committing?",
      answer:
        "Yes — we offer trial lessons and flexible options to make sure it’s the right fit.",
    },
    {
      question: "What if we need to miss a week?",
      answer:
        "We offer flexible rescheduling options and clear communication if anything comes up.",
    },
    {
      question: "Do you prepare students for exams?",
      answer:
        "Yes — we offer optional exam pathways like RIAM, ABRSM, and Rockschool, depending on the student’s goals.",
    },
  ],
};

export const finalCta = {
  heading: "Ready to get started?",
  subheading: `Spots fill quickly — check availability now and we’ll help match your child with the perfect program at ${schoolInfo.name}.`,
  primaryCta: {
    label: "Check Availability",
    href: "/contact",
  },
  secondaryCta: {
    label: "See All Programs",
    href: "/programs",
  },
};

export const footer = {
  logo: schoolInfo.logo.src,
  companyName: schoolInfo.name,
  description: schoolInfo.tagline,
  links: [
    { name: "Programs", href: "/programs" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
    { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { name: "X", href: "https://twitter.com", icon: FaXTwitter },
  ],
  copy: `© 2025 ${schoolInfo.name}. All rights reserved.`,
  poweredBy: "Made with care in Kilkenny.",
};
