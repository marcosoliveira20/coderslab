import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import Api from "./Api";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request, 
  response: Response, 
  next: NextFunction) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    return response.status(401).send("Token missing!")
  }

  const [, token] = authHeader.split(" ")

  try{
    const { sub: user_id } = verify(token, "71ce41b9695dca078a73e0382b4b8d88") as IPayload;

    const api = new Api();

    const user = await api.user(`/read/byId/${user_id}`)

    if(!user.data){
      return response.status(401).send("user does not exists!")
    }

    next()
  } catch(err) {
    return response.status(401).send("Invalid token!")
  }
}