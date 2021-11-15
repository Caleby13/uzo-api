import { Request, Response } from "express";
import { Users } from "../models/Users";

class SessionController {
  async store(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;
    const user = await Users.findOne({
      where: { username },
    });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    return res.status(200).json({ user, token: user.generateToken() });
  }
}

export default new SessionController();
