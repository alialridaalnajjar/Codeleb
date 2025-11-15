import { Course } from "../Course.model";

export class CourseBuilder {
  private course_id?: number;
  private instructor_id!: number;
  private title!: string;
  private description?: string | null;
  private thumbnail_url?: string | null;
  private published_at?: Date | null;

  setCourseId(id: number): this {
    this.course_id = id;
    return this;
  }

  setInstructorId(instructorId: number): this {
    this.instructor_id = instructorId;
    return this;
  }

  setTitle(title: string): this {
    this.title = title;
    return this;
  }

  setDescription(description?: string | null): this {
    this.description = description;
    return this;
  }

  setThumbnailUrl(url?: string | null): this {
    this.thumbnail_url = url;
    return this;
  }

  setPublishedAt(date?: Date | null): this {
    this.published_at = date;
    return this;
  }

  build(): Course {
    if (!this.instructor_id || !this.title) {
      throw new Error("missing required fields!");
    }

    return new Course(
      this.course_id ?? 0,
      this.instructor_id,
      this.title,
      this.description,
      this.thumbnail_url,
      this.published_at
    );
  }
}
