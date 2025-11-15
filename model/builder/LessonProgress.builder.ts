import { LessonProgress } from "../LessonProgress.model";

export class LessonProgressBuilder {
  private progress_id?: number;
  private user_id!: number;
  private video_id!: number;
  private is_completed: boolean = false;
  private last_viewed_timestamp: number = 0;

  setProgressId(id: number): this {
    this.progress_id = id;
    return this;
  }

  setUserId(userId: number): this {
    this.user_id = userId;
    return this;
  }

  setVideoId(videoId: number): this {
    this.video_id = videoId;
    return this;
  }

  setIsCompleted(completed: boolean): this {
    this.is_completed = completed;
    return this;
  }

  setLastViewedTimestamp(timestamp: number): this {
    this.last_viewed_timestamp = timestamp;
    return this;
  }

  build(): LessonProgress {
    if (!this.user_id || !this.video_id) {
      throw new Error("missing required fields!");
    }

    return new LessonProgress(
      this.progress_id ?? 0,
      this.user_id,
      this.video_id,
      this.is_completed,
      this.last_viewed_timestamp
    );
  }
}
