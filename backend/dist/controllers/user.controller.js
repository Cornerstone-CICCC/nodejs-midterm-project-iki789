"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const getAllUsers = (req, res) => {
    const users = user_model_1.default.findAll();
    res.json(users);
};
const getUserByUsername = (req, res) => {
    const { username } = req.params;
    const user = user_model_1.default.findByUsername(username);
    if (!user) {
        res.status(404).json({ error: "404 not found!" });
        return;
    }
    res.json(user);
};
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!(username === null || username === void 0 ? void 0 : username.trim()) || !(password === null || password === void 0 ? void 0 : password.trim())) {
        res.status(500).json({ error: "Username and password required." });
        return;
    }
    const isAuthenticated = yield user_model_1.default.authenticate(username, password);
    if (isAuthenticated && req.session) {
        req.session.isLoggedIn = "true";
        console.log({ isAuthenticated });
        res.json({ success: isAuthenticated });
    }
    else {
        res.json({ error: "Invalid username password." });
    }
});
const addUser = (req, res) => {
    const { username, password, firstname, lastname } = req.body;
    if (!username || !password || !firstname || !lastname) {
        res.status(500).json({
            error: "All fields are required username, password, firstname, lastname",
        });
        return;
    }
    user_model_1.default.create({ username, password, firstname, lastname });
    res.json({ success: true });
};
const logout = (req, res) => {
    if (req.session) {
        req.session = null;
        res.status(200).json({ success: true, message: "Logged out user" });
    }
    res.json({ success: true, message: "User logged out successfully" });
};
const checkAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.default = {
    getAllUsers,
    getUserByUsername,
    loginUser,
    addUser,
    logout,
    checkAuth,
};
