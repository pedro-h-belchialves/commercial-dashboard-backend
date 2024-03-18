import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY || 'undefined', (err, id) => {
      if (err) return res.status(403).json({ err: 'Permissão Negada!' })
      //@ts-ignore
      req.seller = id
      next()
    })
  } else {
    res.status(401).json({ err: 'Permissão Negada!' })
  }
}