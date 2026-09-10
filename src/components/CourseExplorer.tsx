"use client"; 
 
import { useState, type ChangeEvent } from "react"; 
import type { Course } from "@/types/course"; 
import CourseCard from "@/components/CourseCard";

type CourseExplorerProps = { 
  courses: Course[]; 
}; 
 
export default function CourseExplorer({ courses }: CourseExplorerProps) { 
  const [keyword, setKeyword] = useState(""); 
 
  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) { 
    setKeyword(event.target.value); 
  } 

const searchText = keyword.trim().toLowerCase(); 

const visibleCourses = courses.filter((course) =>
  course.title.toLowerCase().includes(searchText) ||
  course.code.toLowerCase().includes(searchText)
);

const [favoriteIds, setFavoriteIds] = useState<number[]>([]); 
 
function handleToggleFavorite(id: number) { 
  setFavoriteIds((prevIds) => 
    prevIds.includes(id) 
      ? prevIds.filter((favoriteId) => favoriteId !== id) 
      : [...prevIds, id] 
  ); 
} 
 
  return ( 
    <div className="courseGrid"> 
      <input 
        type="search" 
        className="searchInput"
        aria-label="ค้นหารายวิชา" 
        value={keyword} 
        onChange={handleKeywordChange} 
        placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา" 
      /> 
      <div className="courseGrid">
        {visibleCourses.map((course, index) => (
          <CourseCard
            key={course.id}
            course={course}
            index={index}
            isFavorite={favoriteIds.includes(course.id)}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>
    </div> 
  ); 
}