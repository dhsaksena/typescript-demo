import express from 'express';
import {Request, Response} from 'express';

const router = express.Router();

router.get('/', (req: Request, resp: Response) =>{
    return resp.status(200).json({
        "message":"pong"
    })
});

export default router;
