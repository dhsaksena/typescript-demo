const getTimestamp = ():string =>
{
    return new Date().toISOString();
}

const info = (namespace: string, message: string, object?: any): void =>{
    if(object)
    {
        console.log(`[${getTimestamp()}] [INFO] [${namespace}] ${message}`, object);
    }
    else
    {
        console.log(`[${getTimestamp()}] [INFO] [${namespace}] ${message}`);
    }
}

export default {
    info
}
    
