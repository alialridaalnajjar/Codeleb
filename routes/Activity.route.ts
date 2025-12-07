import express from "express";
const router = express.Router();

import { ActivityController } from "../controller/Activity.controller";

router.post("/create", ActivityController.createActivity);
router.get("/:userId", ActivityController.getActivityById);
export default router;