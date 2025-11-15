import { ICourse } from "./Interface/ICourse";

export class Course implements ICourse {
  course_id: number;
  instructor_id: number;
  title: string;
  description?: string | null;
  thumbnail_url?: string | null;
  published_at?: Date | null;

  constructor(
    course_id: number,
    instructor_id: number,
    title: string,
    description?: string | null,
    thumbnail_url?: string | null,
    published_at?: Date | null
  ) {
    this.course_id = course_id;
    this.instructor_id = instructor_id;
    this.title = title;
    this.description = description;
    this.thumbnail_url = thumbnail_url;
    this.published_at = published_at;
  }
}
