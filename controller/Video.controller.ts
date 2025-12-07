import { Request, Response } from "express";
import sequelize from "../db";
export class VideoController {
  static async getFirstVideo(req: Request, res: Response) {
    {
      try {
        const [video] = await sequelize.query(
          `SELECT * FROM videos LIMIT 1`
        );
        res.json(video[0]);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch the first video" });
      }
    }
  }
}
