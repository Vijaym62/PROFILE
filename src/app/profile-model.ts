export interface Profile {
  id: number;
  name: string;
  image: string;
  description: string;
  address: string;
  latitude?: number;  // ➕ Add this
  longitude?: number; // ➕ Add this
}
