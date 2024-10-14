"use client"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
export function Header() {
/*
    const [products, setProducts] = useState([]);

    // Fonction pour changer le tri et récupérer les produits correspondants
    const handleSortChange = async (sortOption: string) => {
        const sortedProducts = await getProducts(sortOption, "");
        setProducts(sortedProducts);
    };*/
    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Produits</h1>
                <div className="flex items-center space-x-2 mt-2">
                    <Select>
                        <SelectTrigger id="sort">
                            <SelectValue placeholder="Notre choix" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="choice" >Notre choix</SelectItem>
                            <SelectItem value="newest" onClick={() => SortChange("new")}>Nouveautés</SelectItem>
                            <SelectItem value="price-low-high" onClick={() => SortChange("priceLow")}>Prix croissant</SelectItem>
                            <SelectItem value="price-high-low" onClick={() => SortChange("priceHigh")}>Prix décroissant</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex justify-between items-center mb-6">
                <span className="text-sm">Affichage de 1 à 10 sur 10 articles</span>
            </div>
        </>
    );
}