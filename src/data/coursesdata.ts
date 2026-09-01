import type { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: 1,
    code: "CS101",
    title: "Introduction to Computer Science",
    credits: 3,
    isOpen: true,
  },
  {
    id: 2,
    code: "MATH201",
    title: "Calculus II",
    credits: 4,
    isOpen: false,
  },
];
