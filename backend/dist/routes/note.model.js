"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const note_controller_1 = __importDefault(require("../controllers/note.controller"));
const noteRouter = (0, express_1.Router)();
noteRouter.get("/", note_controller_1.default.getAllNotes);
noteRouter.get("/user", note_controller_1.default.getAllUserNotes);
noteRouter.post("/add", note_controller_1.default.addUserNote);
noteRouter.post("/remove/:id", note_controller_1.default.removeUserNote);
noteRouter.post("/update", note_controller_1.default.updateUserNote);
exports.default = noteRouter;
