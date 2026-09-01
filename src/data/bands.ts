import type { Band } from "@/types/band";

export const favoriteBands: Band[] = [
  {
    id: 2,
    name: "Maroon 5",
    genre: "Pop Rock",
    image: "/images/bands/Maroon%205.jpg",
    members: [
      { id: 1, name: "Adam Levine", image: "/images/members/Adam%20Levine.jpg" },
      { id: 2, name: "Jesse Carmichael", image: "/images/members/Jesse%20Carmichael.jpg" },
      { id: 3, name: "James Valentine", image: "/images/members/James%20Valentine.jpg" },
      { id: 4, name: "Matt Flynn", image: "/images/members/Matt%20Flynn.jpg" },
      { id: 5, name: "PJ Morton", image: "/images/members/PJ%20Morton.jpg" },
      { id: 6, name: "Sam Farrar", image: "/images/members/Sam%20Farrar.jpeg" }
    ],
  },
  {
    id: 3,
    name: "Bodyslam",
    genre: "Rock",
    image: "/images/bands/Bodyslam.jpg",
    members: [
      { id: 1, name: "ตูน - อาทิวราห์ คงมาลัย", image: "/images/members/Toon.jpg" },
      { id: 2, name: "ปิ๊ด - ธนชัย ตันตระกูล", image: "/images/members/Pet.jpg" },
      { id: 3, name: "ชัช - สุชัฒติ จั่นอี๊ด", image: "/images/members/Cus.jpg" },
      { id: 4, name: "ยอด - ธนดล ช้างเสวก", image: "/images/members/Yoa.jpg" },
      { id: 5, name: "โอม - โอม เปล่งขำ", image: "/images/members/Oom.jpg" }
    ],
  },
  {
    id: 1,
    name: "coldplay",
    genre: "Alternative Rock",
    image: "/images/bands/coldplay.jpg",
    members: [
      { id: 1, name: "Chris Martin", image: "/images/members/Chris%20Martin.avif" },
      { id: 2, name: "Jonny Buckland", image: "/images/members/Jonny%20Buckland.jpg" },
      { id: 3, name: "Guy Berryman", image: "/images/members/Guy%20Berryman.jpg" },
      { id: 4, name: "Will Champion", image: "/images/members/Will%20Champion.jpg" }
    ],
  },
];
