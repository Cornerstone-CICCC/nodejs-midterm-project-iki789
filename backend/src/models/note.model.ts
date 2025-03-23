import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import db from "../db";

type HeaderBlock = {
  type: "header";
  data: {
    text: string;
    level: number;
  };
};

type ParagraphBlock = {
  type: "paragraph";
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

export type Note = {
  id: string;
  userId: string;
  createdAt: Date;
  note: EditorNote;
};

export type INote = Array<Note>;

let notes: INote = [...db.notes];

class NoteModel {
  findByUserId(id: string): Note[] | null {
    console.log(id);
    const note = notes.filter((n) => n.userId === id);
    if (!note) return [];
    return note;
  }

  addNote(userId: string, note: Omit<Note, "id | createdAt">) {
    const newNote: Omit<Note, "id | createdAt"> = {
      // @ts-ignore
      id: uuidv4(),
      // @ts-ignore
      createdAt: new Date(),
      // @ts-ignore
      userId,
      ...note,
    };
    notes.unshift(newNote);
    return newNote;
  }

  removeNote(id: string) {
    notes = notes.filter((note) => note.id !== id);
    return true;
  }

  updateNote(newNotes: Note) {
    console.log(newNotes);
    const index = notes.findIndex((n) => n.id === newNotes.id);
    console.log(index);
    notes[index] = newNotes;
    return true;
  }

  findAll() {
    return notes;
  }
}

export default new NoteModel();
