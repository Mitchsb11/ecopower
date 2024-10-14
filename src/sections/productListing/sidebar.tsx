"use client"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
import {getProducts} from "../../actions/products/get-products";
import {ListRestart} from 'lucide-react';
import {Header} from "@/sections/productListing/header";

export function SideBar() {
    const WhereChange = ({whereOption}: { whereOption: any }) => {
        handleFilterChange = whereOption; // Appel de la fonction de mise à jour des filtres
    };

    return (

        <aside
            className="w-full md:w-1/4 px-2 mb-4 md:mb-0 mt-10 mr-3"> {/* Définit un panneau latéral pour les options de recherche*/}
            <h2 className="text-lg font-semibold mb-4">Parcourir par :</h2>
            <ul className="space-y-2 mb-6"> {/* Liste d'options de recherche */}
                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                    onClick={() => WhereChange({whereOption: ""})}>Tout
                </li>
                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                    onClick={() => WhereChange({whereOption: "Sale"})}>Réduction
                </li>
                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                    onClick={() => WhereChange({whereOption: "SR"})}>Stations de charge
                </li>
                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                    onClick={() => WhereChange({whereOption: "SRP"})}>Station de charge portable
                </li>
                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                    onClick={() => WhereChange({whereOption: "CR"})}>Câbles de chargement
                </li>
                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                    onClick={() => WhereChange({whereOption: "PR"})}>Prise de charge
                </li>
                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                    onClick={() => WhereChange({whereOption: "TS"})}>Accessoires intérieurs
                </li>
            </ul>
            <div className="space-y-4 mt-5">
                <h3 className="font-semibold mb-2">Filtrer par :</h3>
                {/* Accordion pour des otpions de recherches qui peuvent se rabbattre */}
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Prix</AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-2 mb-6">
                                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                                    onClick={() => WhereChange({whereOption: "price500"})}>Moins de 500€
                                </li>
                                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                                    onClick={() => WhereChange({whereOption: "price200"})}>Moins de 200€
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Couleur</AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-2 mb-6">
                                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                                    onClick={() => WhereChange({whereOption: "N"})}>Noir
                                </li>
                                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                                    onClick={() => WhereChange({whereOption: "B"})}>Blanc
                                </li>
                                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                                    onClick={() => WhereChange({whereOption: "G"})}>Gris
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Avis</AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-2 mb-6">
                                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                                    onClick={() => WhereChange({whereOption: "5stars"})}>5 étoiles seulement
                                </li>
                                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                                    onClick={() => WhereChange({whereOption: "4stars"})}>4 étoiles ou plus
                                </li>
                                <li className="text-gray-900 cursor-pointer hover:font-semibold"
                                    onClick={() => WhereChange({whereOption: "3stars"})}>3 étoiles ou plus
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Bouton pour réinitialiser tous les filtres */}
                <Button className="w-full" variant="outline" onClick={() => WhereChange({whereOption: ""})}>
                    <ListRestart className="w-4 h-4 mr-2"/>
                    Réinitialiser tous les filtres
                </Button>
            </div>
        </aside>


)
}