import { instruments, Instrument } from "@/types/instruments";

const { Piano, Guitar, Drums, Violin, Voice } = instruments 

const schoolName = "Marble Music Academy"

export const schoolInfo = {
  name: schoolName,
  location: "Kilkenny",
  established: 2005,
  familiesServed: 250,
  logo: {
    src: "logo.png",
    alt: schoolName,
  },
  tagline: "Making the world a better place through music and learning.",
  eligibility: {
    acceptsAdults: false,
    acceptsChildren: true,
  },
  instrumentsOffered: [
    Piano,
    Guitar,
    Drums,
    Violin,
    Voice,
  ] as Instrument[],

};

