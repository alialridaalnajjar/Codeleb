import { IEnrollment } from "./Interface/IEnrollment";

export class Enrollment implements IEnrollment {
  enrollment_id: number;
  user_id: number;
  course_id: number;
  enrolled_at: Date;

  constructor(
    enrollment_id: number,
    user_id: number,
    course_id: number,
    enrolled_at: Date
  ) {
    this.enrollment_id = enrollment_id;
    this.user_id = user_id;
    this.course_id = course_id;
    this.enrolled_at = enrolled_at;
  }
}
