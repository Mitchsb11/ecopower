import { notFound } from "next/navigation"; // Importe la fonction notFound de next/navigation
import { getProductByID } from "../../../actions/products/get-product-by-id"; // Importe la fonction getProductByID pour récupérer les détails du produit avec son id
import { LeftPanel } from "../../../sections/product/left-section"; // Importe le composant LeftPanel depuis le dossier des sections de produit
import { RightPanel } from "../../../sections/product/right-section";

export default async function Listing({ params }: { params: any }) {
// Définit une fonction prenant params (l'id de la page correspondant à l'ID produit) comme argument

    const product = await getProductByID({ id: params.productId })
    // Récupère les détails du produit avec l'ID fourni dans les paramètres de l'URL

    if (!product) {
        return notFound() // Renvoie une erreur 404 si aucun produit n'est trouvé
    }

    return ( // Affiche les détails du produit grace au composants Left/RightPanel
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <LeftPanel product={product} />
                <RightPanel cover={product.imageSrc} images={product.images} />
            </div>
        </div>
    )
}

