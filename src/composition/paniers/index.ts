import {Produit} from "../produits";

export interface ProduitPanier extends Produit {
    count: number;
}