// Import des icônes à partir de la bibliothèque "lucide-react"
import { Store } from "lucide-react";

// Définition du composant A propos
export default function AboutUs() {
    return (
        // Conteneur principal
        <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
            {/* Grille pour organiser les sections */}
            <div className="grid gap-8">
                <div className="grid gap-4">
                    {/* Titre de la section */}
                    <h1 className="flex items-center text-3xl font-bold tracking-tight md:text-4xl">
                        {"À propos d'EcoPower Drive"}
                        {/* Icône d'échelle */}
                        <Store className="ml-3 h-8 w-8 md:h-10 md:w-10"/>
                    </h1>
                </div>
                {/* Section "Notre histoire" */}
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        {/* Titre de la section */}
                        <h2 className="text-xl font-semibold">{"Notre histoire"}</h2>
                        {/* Paragraphe */}
                        <p className="text-gray-500 dark:text-gray-400">
                            {"EcoPower Drive a été fondée en 2024 avec une vision simple : proposer des solutions de transport respectueuses de l'environnement sans compromettre la performance. Ce qui a commencé comme une idée ambitieuse est devenu une réalité grâce à notre dévouement, notre innovation et notre passion pour un avenir durable."}
                        </p>
                    </div>

                    <div className="grid gap-2">
                        <h2 className="text-xl font-semibold">Notre mission</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            {"Chez EcoPower Drive, notre mission est de fournir des produits de qualité supérieure qui permettent à nos clients de se déplacer de manière écologique et efficace. Nous croyons fermement que chaque petit geste compte dans la préservation de notre planète, c'est pourquoi nous nous engageons à offrir des solutions de transport durables qui contribuent à un avenir meilleur pour tous."}
                        </p>
                    </div>

                    <div className="grid gap-2">
                        <h2 className="text-xl font-semibold">Nos valeurs</h2>
                        <ul className="list-disc space-y-2 pl-6 text-gray-500 dark:text-gray-400">
                            <li>{"Durabilité : Nous nous engageons à réduire notre empreinte écologique en offrant des produits respectueux de l'environnement et en adoptant des pratiques commerciales durables."}</li>
                            <li>{"Qualité : Nous sommes déterminés à fournir des produits de la plus haute qualité pour garantir la satisfaction et la confiance de nos clients."}</li>
                            <li>{"Innovation : Nous cherchons constamment à repousser les limites de la technologie pour proposer des solutions de transport toujours plus avancées et efficaces."}</li>
                        </ul>
                    </div>

                    <div className="grid gap-2">
                        <h2 className="text-xl font-semibold">Engagement envers la durabilité</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            {"Nous comprenons l'importance de préserver notre environnement pour les générations futures. C'est pourquoi nous nous engageons à réduire notre empreinte carbone en utilisant des matériaux durables, en favorisant les transports écologiques et en soutenant des initiatives de conservation."}
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <h2 className="text-xl font-semibold">{"L'équipe EcoPower Drive"}</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            {"Rencontrez l'équipe passionnée derrière EcoPower Drive. Nos membres partagent tous une passion commune pour la durabilité et l'innovation."}
                        </p>
                        <ul className="list-disc space-y-2 pl-6 text-gray-500 dark:text-gray-400">
                            <li>{"Amayas Matmar"}</li>
                            <li>{"Bilal Hamzaoui"}</li>
                            <li>{"Feriel Benmazari"}</li>
                            <li>{"Aaron Aidoudi"}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}