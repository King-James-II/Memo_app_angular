// Interface for representing a Note object
export interface Note {
  id: number; // Unique identifier for the note
  title: string; // Title of the note
  text: string; // Content of the note
}

// Array of predefined notes
export const NOTES: Note[] = [
  {
    id: 1,
    title: 'Guiding Key',
    text: 'May your heart be your guiding key',
  },
  {
    id: 2,
    title: 'The Light and Shadow',
    text: 'The closer you get to the light, the greater your shadow becomes.',
  },
];
