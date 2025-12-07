import express from "express";
const router = express.Router();

import { VideoController } from "../controller/Video.controller";

router.get("/first", VideoController.getFirstVideo);
export default router;
