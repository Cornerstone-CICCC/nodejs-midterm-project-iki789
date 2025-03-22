import { Request, Response } from "express";
import noteModel, { INote } from "../models/note.model";

const getAllNotes = (req: Request, res: Response) => {
  const notes = noteModel.findAll();
  console.log({ notes });
  res.json(notes);
};

const getAllUserNotes = (req: Request, res: Response) => {
  const note = noteModel.findByUserId(req?.session?.userId);

  if (!note) {
    res.status(404).json({ error: "404 not found!" });
    return;
  }
  res.json(note);
};

export default {
  getAllNotes,
  getAllUserNotes,
};
