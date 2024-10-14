import Link from "next/link"; // Importe le composant de lien de Next.js pour la navigation entre les pages.
import { getProducts } from "../../actions/products/get-products"; // Importe la fonction pour récupérer les produits depuis l'action correspondante.
import { Produit } from "../../payload-types"; // Importe le type de données des produits.
import { cn, formatPrice } from "../../lib/utils"; // Importe des utilitaires pour la mise en forme et la manipulation de chaînes.
import { Header } from "../../sections/productListing/header"; // Importe le composant de l'en-tête de la liste de produits.
import { SideBar } from "../../sections/productListing/sidebar"; // Importe le composant de la barre latérale de la liste de produits.

export default async function Component() {
    const products = await getProducts({sortOption: "", whereOption: ""}) // Récupération des produits depuis le CMS

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row">
                    <SideBar/> {/* Composant Sidebar pour filtrer les produits */}
                    <main className="w-full md:w-3/4 px-2"> {/* Conteneur principal pour les produits */}
                        <Header /> {/* En-tête de la page */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                            {products.map((product) => <Product product={product} />)} {/* Grille pour afficher les produits */}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}



const Product = ({ product }: { product: Produit }) => { // Composant Product pour afficher les détails d'un produit individuel

    return (
        <div className="space-y-2">
            <Link href={`/product/${product.id}`}> {/* Lien vers la page détaillée du produit */}
                <img
                    className="w-full h-auto rounded-lg border-2 border-gray-200"
                    height="250"
                    src={product.imageSrc.url!}
                    style={{
                        aspectRatio: "1/1",
                        objectFit: "cover",
                    }}
                    width="250"
                    alt={product.imageSrc.alt!}
                />
            </Link>
            <div className="flex justify-between items-center">
                {/* Section pour afficher les informations de prix et de réduction (SSI il y a une réduction) */}
                {product.sale && (
                    <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        Réduction
                    </span>
                )}
                <div className="flex space-x-1">
                    <span className={cn(product.sale && "line-through text-gray-400", "text-sm")}>
                        {formatPrice(product.price)}
                    </span>
                    {product.sale &&
                        <span className="text-sm font-semibold">
                            {formatPrice(product.priceDiscounted!)}
                        </span>
                    }
                </div>
            </div>
            {/* Titre du produit */}
            <h3 className="font-semibold">{product.name}</h3>
        </div >
    );
};