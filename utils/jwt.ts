import * as jwt from 'jsonwebtoken'
import { LoadEnv } from '../config/env'
export function generateToken(obj: jwt.JwtPayload){
        return jwt.sign(obj, LoadEnv().JWT_SECRET as string, { algorithm: 'HS256', expiresIn: '1d' })  
}