"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const note = db_1.default.notes;
class NoteModel {
    findByUserId(id) {
        const notes = note.filter((note) => note.userId === id);
        if (!notes)
            return null;
        return notes;
    }
    findAll() {
        return note;
    }
}
exports.default = new NoteModel();
