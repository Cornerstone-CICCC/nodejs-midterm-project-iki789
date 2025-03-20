import { Request, Response } from "express";
import userModel, { IUser } from "../models/user.model";

const getAllUsers = (req: Request, res: Response) => {
  const users = userModel.findAll();
  res.json(users);
};

const getUserByUsername = (
  req: Request<{ username: string }>,
  res: Response
) => {
  const { username } = req.params;
  const user = userModel.findByUsername(username);

  if (!user) {
    res.status(404).json({ error: "404 not found!" });
    return;
  }
  res.json(user);
};

const loginUser = async (
  req: Request<{}, {}, { username: string; password: string }>,
  res: Response
) => {
  const { username, password } = req.body;
  if (!username?.trim() || !password?.trim()) {
    res.status(500).json({ error: "Username and password required." });
    return;
  }

  const isAuthenticated = await userModel.authenticate(username, password);

  if (isAuthenticated && req.session) {
    req.session.isLoggedIn = "true";
    console.log({ isAuthenticated });
    res.json({ success: isAuthenticated });
  } else {
    res.json({ error: "Invalid username password." });
  }
};

const addUser = (req: Request<{}, {}, Omit<IUser, "id">>, res: Response) => {
  const { username, password, firstname, lastname } = req.body;
  if (!username || !password || !firstname || !lastname) {
    res.status(500).json({
      error: "All fields are required username, password, firstname, lastname",
    });
    return;
  }
  userModel.create({ username, password, firstname, lastname });
  res.json({ success: true });
};

const logout = (req: Request, res: Response) => {
  if (req.session) {
    req.session = null;
    res.status(200).json({ success: true, message: "Logged out user" });
  }
  res.json({ success: true, message: "User logged out successfully" });
};

const checkAuth = async (req: Request, res: Response) => {
  console.log(req.session);
  if (req.session && req.session.isLoggedIn) {
    res.status(200).json({
      content: req.session.isLoggedIn,
    });

    return;
  }
  res.status(500).json({
    content: "No cookie found!",
  });
};

export default {
  getAllUsers,
  getUserByUsername,
  loginUser,
  addUser,
  logout,
  checkAuth,
};
