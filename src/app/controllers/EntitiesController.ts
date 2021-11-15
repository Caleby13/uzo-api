import { Response, Request } from "express";

class EntitiesController {
  async index(req: Request, res: Response) {
    return res.status(200).send();
  }
}

export default new EntitiesController();
