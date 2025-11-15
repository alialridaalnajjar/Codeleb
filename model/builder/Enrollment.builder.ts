import { Enrollment } from "../Enrollment.model";

export class EnrollmentBuilder {
  private enrollment_id?: number;
  private user_id!: number;
  private course_id!: number;
  private enrolled_at?: Date;

  setEnrollmentId(id: number): this {
    this.enrollment_id = id;
    return this;
  }

  setUserId(userId: number): this {
    this.user_id = userId;
    return this;
  }

  setCourseId(courseId: number): this {
    this.course_id = courseId;
    return this;
  }

  setEnrolledAt(date: Date): this {
    this.enrolled_at = date;
    return this;
  }

  build(): Enrollment {
    if (!this.user_id || !this.course_id) {
      throw new Error("missing required fields!");
    }

    return new Enrollment(
      this.enrollment_id ?? 0,
      this.user_id,
      this.course_id,
      this.enrolled_at ?? new Date()
    );
  }
}
