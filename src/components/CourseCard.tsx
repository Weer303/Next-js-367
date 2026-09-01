type CourseCardProps = {
  title: string;
  code: string;
  credits: number;
  isOpen?: boolean;
  children?: React.ReactNode;
};

export default function CourseCard({
  title,
  code,
  credits,
  isOpen = true,
  children,
}: CourseCardProps) {
  return (
    <article className="courseCard">
      <h2>{title}</h2>
      <p>รหัสวิชา: {code}</p>
      <p>{credits} หน่วยกิต</p>
      <p>{isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}</p>
      {children}
    </article>
  );
}