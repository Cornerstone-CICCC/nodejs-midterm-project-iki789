import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes";
import cookieSession from "cookie-session";
import noteRouter from "./routes/note.route";

const app = express();
app.use(
  cors({
    origin: "http://localhost:1212",
    credentials: true, // allow cookies
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", 1); // trust first proxy
app.use(
  cookieSession({
    name: "electroNotesIki",
    keys: ["somestring", "somesecurestring"],
    maxAge: 5 * 60 * 1000,
    sameSite: false,
    secure: false,
  })
);

app.use("/users", userRouter);
app.use("/notes", noteRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
