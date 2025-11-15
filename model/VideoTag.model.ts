import { IVideoTag } from "./Interface/IVideoTag";

export class VideoTag implements IVideoTag {
  video_id: number;
  tag_id: number;

  constructor(video_id: number, tag_id: number) {
    this.video_id = video_id;
    this.tag_id = tag_id;
  }
}
