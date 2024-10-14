import {MailIcon, Scale, Info, PercentCircle} from "lucide-react"; // Import des icônes à partir de la bibliothèque "lucide-react"
import Link from "next/link"; // Import des types SVGProps depuis React pour les fonctions des icones

const Footer = () => { // Définition du composant Footer
    return (
        <footer className="bg-white p-5 mt-8 text-center border border-gray-300"> {/* Pied de page */}

            <div className="py-10 px-4 md:px-8 lg:px-16 xl:px-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="text-center"> {/* 1er element : Réductions */}
                        <div className="mb-2">
                            <PercentCircle className="h-6 w-20 mx-auto"/>
                        </div>
                        <h5 className="text-lg font-semibold">RÉDUCTIONS UNIQUES</h5>
                        <Link href={"/contact"}>
                        <p className="text-sm">Vous étes un revendeur ? Dites-le nous !</p> {/* Renvoie vers la page de contact */}
                        </Link>
                    </div>

                    <div className="text-center">  {/* 2e element : ML */}
                        <div className="mb-2">
                            <Scale className="h-6 w-20 mx-auto"/>
                        </div>
                        <h5 className="text-lg font-semibold">MENTIONS LÉGALES</h5>
                        <Link href={"/legal"}>
                            <p className="text-sm">Voir les termes et conditions générales</p>
                        </Link>
                    </div>

                    <div className="text-center"> {/* 3e element : SC */}
                        <div className="mb-2">
                            <Info
                                className="h-6 w-20 mx-auto"/>
                        </div>
                        <h5 className="text-lg font-semibold">SERVICE CLIENT</h5>
                        <p className="text-sm">contact.ecopowerdrive@gmail.com</p>
                    </div>

                    <div className="text-center"> {/* 4e element : Newsletter */}
                        <div className="mb-2">
                            <MailIcon
                                className="h-6 w-20 mx-auto"/>
                        </div>
                        <h5 className="text-lg font-semibold">NOTRE NEWSLETTER</h5>
                        <p className="text-sm">Inscirvez-vous pour recevoir la newsletter mensuelle !</p>
                    </div>

                </div>


            </div>
        </footer>


    )
}

export default Footer // Exporte le composant Footer par défaut (implémenté dans layout.tsx)
