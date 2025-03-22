import { Router } from "express";
import noteController from "../controllers/note.controller";

const noteRouter = Router();

noteRouter.get("/", noteController.getAllNotes);
noteRouter.get("/user", noteController.getAllUserNotes);

export default noteRouter;
