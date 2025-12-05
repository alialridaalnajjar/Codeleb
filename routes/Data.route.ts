import express from "express";
const router = express.Router();
import { UserController } from "../controller/User.controller";

router.get("/:userId", UserController.getProfile);

export default router;