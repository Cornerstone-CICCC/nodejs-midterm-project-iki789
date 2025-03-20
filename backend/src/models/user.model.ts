import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

const users: IUser[] = [
  {
    id: "string",
    username: "gus",
    password: "gus",
    firstname: "string",
    lastname: "string",
  },
];

export interface IUser {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}

class UserModel {
  findByUsername(username: string): IUser | null {
    const user = users.find((u) => u.username === username);
    if (!user) return null;
    return user;
  }

  findAll() {
    return users;
  }

  authenticate(username: string, password: string) {
    const user = users.find((u) => u.username === username);
    if (!user) return false;

    const passwordMatch = bcrypt.compare(password, user.password);
    return passwordMatch;
  }

  async create(newUser: Omit<IUser, "id">) {
    const { username, password } = newUser;
    const foundIndex = users.findIndex((u) => u.username === username);
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
