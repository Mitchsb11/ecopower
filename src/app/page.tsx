import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import {getProductByID} from "@/actions/products/get-product-by-id";

export default function Home() {

    return (

        <main className="">

            <article className="grid lg:grid-cols-2">
                <div className="px-8 py-20 md:px-20 lg:py-48">

                    <h1 className="text-5xl font-semibold text-transparent md:text-6xl gradient ">
                        Bienvenue à Ecopower Drive
                    </h1>
                    <p className="mt-2 text-lg">
                        Votre voyage vers une mobilité durable commence ici.
                    </p>
                    <div className="flex gap-2 mt-8">
                        
                        <a className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800" href="/about">
                            En savoir plus
                            <div className="m-auto">
                            <ArrowRight/>
                            </div>
                        </a>
                    </div>
                </div>
                {/* <div className="flex flex-col justify-center"> */}
                {/* <Image src="/acceuil.png" width={650} height={300} alt="Clerk embeddable components" /> */}
                {/* </div> */}
            </article>


            <div className="flex flex-col">

                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-4xl font-bold tracking-tighter">Produits populaires</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Découvrez nos produits les plus vendus et appréciés par nos clients
                                </p>
                            </div>
                        </div>

                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-12 ">
                            <Link href="/product/8">
                            <Card className="border rounded-lg border-2 border-gray-200"> {/* Ajout des classes pour une bordure et des coins arrondis */}
                                <img
                                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center border-b-2 border-gray-200" // Ajout des classes pour une bordure en bas
                                    style={{ width: '250px', height: '250px' }}
                                    src="/pr1_1.png"
                                    alt="Product Image"
                                />
                                <CardContent className="space-y-2 p-4">
                                    <h3 className="text-lg font-semibold">Prise de charge PR1</h3>
                                    <p className="text-gray-500 dark:text-gray-400">59,00 €</p>
                                </CardContent>
                            </Card>
                            </Link>

                            <Link href="/product/2">
                            <Card className="border rounded-lg border-2 border-gray-200"> {/* Ajout des classes pour une bordure et des coins arrondis */}
                                <img
                                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center border-b-2 border-gray-200" // Ajout des classes pour une bordure en bas
                                    style={{ width: '250px', height: '250px' }}
                                    src="/sr2_1.png"
                                />
                                <CardContent className="space-y-2 p-4">
                                    <h3 className="text-lg font-semibold">Station de charge SR2</h3>
                                    <p className="text-gray-500 dark:text-gray-400">785,00 €</p>
                                </CardContent>
                            </Card>
                            </Link>

                            <Link href="/product/10">
                            <Card className="border rounded-lg border-2 border-gray-200"> {/* Ajout des classes pour une bordure et des coins arrondis */}
                                <img
                                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center border-b-2 border-gray-200" // Ajout des classes pour une bordure en bas
                                    style={{ width: '250px', height: '250px' }}
                                    src="ts2_1.png"
                                />
                                <CardContent className="space-y-2 p-4">
                                    <h3 className="text-lg font-semibold">Diffuseur Magique EF</h3>
                                    <p className="text-gray-500 dark:text-gray-400">1,00 €</p>
                                </CardContent>
                            </Card>
                            </Link>

                            <Link href="/product/3">
                            <Card className="border rounded-lg border-2 border-gray-200"> {/* Ajout des classes pour une bordure et des coins arrondis */}
                                <img
                                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center border-b-2 border-gray-200" // Ajout des classes pour une bordure en bas
                                    style={{ width: '250px', height: '250px' }}
                                    src="/sr3_1.png"
                                    alt="Product Image"
                                />
                                <CardContent className="space-y-2 p-4">
                                    <h3 className="text-lg font-semibold">Station de charge SR3</h3>
                                    <p className="text-gray-500 dark:text-gray-400">1565,00 €</p>
                                </CardContent>
                            </Card>
                            </Link>

                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter">Explorez notre
                                catalogue complet de produits</h2>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Parcourez notre vaste collection de produits de haute qualité et trouvez celui qui
                                répond parfaitement à vos besoins
                            </p>
                        </div>
                        <div className="mt-8">
                            <Link
                                className="inline-block px-4 py-2 font-semibold text-white rounded-lg bg-blue-900"
                                href="/product"
                            >
                                Voir le catalogue
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

        </main>
    );
}
