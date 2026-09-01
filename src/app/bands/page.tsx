import BandCard from "@/components/BandCard";
import { favoriteBands } from "@/data/bands";

export default function BandsPage() {
  return (
    <main className="page homePage">
      <section className="heroSection">
        <h1>วงดนตรีที่ชื่นชอบ</h1>
      </section>
      <section className="bandGrid" aria-label="รายการวงดนตรีที่ชื่นชอบ">
        {favoriteBands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}