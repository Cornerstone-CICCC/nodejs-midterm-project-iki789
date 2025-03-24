"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const note_route_1 = __importDefault(require("./routes/note.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:1212",
    credentials: true, // allow cookies
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.set("trust proxy", 1); // trust first proxy
app.use((0, cookie_session_1.default)({
    name: "electroNotesIki",
    keys: ["somestring", "somesecurestring"],
    maxAge: 5 * 60 * 1000,
    sameSite: false,
    secure: false,
}));
app.use("/users", user_routes_1.default);
app.use("/notes", note_route_1.default);
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
