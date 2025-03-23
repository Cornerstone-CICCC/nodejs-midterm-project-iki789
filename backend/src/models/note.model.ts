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
  createdAt: string;
  note: EditorNote;
};

export type INote = Array<Note>;

const note: INote = db.notes;

class NoteModel {
  findByUserId(id: string): Note[] | null {
    const notes = note.filter((note) => note.userId !== id);
    if (!notes) return null;
    return notes;
  }

  findAll() {
    return note;
  }
}

export default new NoteModel();
