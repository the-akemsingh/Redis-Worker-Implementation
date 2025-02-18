import  { createClient } from "redis";
import express from "express";

const app = express();
app.use(express.json());

const redisClient = createClient();

app.post('/',async(req,res)=>{
    try{
        const message=req.body;
        await redisClient.lPush("message",JSON.stringify(message))
        res.send({message:"done"});
    }
    catch(e){
        console.log(e)
    }
})


async function startServer() {
    await redisClient.connect();

    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}
startServer();