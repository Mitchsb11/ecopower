// Import des icônes à partir de la bibliothèque "lucide-react"
import { Scale } from "lucide-react";

// Définition du composant Legal
export default function Legal() {
    return (
        // Conteneur principal
        <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
            {/* Grille pour organiser les sections */}
            <div className="grid gap-8">
                {/* Section "Mention légales" */}
                <div className="grid gap-4">
                    {/* Titre de la section */}
                    <h1 className="flex items-center text-3xl font-bold tracking-tight md:text-4xl">
                        {"Mention légales"}
                        {/* Icône d'échelle */}
                        <Scale className="ml-3 h-8 w-8 md:h-10 md:w-10"/>
                    </h1>
                    {/* Paragraphe introductif */}
                    <p className="text-gray-500 dark:text-gray-400">
                        {"Bienvenue sur le site de commerce électronique EcoPower Drive. Veuillez lire attentivement nos mentions légales."}
                    </p>
                </div>
                {/* Section "Conditions d'utilisation" */}
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        {/* Titre de la section */}
                        <h2 className="text-xl font-semibold">{"Conditions d'utilisation"}</h2>
                        {/* Paragraphe */}
                        <p className="text-gray-500 dark:text-gray-400">
                            {"En accédant et en utilisant ce site Web, vous acceptez d'être lié par les termes et conditions suivants :"}
                        </p>
                        {/* Liste des conditions */}
                        <ul className="list-disc space-y-2 pl-6 text-gray-500 dark:text-gray-400">
                            {/* Items de la liste */}
                            <li>
                                {"Vous devez avoir au moins 18 ans ou avoir atteint l'âge de la majorité dans votre juridiction pour utiliser ce site Web."}
                            </li>
                            <li>
                                {"Vous acceptez d'utiliser ce site Web uniquement à des fins licites et d'une manière qui ne porte pas atteinte aux droits de votre juridiction, ou restreindre ou inhiber l'utilisation et la jouissance de ce site Web par un tiers."}
                            </li>
                            <li>
                                {"Vous êtes responsable du maintien de la confidentialité de votre compte et de votre mot de passe, et de restreindre l'accès à votre ordinateur."}
                            </li>
                            <li>
                                {"Nous nous réservons le droit de modifier, suspendre ou interrompre le site Web ou toute partie de celui-ci à tout moment sans préavis."}
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-2">
                        <h2 className="text-xl font-semibold">Politique de confidentialité</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Nous sommes chargés de protéger votre vie privée. Nous collectons et utilisons vos informations personnelles conformément
                            avec notre politique de confidentialité :
                        </p>
                        <ul className="list-disc space-y-2 pl-6 text-gray-500 dark:text-gray-400">
                            <li>
                                Nous pouvons collecter des informations telles que votre nom, votre adresse e-mail, votre adresse de livraison et vos informations de paiement.                            </li>
                            <li>
                                Nous utilisons ces informations pour traiter vos commandes, communiquer avec vous et améliorer notre site Web et
                                prestations de service.
                            </li>
                            <li>
                                Nous ne vendons ni ne partageons vos informations personnelles avec des tiers sans votre consentement, sauf dans les cas suivants :
                                Requis par la loi.
                            </li>
                            <li>Vous pouvez consulter et mettre à jour vos informations personnelles à tout moment en vous connectant à votre compte.</li>
                        </ul>
                    </div>
                    <div className="grid gap-2">
                        <h2 className="text-xl font-semibold">Politique de remboursement</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            {"Nous garantissons la qualité de nos produits et services. Si vous n'êtes pas satisfait de votre achat, vous pouvez être éligibles à un remboursement: "}
                        </p>
                        <ul className="list-disc space-y-2 pl-6 text-gray-500 dark:text-gray-400">
                            <li>Vous devez demander un remboursement dans les 30 jours suivant votre achat.</li>
                            <li>Certains produits, tels que les articles fabriqués sur mesure ou personnalisés, peuvent ne pas donner droit à un remboursement.</li>
                            <li>{"Nous nous réservons le droit de refuser un remboursement si nous déterminons que l'article a été utilisé ou endommagé."}</li>
                        </ul>
                    </div>
                    <div className="grid gap-2">
                        <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Ce site internet et son contenu sont la propriété de ses créateurs. Vous ne pouvez pas utiliser, copier ou distribuer aucun des
                            contenu de ce site Web sans notre consentement écrit préalable.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <h2 className="text-xl font-semibold">Limitation de responsabilité</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Nous ne serons pas responsables des dommages indirects, spéciaux, accessoires ou consécutifs découlant de ou
                            liés à votre utilisation de ce site Web ou à l’achat de produits ou services.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <h2 className="text-xl font-semibold">Loi applicable</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Ces termes et conditions seront régis et interprétés conformément aux lois francaises, sans donner effet à aucun principe de conflit de lois.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}