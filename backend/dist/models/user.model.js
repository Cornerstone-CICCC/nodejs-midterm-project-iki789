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
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = __importDefault(require("../db"));
const users = db_1.default.users;
class UserModel {
    findByEmail(email) {
        const user = users.find((u) => u.email === email);
        if (!user)
            return null;
        return user;
    }
    findAll() {
        return users;
    }
    authenticate(email, password) {
        const user = users.find((u) => u.email === email);
        if (!user)
            return false;
        const passwordMatch = bcrypt_1.default.compare(password, user.password);
        return passwordMatch;
    }
    create(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = newUser;
            const foundIndex = users.findIndex((u) => u.email === email);
            if (foundIndex !== -1)
                return false;
            const hashedPassword = yield bcrypt_1.default.hash(password, 12);
            const user = Object.assign(Object.assign({}, newUser), { id: (0, uuid_1.v4)(), password: hashedPassword });
            users.push(user);
            return user;
        });
    }
    update(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, id } = newUser;
            const foundIndex = users.findIndex((u) => u.id === id);
            if (foundIndex === -1)
                return false;
            const hashedPassword = yield bcrypt_1.default.hash(password, 12);
            const user = Object.assign(Object.assign({}, newUser), { password: hashedPassword });
            users[foundIndex] = user;
            return user;
        });
    }
}
exports.default = new UserModel();
