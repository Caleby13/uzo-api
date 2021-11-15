import { Request, Response } from "express";
import { Users } from "../models/Users";
import { badRequest, serverError } from "../utils/httpError";

class UsersController {
  async store(req: Request, res: Response): Promise<Response> {
    const { name, username, password } = req.body;
    const user = await Users.findOne({ where: { username } });

    if (user) {
      return res.status(400).json({
        sucess: false,
        message: `Username already exists`,
      });
    }

    try {
      const newUser = await Users.create({
        name,
        username,
        password,
      });

      return res.status(201).json({ sucess: true, user: newUser });
    } catch (err) {
      return serverError(res);
    }
  }
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const users = await Users.findAll();
      return res.status(200).json({ sucess: true, users });
    } catch (err) {
      return serverError(res);
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const user = await Users.findByPk(id);
      if (!user) {
        return res.status(400).json({
          sucess: false,
          message: `User with id ${id} does not exist`,
        });
      }
      return res.status(200).json({ sucess: true, user });
    } catch (err) {
      return serverError(res);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const params = ["id"];

    for (const param of params) {
      if (!req.params[param]) {
        return badRequest(res, param);
      }
    }

    const user = await Users.findByPk(id);
    if (!user) {
      return res
        .status(400)
        .json({ sucess: false, message: `User with id ${id} does not exist` });
    }

    try {
      await Users.destroy({ where: { id } });
      return res.status(204).send();
    } catch (err) {
      return serverError(res);
    }
  }
}

export default new UsersController();
