import { createClient } from "redis";


const redisClient=createClient()

async function startWorker() {
    await redisClient.connect();
    while(1){
        const message=await redisClient.brPop("message",0);
        print(message?.element as string);
    }
}
startWorker()

function print(str:string){
    console.log(str)
}