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
    var _a;
    const note = note_model_1.default.findByUserId((_a = req === null || req === void 0 ? void 0 : req.session) === null || _a === void 0 ? void 0 : _a.userId);
    if (!note) {
        res.status(404).json({ error: "404 not found!" });
        return;
    }
    res.json(note);
};
exports.default = {
    getAllNotes,
    getAllUserNotes,
};
