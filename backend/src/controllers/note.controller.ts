import { Request, Response } from "express";
import noteModel, { INote, Note } from "../models/note.model";

const getAllNotes = (req: Request, res: Response) => {
  const notes = noteModel.findAll();
  console.log({ notes });
  res.json(notes);
};

const getAllUserNotes = (req: Request, res: Response) => {
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  console.log(fullUrl);
  if (!req?.session?.userId) {
    res.status(401).json({ error: "Unauthorized to fetch notes." });
    return;
  }
  const notes = noteModel.findByUserId(req?.session?.userId);

  if (!notes) {
    res.status(404).json({ error: "no notes found" });
    return;
  }
  res.json(notes);
};

const addUserNote = (
  req: Request<{}, {}, Omit<Note, "id | createdAt | userId">>,
  res: Response
) => {
  if (!req?.session?.userId) {
    res.status(401).json({ error: "Unauthorized to update note." });
    return;
  }

  const note = req.body;
  const newNote = noteModel.addNote(req.session.userId, note);
  res.json(newNote);
};

const updateUserNote = (req: Request<{}, {}, Note>, res: Response) => {
  if (!req?.session?.userId) {
    res.status(401).json({ error: "Unauthorized to update note." });
    return;
  }
  const note = req.body;
  console.log(`Updated Note: ${note.id}`);
  const notes = noteModel.updateNote(note);

  if (!notes) {
    res.status(404).json({ error: "Note not found!" });
    return;
  }
  res.json(note);
};

const removeUserNote = (req: Request<{ id: string }>, res: Response) => {
  if (!req?.session?.userId) {
    res.status(401).json({ error: "Unauthorized to update note." });
    return;
  }

  const { id } = req.params;

  noteModel.removeNote(id);

  res.json({ success: true });
  return;
};

export default {
  getAllNotes,
  getAllUserNotes,
  addUserNote,
  updateUserNote,
  removeUserNote,
};
