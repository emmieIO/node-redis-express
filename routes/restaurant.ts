import express from "express";
import { validate } from "../middleware/validate.js";
import { RestaurantSchema, type Restaurant } from "../schemas/restaurant.js";
import { successResponse } from "../utils/responses.js";
import { initializeRedisClient } from "../utils/client.js";

const router = express.Router()


router.post("/", validate(RestaurantSchema), async (req, res, next) => {
    const data = req.body as Restaurant
    const client = initializeRedisClient()
    successResponse(res, "Created.", data);

})

export default router;