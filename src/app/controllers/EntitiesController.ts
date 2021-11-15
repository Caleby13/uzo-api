import { Response, Request } from "express";
import { Entities } from "../models/Entities";
import { badRequest, serverError } from "../utils/httpError";

class EntitiesController {
  async store(req: Request, res: Response): Promise<Response> {
    try {
      const newEntity = await Entities.create(req.body);

      return res.status(201).json({ entities: newEntity });
    } catch (err) {
      return serverError(res);
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const entities = await Entities.findAll();
      return res.status(200).json({ entities });
    } catch (err) {
      return serverError(res);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const entity = await Entities.findByPk(id);

    if (!entity) {
      return res.status(404).json({
        message: `Entity does not exist`,
      });
    }

    try {
      const entityUpdated = await entity.update(req.body);

      return res.status(200).json({ entities: entityUpdated });
    } catch (err) {
      return serverError(res);
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const entity = await Entities.findByPk(id);
      if (!entity) {
        return res.status(400).json({
          message: `Entity with id ${id} does not exist`,
        });
      }
      return res.status(200).json({ entities: entity });
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

    const entity = await Entities.findByPk(id);
    if (!entity) {
      return res.status(400).json({
        message: `Entities with id ${id} does not exist`,
      });
    }

    try {
      await Entities.destroy({ where: { id } });
      return res.status(204).send();
    } catch (err) {
      return serverError(res);
    }
  }
}

export default new EntitiesController();
