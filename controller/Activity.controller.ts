import { Request, Response } from "express";
import sequelize from "../db";

export class ActivityController {
  static async createActivity(req: Request, res: Response) {
    try {
      const title = req.body.title;
      const user_id = req.body.user_id;

      const [results] = await sequelize.query(
        "INSERT INTO activity (title, user_id) VALUES ($1, $2) ",
        {
          bind: [title, user_id],
        }
      );

      return res.status(201).json({ message: "Activity created successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getActivityById(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      const [activities]: any = await sequelize.query(
        "SELECT a.user_id, a.title, a.dod FROM activity a WHERE user_id = $1 ORDER BY dod DESC LIMIT 5",
        { bind: [userId] }
      );

      if (activities.length === 0) {
        return res.status(404).json({ message: "Activity not found" });
      }

      return res.status(200).json({ activities });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
