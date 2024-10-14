"use client" // Déclare l'utilisation du côté client pour certaines fonctionnalités

import Link from "next/link"; // Importe le composant de lien de Next.js pour la navigation
import { Label } from "@/components/ui/label"; // Importe le composant d'étiquette
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, HeartIcon, StarIcon, ShoppingCart } from "lucide-react"; // Importe des icônes de la bibliothèque Lucide React
import { useCart } from "../../Providers/cart-provider"; // Importe le hook useCart depuis le fournisseur de panier
import { useWishlist } from "../../Providers/wishlist-provider"; // Importe le hook useWishlist depuis le fournisseur de liste de souhaits
import { useEffect, useState } from "react"; // Importe les hooks useEffect et useState de React
import { cn, formatPrice } from "../../lib/utils"; // Importe certaines fonctions utilitaires
import { Produit } from "../../payload-types"; // Importe le type de données Produit


export function LeftPanel({ product: initProduct }: { product: Produit }) {

    const { addToCart } = useCart() // Hook pour ajouter un produit au panier
    const { addToWishlist } = useWishlist() // Hook pour ajouter un produit à la liste de souhaits

    const [product, setProduct] = useState<any>(initProduct) // État local pour le produit et initialisation avec les données initiales

    useEffect(() => {     // Pour initialiser les données du produit
        setProduct({ ...initProduct, quantity: 1, color: initProduct.colors[0].color })
    }, [])

    const setQuantity = (value: string) => {     // Fonction pour définir la quantité sélectionnée
        setProduct((product: any) => { return { ...product, quantity: parseInt(value) } })
    }
    const setColor = (value: string) => {     // Fonction pour définir la couleur sélectionnée
        setProduct({ ...product, color: value })
    }

    return (
        <div className="flex flex-col w-full lg:w-1/2">

            <BreadCrumb product={product}/> {/* Affichage du fil tq : "Acceuil > Produits > {product.name} grace à la fonction*/}
            <ProductDetails product={product}/> {/* Affichage des détails du produit */}

            <div className="mt-6 grid gap-4 md:gap-8">

                <QuantitySelector inventory={product.inventory} setQuantity={setQuantity} /> {/* Sélecteur de quantité avec indication de l'inventaire */}
                <ColorSelector colors={product.colors} setColor={setColor}/> {/* Sélecteur de couleur avec les couleurs disponibles */}

                    <div className="flex items-center justify-between mt-2">

                        <Button className="text-red-600" size="lg" variant="outline" onClick={() => addToWishlist(product)}>
                            {/* Bouton d'ajout à la wishlist */}
                            <HeartIcon className="w-4 h-4 mr-2" />
                            Ajouter à la wishlist
                        </Button>

                        <Button className="ml-2 w-full bg-blue-900 text-white" size="lg" variant="outline" type="button" onClick={() => addToCart(product)}>
                            {/* Bouton d'ajout au panier */}
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Ajouter au panier
                        </Button>

                    </div>

                </div>

        </div>
    )
}

const BreadCrumb = ({ product }: { product: Produit }) => { // Affiche le chemin suivi par l'utilisateur
    return (
        <div className="flex items-center gap-2 text-sm">
            <Link className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/">
                Accueil
            </Link>
            <ChevronRightIcon className="h-3 w-3 fill-current-foreground-50 text-gray-400" />
            <Link
                className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/product">
                Produits
            </Link>
            <ChevronRightIcon className="h-3 w-3 fill-current-foreground-50 text-gray-400" />
            <span className="font-medium">{product.name}</span>
        </div>
    )
}

const QuantitySelector = ({ inventory, setQuantity }: { inventory: number, setQuantity: any }) => {
    // Affiche un sélecteur de quantité pour permettre à l'utilisateur de choisir le nombre d'articles qu'il souhaite ajouter au panier
    return (
        <div className="grid gap-2">
            {/* Libellé du champ de quantité */}
            <Label className="text-base" htmlFor="quantity">
                Quantité
            </Label>
            {/* Sélecteur de quantité */}
            <Select defaultValue="1" onValueChange={setQuantity}>
                <SelectTrigger className="w-24">
                    <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                    {new Array(inventory).fill(0).map((_, index) => {
                        return <>
                            <SelectItem value={`${index + 1}`}>{index + 1} </SelectItem>
                        </>
                    })}
                </SelectContent>
            </Select>
        </div>
    )
}

const ColorSelector = ({ colors, setColor }: { colors: Produit["colors"], setColor: any }) => {
    // Affiche un sélecteur de couleur permettant à l'utilisateur de choisir la couleur de l'article.
    return (
        <div className="grid gap-2">
            {/* Libellé du champ de couleur */}
            <Label className="text-base" htmlFor="color">
                Couleur
            </Label>
            {/* Groupe de boutons pour les options de couleur */}
            <RadioGroup className="flex items-center gap-2" defaultValue={colors[0].color!} id="color" onValueChange={setColor}>
                {colors.map((colorObj) => {
                    const { color } = colorObj
                    return (
                        <Label
                            key={color}
                            className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                            htmlFor={`color-${color}`}
                        >
                            <RadioGroupItem id={`color-${color}`} value={color!} />
                            {color}
                        </Label>
                    )
                })}
            </RadioGroup>
        </div>
    );
};

const ProductDetails = ({ product }: { product: Produit }) => {
    // Affiche les détails du produit sélectionné, y compris son nom, son prix, sa note, le type d'utilisateur connecté et la description du produit
    const renderStars = (review: number) => { // Prend en paramètre le nombre d'étoiles (note) d'un produit et retourne une liste d'icônes représentant les étoiles
        const filledStars = Math.floor(review); // Nombre d'étoiles remplies
        const remainingStars = 5 - filledStars; // Nombre d'étoiles vides

        const starIcons = [];
        // Ajouter les étoiles remplies
        for (let i = 0; i < filledStars; i++) {
            starIcons.push(
                <StarIcon key={`star-filled-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            );
        }
        // Ajouter les étoiles vides
        for (let i = 0; i < remainingStars; i++) {
            starIcons.push(
                <StarIcon key={`star-empty-${i}`} className="w-5 h-5 text-yellow-400" />
            );
        }
        return starIcons;
    };

    return <>
        {/* Affiche le nom du produit sélectionné : c'est le titre de la page */}
        <h1 className="mt-7 text-4xl font-bold tracking-tight text-gray-900" >{product.name}</h1>
        {/* Paragraphe affichant le prix initial du produit sélectionné*/}
        < p className={cn(product.sale ? "text-gray-400 line-through  text-sm" : "text-3xl font-extrabold", "mt-7")} > {formatPrice(product.price)}</ p>
        {/* Paragraphe affichant le prix spécial du produit sélectionné*/}
        {product.sale && <p className="text-3xl font-extrabold" > {formatPrice(product?.priceDiscounted!)}</p >}

        <div className="flex items-center mt-3">
            {/* Affichage des étoiles en fonction du nombre d'avis */}
            {renderStars(product.review as number)}
            {/* Paragraphe affichant la note du produit sélectionné*/}
            <p className="ml-2 text-sm text-gray-500">{product.review}/5</p>
        </div>

        {/* Paragraphe affichant quel type d'utilisateur est connecté et rappelant si il y a une réduction*/}
        <p className="mt-3 text-sm text-gray-600">
            Connecté en tant que <span className="font-medium text-gray-900">Revendeur</span> -
            Réduction de prix appliquée
        </p>
        {/* Paragraphe affichant la description du produit sélectionné*/}
        <p className="mt-4 mr-6 text-sm text-gray-600 whitespace-pre-line">
            {product.description}
        </p>
    </>
}

