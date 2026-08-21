export default function HomePage() {
  const siteName: string = "Student Course Hub";
  const courseCount: number = 3;
  const isOpen: boolean = true;
  const description = "เว็บไซต์รวบรวมและค้นหาข้อมูลรายวิชาสำหรับนักศึกษา";

  return (
    <main className="page homePage">
      <h1>{siteName}</h1>
      <p>จำนวนรายวิชา: {courseCount}</p>
      <p>สถานะระบบ: {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}</p>
      <p>{description}</p>

      <section>
        <h2>เว็บไซต์นี้เหมาะกับใคร?</h2>
        <p>เหมาะสำหรับนักศึกษาและผู้ที่ต้องการตรวจสอบข้อมูลแผนการเรียนและรายวิชาที่เปิดสอน</p>
      </section>
    </main>
  );
}