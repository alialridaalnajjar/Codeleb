import express from "express";
const router = express.Router();
import { UserController } from "../controller/User.controller";

router.get("/:userId", UserController.getProfile);
router.put("/edit/:userId", UserController.editProfile);
export default router;