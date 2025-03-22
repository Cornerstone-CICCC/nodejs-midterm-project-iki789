import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import db from "../db";

const users: IUser[] = db.users;

export interface IUser {
  id: string;
  name: string;
  password: string;
  email: string;
}

class UserModel {
  findByEmail(email: string): IUser | null {
    const user = users.find((u) => u.email === email);
    if (!user) return null;
    return user;
  }

  findAll() {
    return users;
  }

  authenticate(email: string, password: string) {
    const user = users.find((u) => u.email === email);
    if (!user) return false;

    const passwordMatch = bcrypt.compare(password, user.password);
    return passwordMatch;
  }

  async create(newUser: Omit<IUser, "id">) {
    const { email, password } = newUser;
    const foundIndex = users.findIndex((u) => u.email === email);
    if (foundIndex !== -1) return false;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = {
      ...newUser,
      id: uuidv4(),
      password: hashedPassword,
    };
    users.push(user);
    return user;
  }
}

export default new UserModel();
