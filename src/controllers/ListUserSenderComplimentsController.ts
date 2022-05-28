import { classToPlain } from "class-transformer";
import { Request, response, Response } from "express";
import { ListUserSenderComplimentsService } from "../services/ListUserSenderComplimentsService";


class ListUserSenderComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserSenderComplimentService = new ListUserSenderComplimentsService();
    const compliments = await listUserSenderComplimentService.execute(user_id);

    return response.json(classToPlain(compliments));
  }

}

export { ListUserSenderComplimentsController };