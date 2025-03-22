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

interface EditorNote {
  time: number;
  blocks: EditorBlock[];
  version: string;
}

type Note = {
  id: string;
  note: EditorNote;
};

interface NotesState {
  isLoading: boolean;
  notes: Array<Note>;
}

const initialState: NotesState = {
  isLoading: false,
  notes: [],
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
  },
  selectors: {
    getNote: (state, id: string) => {
      return state.notes.find((note) => note.id === id);
    },
  },
});

export const { add, remove } = notesSlice.actions;
export const { getNote } = notesSlice.selectors;

export default notesSlice.reducer;
