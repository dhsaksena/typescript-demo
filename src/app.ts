import { Product } from './product.js';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import ruleContoller from './components/rule';

const NAMESPACE = "Server";
const router = express();

/**
 * Logging the request
 */

router.use((req, resp, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], 
    IP - [${req.socket.remoteAddress}]`);


    resp.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], 
    IP - [${req.socket.remoteAddress}], STATUS - [${resp.statusCode}]`);
    });

    next();
});


/** Parse body in json */
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json()); 

router.use((req, resp, next) => {
    resp.header('Access-Control-Allow-Origin', '*');
    resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method == 'OPTIONS')
    {
        resp.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return resp.status(200).json({});
    }

    next();
});

const port = 3000;



const getProducts = (): Product => {
    let product = new Product();
    product.id = "1";
    product.price = 300;
    product.title = "Bat";

    return product;
}

router.get('/products', (req: express.Request, resp: express.Response): void => {
    resp.status(200).send(getProducts());
});

router.use('/rule', ruleContoller);

/**Error Handling */
router.use((req, resp, next) => {
    const error = new Error("Not Found");

    return resp.status(404).json({
        message: error.message
    })
   
});

const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}:
${config.server.port}`));