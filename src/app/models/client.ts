import { Agency } from "./agency";

export interface Client{
  clientId: number;
  name: string;
  agency: Agency;
}
