import mongoose from "mongoose";
import app from "./app";
const port:number = 5000

async function bootstrap() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practice');
        console.log(`Database Connection Successfully running`)
        app.listen(port, () => {
            console.log(`Database Connection listening on port ${port}`)
          })
          
    }
    catch(err){
        console.log(`Failed to Connect Database`, err);
    }
}
    bootstrap()







