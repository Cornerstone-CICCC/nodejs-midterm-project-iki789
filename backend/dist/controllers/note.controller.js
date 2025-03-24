"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const note_model_1 = __importDefault(require("../models/note.model"));
const getAllNotes = (req, res) => {
    const notes = note_model_1.default.findAll();
    console.log({ notes });
    res.json(notes);
};
const getAllUserNotes = (req, res) => {
    var _a, _b;
    const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
    console.log(fullUrl);
    if (!((_a = req === null || req === void 0 ? void 0 : req.session) === null || _a === void 0 ? void 0 : _a.userId)) {
        res.status(401).json({ error: "Unauthorized to fetch notes." });
        return;
    }
    const notes = note_model_1.default.findByUserId((_b = req === null || req === void 0 ? void 0 : req.session) === null || _b === void 0 ? void 0 : _b.userId);
    if (!notes) {
        res.status(404).json({ error: "no notes found" });
        return;
    }
    res.json(notes);
};
const addUserNote = (req, res) => {
    var _a;
    if (!((_a = req === null || req === void 0 ? void 0 : req.session) === null || _a === void 0 ? void 0 : _a.userId)) {
        res.status(401).json({ error: "Unauthorized to update note." });
        return;
    }
    const note = req.body;
    const newNote = note_model_1.default.addNote(req.session.userId, note);
    res.json(newNote);
};
const updateUserNote = (req, res) => {
    var _a;
    if (!((_a = req === null || req === void 0 ? void 0 : req.session) === null || _a === void 0 ? void 0 : _a.userId)) {
        res.status(401).json({ error: "Unauthorized to update note." });
        return;
    }
    const note = req.body;
    console.log(note);
    const notes = note_model_1.default.updateNote(note);
    if (!notes) {
        res.status(404).json({ error: "Note not found!" });
        return;
    }
    res.json(note);
};
const removeUserNote = (req, res) => {
    var _a;
    if (!((_a = req === null || req === void 0 ? void 0 : req.session) === null || _a === void 0 ? void 0 : _a.userId)) {
        res.status(401).json({ error: "Unauthorized to update note." });
        return;
    }
    const { id } = req.params;
    note_model_1.default.removeNote(id);
    res.json({ success: true });
    return;
};
exports.default = {
    getAllNotes,
    getAllUserNotes,
    addUserNote,
    updateUserNote,
    removeUserNote,
};
