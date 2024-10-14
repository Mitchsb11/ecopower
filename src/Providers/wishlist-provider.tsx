"use client"

// Importer les dépendances nécessaires depuis React
import React, { createContext, useMemo, useState } from 'react';
// Importer le type de données Product depuis '../types/product'
import { Product } from '../types/product';

// Définir le contexte initial du fournisseur de données
interface WishlistContext {
    wishlistProducts: Product[]; // Liste des produits dans la liste de souhaits
    wishlistItems: number; // Nombre total d'articles dans la liste de souhaits
    addToWishlist: (product: Product) => void; // Fonction pour ajouter un produit à la liste de souhaits
    removeFromWishlist: (product: Product) => void; // Fonction pour supprimer un produit de la liste de souhaits
}

// Définir l'état initial du contexte de la liste de souhaits
const initialState: WishlistContext = {
    wishlistProducts: [], // Initialiser la liste des produits de la liste de souhaits comme vide
    wishlistItems: 0, // Initialiser le nombre total d'articles dans la liste de souhaits à zéro
    addToWishlist: (product: Product) => { }, // Définir une fonction vide pour ajouter un produit à la liste de souhaits
    removeFromWishlist: (product: Product) => { } // Définir une fonction vide pour supprimer un produit de la liste de souhaits
};

// Créer et exporter le contexte de la liste de souhaits avec le type de données défini et l'état initial
export const WishlistContext = createContext<WishlistContext>(initialState);

// Crée le fournisseur de la liste de souhaits qui gère les opérations telles que l'ajout et la suppression d'articles dans la liste de souhaits
export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Récupérer les données de la liste de souhaits depuis le stockage local ou initialiser un tableau vide
    const data = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')!) : [];
    // Utiliser un état pour gérer les produits de la liste de souhaits
    const [wishlistProducts, setWishlistItems] = useState<Array<any>>(data);

    // Fonction pour ajouter un produit à la liste de souhaits
    const addToWishlist = (product: any) => {
        if (wishlistProducts.some((wishlistProduct) => wishlistProduct?.id === product.id)) {
            setWishlistItems((cartProducts) => {
                const newWishlistProducts = wishlistProducts.map((wishlistProduct) => {
                    // Traiter les cas où le produit est déjà dans la liste de souhaits
                });
                // Mettre à jour les données de la liste de souhaits dans le stockage local
                localStorage.setItem('wishlist', JSON.stringify(newWishlistProducts));
                return newWishlistProducts;
            });
            return;
        }
        // Ajouter le produit à la liste de souhaits et mettre à jour le stockage local
        localStorage.setItem('wishlist', JSON.stringify([...wishlistProducts, product]));
        setWishlistItems([...wishlistProducts, product]);
    };

    // Fonction pour supprimer un produit de la liste de souhaits
    const removeFromWishlist = (product: any) => {
        setWishlistItems((wishlistProducts) => {
            const newWishlistProducts = wishlistProducts.filter((wishlistProduct) => {
                // Filtrer les produits à supprimer
                if (wishlistProduct.id === product.id) {
                    if (wishlistProduct.color === product.color) {
                        return false;
                    }
                }
                return true;
            });
            // Mettre à jour les données de la liste de souhaits dans le stockage local
            localStorage.setItem('wishlist', JSON.stringify(newWishlistProducts));
            return newWishlistProducts;
        });
    };

    // Utiliser useMemo pour éviter les recalculs inutiles et optimiser les performances
    const wishlist = useMemo(() => {
        return {
            wishlistProducts,
            wishlistItems: wishlistProducts.length,
            deliveryCost2: "Free",
            discount2: 0,
            addToWishlist,
            removeFromWishlist
        };
    }, [wishlistProducts]);

    // Fournir le contexte de la liste de souhaits à ses enfants
    return (
        <WishlistContext.Provider value={wishlist}>
            {children}
        </WishlistContext.Provider>
    );
};



// Hook personnalisé pour utiliser le contexte de la liste de souhaits
export const useWishlist = () => {
    // Récupérer le contexte de la liste de souhaits
    const context = React.useContext(WishlistContext);
    // Vérifier si le contexte existe
    if (!context) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};
