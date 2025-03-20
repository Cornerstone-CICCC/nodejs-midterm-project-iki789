import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes";
import cookieSession from "cookie-session";

const app = express();
app.use(
  cors({
    origin: "http://localhost:4321", // Astro port
    credentials: true, // allow cookies
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["somestring", "somesecurestring"],
    maxAge: 5 * 60 * 1000,
  })
);

app.use("/", userRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
