import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type HeaderBlock = {
  type: 'header';
  data: {
    text: string;
    level: number;
  };
};

type ParagraphBlock = {
  type: 'paragraph';
  data: {
    text: string;
  };
};

type EditorBlock = HeaderBlock | ParagraphBlock;

export interface EditorNote {
  time: number;
  blocks: EditorBlock[];
  version: string;
}

export type Note = {
  id: string;
  userId: string;
  createdAt: string;
  note: EditorNote;
};

export interface NotesState {
  isLoading: boolean;
  notes: Array<Note>;
  activeNote: Note | null;
}

const initialState: NotesState = {
  isLoading: false,
  notes: [],
  activeNote: null,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      const index = state.notes.findIndex((note) => note.id === action.payload);
      if (index) state.notes.slice(index, 1);
    },
    update: (
      state,
      action: PayloadAction<{ id: string; note: EditorNote }>,
    ) => {
      const { id, note } = action.payload;
      const index = state.notes.findIndex((n) => n.id === id);
      const newNotes = state.notes;
      newNotes[index].note = note;
      state.notes = newNotes;
    },
    setNotes: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
    },
    setActiveNote: (state, action: PayloadAction<Note | null>) => {
      state.activeNote = action.payload;
    },
  },
  selectors: {
    getNote: (state, id: string) => {
      return state.notes.find((note) => note.id === id);
    },
  },
});

export const { add, remove, update, setNotes, setActiveNote } =
  notesSlice.actions;
export const { getNote } = notesSlice.selectors;

export default notesSlice;
