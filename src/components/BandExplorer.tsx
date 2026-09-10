"use client";

import { useState, type ChangeEvent } from "react";
import type { Band } from "@/types/band";
import BandCard from "./BandCard";

type BandExplorerProps = {
  bands: Band[];
};

export default function BandExplorer({ bands }: BandExplorerProps) {
  const [keyword, setKeyword] = useState("");
  const [followedBandIds, setFollowedBandIds] = useState<number[]>([]);
  const [likesMap, setLikesMap] = useState<Record<number, number>>({});

  function handleKeywordChange(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  function handleToggleFollow(id: number) {
    setFollowedBandIds((prev) =>
      prev.includes(id) ? prev.filter((bandId) => bandId !== id) : [...prev, id]
    );
  }

  function handleLike(id: number) {
    setLikesMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }

  const searchText = keyword.trim().toLowerCase();
  const filteredBands = bands.filter((band) =>
    band.name.toLowerCase().includes(searchText)
  );

  return (
    <div>
      <p style={{ fontWeight: 600, color: "#166534", marginBottom: "1rem" }}>
        ติดตามแล้ว: {followedBandIds.length} วง
      </p>

      <div className="searchBox">
        <input
          type="search"
          className="searchInput"
          aria-label="ค้นหาชื่อวงดนตรี"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="ค้นหาชื่อวงดนตรี..."
        />
      </div>

      {filteredBands.length === 0 ? (
        <div style={{ textAlign: "center", padding: "3rem 0", color: "gray" }}>
          <p>Empty</p>
        </div>
      ) : (
        <div className="bandGrid" aria-label="รายการวงดนตรี">
          {filteredBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowed={followedBandIds.includes(band.id)}
              likes={likesMap[band.id] || 0}
              onToggleFollow={() => handleToggleFollow(band.id)}
              onLike={() => handleLike(band.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}