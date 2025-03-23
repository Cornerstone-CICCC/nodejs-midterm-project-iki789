import { Router } from "express";
import noteController from "../controllers/note.controller";

const noteRouter = Router();

noteRouter.get("/", noteController.getAllNotes);
noteRouter.get("/user", noteController.getAllUserNotes);
noteRouter.post("/add", noteController.addUserNote);
noteRouter.post("/remove/:id", noteController.removeUserNote);
noteRouter.post("/update", noteController.updateUserNote);

export default noteRouter;
