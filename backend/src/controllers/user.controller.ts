import { Request, Response } from "express";
import userModel, { IUser } from "../models/user.model";

const getAllUsers = (req: Request, res: Response) => {
  const users = userModel.findAll();
  res.json(users);
};

const getUserByEmail = (req: Request<{ email: string }>, res: Response) => {
  const { email } = req.params;
  const user = userModel.findByEmail(email);

  if (!user) {
    res.status(404).json({ error: "404 not found!" });
    return;
  }
  res.json(user);
};

const loginUser = async (
  req: Request<{}, {}, { email: string; password: string }>,
  res: Response
) => {
  const { email, password } = req.body;
  if (!email?.trim() || !password?.trim()) {
    res.status(500).json({ error: "Email and password required." });
    return;
  }

  const isAuthenticated = await userModel.authenticate(email, password);

  if (isAuthenticated && req.session) {
    const user = userModel.findByEmail(email);
    if (user) {
      req.session.userId = user.id;
      console.log(req.session);
      res.json({ success: isAuthenticated });
      return;
    }
    res.json({ error: "Oops! Something went wrong!" });
  }
  res.json({ error: "Invalid email password." });
};

const addUser = async (
  req: Request<{}, {}, Omit<IUser, "id">>,
  res: Response
) => {
  const { name, password, email } = req.body;
  if (!name || !password || !email) {
    res.status(500).json({
      error:
        "All fields are required name, password, confirm password and email",
    });
    return;
  }

  const user = userModel.findByEmail(email);
  if (user) {
    res.status(500).json({
      error: `Account with email ${email} already exists.`,
    });
    return;
  }

  await userModel.create({ name, password, email });
  res.json({ success: true });
};

const updateUser = async (req: Request<{}, {}, IUser>, res: Response) => {
  if (!req?.session?.userId) {
    res.status(401).json({ error: "Not authorized" });
    return;
  }
  const { name, password, email } = req.body;
  if (!name || !password || !email) {
    res.status(500).json({
      error:
        "All fields are required name, password, confirm password and email",
    });
    return;
  }

  const user = { ...req.body, id: req.session.userId };

  const result = await userModel.update(user);
  if (!result) {
    res.json({ error: "User account does not exists!" });
    return;
  }
  res.json({ success: true });
};

const logout = (req: Request, res: Response) => {
  if (req.session) {
    req.session = null;
    res.status(200).json({ success: true, message: "Logged out user" });
    return;
  }
  res.json({ success: true, message: "User logged out successfully" });
};

const checkAuth = async (req: Request, res: Response) => {
  if (req.session && req.session.userId) {
    res.status(200).json({
      userId: req.session.userId,
    });
    return;
  }
  res.status(500).json({
    content: "No cookie found!",
  });
};

export default {
  getAllUsers,
  getUserByEmail,
  loginUser,
  addUser,
  updateUser,
  logout,
  checkAuth,
};
