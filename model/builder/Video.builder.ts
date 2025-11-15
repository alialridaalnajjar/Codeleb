import { Video } from "../Video.model";

export class VideoBuilder {
  private video_id?: number;
  private module_id!: number;
  private title!: string;
  private video_url!: string;
  private manifest_url?: string | null;
  private duration_seconds!: number;

  setVideoId(id: number): this {
    this.video_id = id;
    return this;
  }

  setModuleId(moduleId: number): this {
    this.module_id = moduleId;
    return this;
  }

  setTitle(title: string): this {
    this.title = title;
    return this;
  }

  setVideoUrl(url: string): this {
    this.video_url = url;
    return this;
  }

  setManifestUrl(url?: string | null): this {
    this.manifest_url = url;
    return this;
  }

  setDurationSeconds(duration: number): this {
    this.duration_seconds = duration;
    return this;
  }

  build(): Video {
    if (!this.module_id || !this.title || !this.video_url || !this.duration_seconds) {
      throw new Error("missing required fields!");
    }

    return new Video(
      this.video_id ?? 0,
      this.module_id,
      this.title,
      this.video_url,
      this.duration_seconds,
      this.manifest_url
    );
  }
}
