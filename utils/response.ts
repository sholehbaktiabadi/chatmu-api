import { Response } from "express";

class ResponseWrapper{
    status!: number;
    data?: any;
    message?: string
}

export function success(res: Response, data: any){
    const response: ResponseWrapper = {
        status: 200,
        data: data
    }
    res.status(200)
    return res.send(response)
}

export function error(res: Response, status: number, message?: string){
    const response: ResponseWrapper = {
        status,
        message: status == 500 ? 'Server Internal error': message
    }
    res.status(status)
    return res.send(response)
}