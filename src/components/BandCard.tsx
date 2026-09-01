import Image from "next/image";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="bandCard">
      <div className="bandImageWrap">
        <Image
          src={band.image}
          alt={band.name}
          width={320}
          height={220}
          className="bandImage"
          sizes="(max-width: 768px) 100vw, 320px"
          loading="eager"
        />
      </div>

      <div className="bandContent">
        <p className="bandGenre">{band.genre}</p>
        <h2>{band.name}</h2>
        {band.description ? <p className="bandDescription">{band.description}</p> : null}

        <h3>สมาชิก</h3>
        <ul className="memberList">
          {band.members.map((member) => (
            <li key={member.id} className="memberItem">
              <Image
                src={member.image}
                alt={member.name}
                width={56}
                height={56}
                className="memberAvatar"
                sizes="56px"
                loading="lazy"
              />
              <span>{member.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
