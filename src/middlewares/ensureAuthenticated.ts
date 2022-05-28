import { Request, Response, NextFunction } from 'express';

import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
  //receber o token
  const authToken = request.headers.authorization;

  //validar se o token estiver preenchido
  if(!authToken){
    return response.status(401).end();
  }

  //validar se o token é válido
  const [,token] = authToken.split(" ");
  try {
    const {sub} = verify( token , "5dd7dc026672663dfde6c9a308cfd2b5") as IPayload

    //recuperar as informações do usuário
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }  
}
