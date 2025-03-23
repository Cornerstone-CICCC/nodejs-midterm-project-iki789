"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const db_1 = __importDefault(require("../db"));
let notes = [...db_1.default.notes];
class NoteModel {
    findByUserId(id) {
        const note = notes.filter((n) => n.userId === id);
        if (!note)
            return [];
        return note;
    }
    addNote(note) {
        const newNote = Object.assign(Object.assign({}, note), { id: (0, uuid_1.v4)(), createdAt: new Date() });
        notes.push(newNote);
        return newNote;
    }
    removeNote(id) {
        notes = notes.filter((note) => note.id !== id);
        return true;
    }
    updateNote(newNotes) {
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
exports.default = new NoteModel();
