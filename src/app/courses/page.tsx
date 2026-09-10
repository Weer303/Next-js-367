import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/coursesdata";
import Buttoncomponent from "@/components/ButtonComponent";
import CounterDemo from "@/components/CounterDemo";
import type { Metadata } from "next";
import CourseExplorer from "@/components/CourseExplorer";

export const metadata: Metadata = { 
  title: "รายวิชาทั้งหมด", 
}; 
 
export default function CoursesPage() { 
  return ( 
    <div className="page h1"> 
     <h1>รายวิชาทั้งหมด</h1> 
     <CourseExplorer courses={courses} /> 
     </div> 
  );
}