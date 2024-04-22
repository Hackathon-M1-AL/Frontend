import { Produit } from "../produits";

export interface Catalogue {
  id: number;
  nom: string;
  quantite: string;
  produit: Produit[];
}