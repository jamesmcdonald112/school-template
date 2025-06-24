// types/instruments.ts
export const instruments = {
  Piano: "Piano",
  Guitar: "Guitar",
  Drums: "Drums",
  Violin: "Violin",
  Voice: "Voice",
  Bass: "Bass",
  Ukulele: "Ukulele",
  Flute: "Flute",
  Clarinet: "Clarinet",
  Trumpet: "Trumpet",
  Saxophone: "Saxophone",
  Cello: "Cello",
  DoubleBass: "Double Bass",
  Trombone: "Trombone",
  Recorder: "Recorder",
  Other: "Other",
} as const;

export type Instrument = keyof typeof instruments