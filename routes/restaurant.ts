import express from "express";
import { validate } from "../middleware/validate.js";
import { RestaurantSchema, type Restaurant } from "../schemas/restaurant.js";
import { successResponse } from "../utils/responses.js";

const router = express.Router()


router.post("/", validate(RestaurantSchema), async (req, res, next) => {
    const data = req.body as Restaurant
    successResponse(res, "Created.", data);

})

export default router;