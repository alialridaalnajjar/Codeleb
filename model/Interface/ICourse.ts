export interface ICourse {
  course_id: number;
  instructor_id: number;
  title: string;
  description?: string | null;
  thumbnail_url?: string | null;
  published_at?: Date | null;
}
