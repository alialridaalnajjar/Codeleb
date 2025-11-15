import { ILessonProgress } from "./Interface/ILessonProgress";

export class LessonProgress implements ILessonProgress {
  progress_id: number;
  user_id: number;
  video_id: number;
  is_completed: boolean;
  last_viewed_timestamp: number;

  constructor(
    progress_id: number,
    user_id: number,
    video_id: number,
    is_completed: boolean,
    last_viewed_timestamp: number
  ) {
    this.progress_id = progress_id;
    this.user_id = user_id;
    this.video_id = video_id;
    this.is_completed = is_completed;
    this.last_viewed_timestamp = last_viewed_timestamp;
  }
}
