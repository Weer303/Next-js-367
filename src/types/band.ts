export type BandMember = {
  id: number;
  name: string;
  image: string;
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  description?: string;
  image: string;
  members: BandMember[];
};
