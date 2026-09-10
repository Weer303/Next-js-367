import { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
  index: number;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
};

export default function CourseCard({ course, index, isFavorite, onToggleFavorite }: CourseCardProps) {
  return (
    <article className="courseCard">
      <h2>{index + 1}. {course.title}</h2>
      <p>รหัสวิชา: {course.code}</p>
      <p>{course.credits} หน่วยกิต</p>
      <p className={course.isOpen ? "statusOpen" : "statusClosed"}>
        {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
      </p>
      <button 
        type="button" 
        className="favButton"
        aria-pressed={isFavorite} 
        onClick={() => onToggleFavorite(course.id)} 
      > 
        {isFavorite ? "อยู่ในรายการโปรด" : "เพิ่มเป็นรายการโปรด"} 
      </button> 

    </article>
  );
}