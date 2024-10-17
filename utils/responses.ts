import type { Response } from 'express';

export const successResponse = (res: Response, message: string = "success", data: any, statusCode: number = 200) => {
    return res.status(statusCode).json({ success: true, message, data })
}

export const errorResponse = (res:Response, error:string = "error", statusCode:number=500)=>{
    return res.status(statusCode).json({success:false,error})
}