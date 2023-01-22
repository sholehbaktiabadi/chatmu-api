import { NextFunction, Request, Response } from "express";
import { error } from "../../utils/response";
import * as jwt from 'jsonwebtoken';
import { LoadEnv } from "../../config/env";

export function middleware(req: Request, res: Response, next: NextFunction){
    const authorization= req.headers.authorization
    if(!authorization) return error(res, 400, 'token is required')
    const [_, token] = authorization.split(' ')
    if(!token) error(res, 400, 'token not valid, check your bearer prefix')
    try {
        jwt.verify(token, LoadEnv().JWT_SECRET as string)
    } catch (err) {
        return error(res, 400, 'Invalid Signature')
    }
    next()
}