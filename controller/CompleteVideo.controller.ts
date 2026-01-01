import { Request, Response } from "express";
import sequelize from "../db";

export class CompleteVideoController {
static async toggleCompleteVideo(req:Request, res: Response) {
  const { userId, videoId, status } = req.body; 
if(status === true || status === "true") {
    try{
        await sequelize.query(`Update lesson_progress set is_completed = true 
        where user_id = $1 and video_id = $2`, { bind: [userId, videoId] });
        res.status(200).json({ message: "Video marked as completed." });
    }catch(error){
        res.status(500).json({ error: "Failed to mark video as completed." });
    }
}else{
    try{
        await sequelize.query(`Update lesson_progress set is_completed = false 
        where user_id = $1 and video_id = $2`, { bind: [userId, videoId] });
        res.status(200).json({ message: "Video marked as not completed." });
    }catch(error){
        res.status(500).json({ error: "Failed to mark video as not completed." });
    }
}
}
}