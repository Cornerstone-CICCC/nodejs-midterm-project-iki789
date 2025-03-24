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
  createdAt: Date;
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
      state.notes.unshift(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.notes = state.notes.filter((note) => note.id !== id);
      if (state.notes[0]) {
        state.activeNote = { ...state.notes[0] };
      }
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
    clearNotes: () => {
      return initialState;
    },
  },
  selectors: {
    getNote: (state, id: string) => {
      return state.notes.find((note) => note.id === id);
    },
    getNotes: (state) => {
      return state.notes.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
      );
    },
  },
});

export const { add, remove, update, setNotes, setActiveNote, clearNotes } =
  notesSlice.actions;
export const { getNote, getNotes } = notesSlice.selectors;

export default notesSlice;
