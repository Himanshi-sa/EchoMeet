import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./src/controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./src/routes/users.routes.js"; 




const app= express();
const server= createServer(app);
const io= connectToSocket(server);

app.set("port", (process.env.PORT || 8000))

app.use(cors());
app.use(express.json({limit:"40kb" }));
app.use(express.urlencoded({limit:"40kb", extended:true}));

app.use("/api/v1/users", userRoutes);


const start =async()=>{
    app.set ("mongo_user")
    const connectionDb= await mongoose.connect ("mongodb+srv://himanshisahuhs:R72wMTudjlVpwBpi@cluster0.5pgtmnd.mongodb.net/")
console.log(`MONGO Conncted DB Host:${connectionDb.connection.host}`)
    server.listen(app.get("port"),()=> {
        console.log("App is listening on port 8000");

    });
}
start();


