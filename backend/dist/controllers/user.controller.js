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
const getUserByEmail = (req, res) => {
    const { email } = req.params;
    const user = user_model_1.default.findByEmail(email);
    if (!user) {
        res.status(404).json({ error: "404 not found!" });
        return;
    }
    res.json(user);
};
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!(email === null || email === void 0 ? void 0 : email.trim()) || !(password === null || password === void 0 ? void 0 : password.trim())) {
        res.status(500).json({ error: "Email and password required." });
        return;
    }
    const isAuthenticated = yield user_model_1.default.authenticate(email, password);
    if (isAuthenticated && req.session) {
        const user = user_model_1.default.findByEmail(email);
        if (user) {
            req.session.userId = user.id;
            console.log(req.session);
            res.json({ success: isAuthenticated });
            return;
        }
        res.json({ error: "Oops! Something went wrong!" });
    }
    res.json({ error: "Invalid email password." });
});
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
        res.status(500).json({
            error: "All fields are required name, password, confirm password and email",
        });
        return;
    }
    const user = user_model_1.default.findByEmail(email);
    if (user) {
        res.status(500).json({
            error: `Account with email ${email} already exists.`,
        });
        return;
    }
    yield user_model_1.default.create({ name, password, email });
    res.json({ success: true });
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!((_a = req === null || req === void 0 ? void 0 : req.session) === null || _a === void 0 ? void 0 : _a.userId)) {
        res.status(401).json({ error: "Not authorized" });
        return;
    }
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
        res.status(500).json({
            error: "All fields are required name, password, confirm password and email",
        });
        return;
    }
    const user = Object.assign(Object.assign({}, req.body), { id: req.session.userId });
    const result = yield user_model_1.default.update(user);
    if (!result) {
        res.json({ error: "User account does not exists!" });
        return;
    }
    res.json({ success: true });
});
const logout = (req, res) => {
    if (req.session) {
        req.session = null;
        res.status(200).json({ success: true, message: "Logged out user" });
        return;
    }
    res.json({ success: true, message: "User logged out successfully" });
};
const checkAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.session && req.session.userId) {
        res.status(200).json({
            userId: req.session.userId,
        });
        return;
    }
    res.status(500).json({
        content: "No cookie found!",
    });
});
exports.default = {
    getAllUsers,
    getUserByEmail,
    loginUser,
    addUser,
    updateUser,
    logout,
    checkAuth,
};
