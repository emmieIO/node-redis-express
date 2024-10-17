import express from "express";
import restaurantRouter from './routes/restaurant.js'
import cuisineRouter from "./routes/cuisines.js"
import { errorHandler } from "./middleware/errorHandler.js";

const port = process.env.PORT || 3000
const app = express();

app.use(express.json());

app.use("/api/restaurants", restaurantRouter);
app.use("/api/cuisines", cuisineRouter);

// globalError Handler
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server Running on ${port}`)
})
.on('error', (error)=>{
    throw new Error(error.message);
})
