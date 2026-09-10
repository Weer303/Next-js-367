import BandExplorer from "@/components/BandExplorer";
import { favoriteBands } from "@/data/bands";

export default function BandsPage() {
  return (
    <main className="page homePage">
      <section className="heroSection">
        <h1>วงดนตรีที่ชื่นชอบ</h1>
      </section>

      <section>
        <BandExplorer bands={favoriteBands} />
      </section>
    </main>
  );
}