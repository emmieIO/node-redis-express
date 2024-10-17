import { ZodSchema } from "zod";
import type { Request, Response, NextFunction } from 'express';

export const validate =  <T>(schema: ZodSchema<T>)=>{
    return (req: Request, res: Response, next: NextFunction):any => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({success:false, message: 'Invalid request data', error: result.error.errors});
    }
    next()
}

}