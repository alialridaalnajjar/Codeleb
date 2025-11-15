import { VideoTag } from "../VideoTag.model";

export class VideoTagBuilder {
  private video_id!: number;
  private tag_id!: number;

  setVideoId(id: number): this {
    this.video_id = id;
    return this;
  }

  setTagId(id: number): this {
    this.tag_id = id;
    return this;
  }

  build(): VideoTag {
    if (!this.video_id || !this.tag_id) {
      throw new Error("missing required fields!");
    }

    return new VideoTag(this.video_id, this.tag_id);
  }
}
