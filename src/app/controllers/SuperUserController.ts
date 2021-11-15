import { Request, Response } from "express";
import { Users } from "../models/Users";
import { serverError } from "../utils/httpError";

class SuperUserController {
  async store(req: Request, res: Response): Promise<void | Response> {
    const superUser = {
      id: -1,
      name: "Admin",
      username: "admin",
      password: "admin",
    };
    try {
      const user = await Users.findByPk(-1);
      if (!!user) {
        return res.status(400).json({ message: `Super user already exists` });
      }
      await Users.create(superUser);
      return res.status(201).json({ message: "Created super user" });
    } catch (err) {
      return serverError(res);
    }
  }
}

export default new SuperUserController();
