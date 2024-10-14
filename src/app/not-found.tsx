// Page affichée lorsqu'une URL n'est pas trouvée
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-[80vh] py-6 space-y-4">
            <div className="flex flex-col items-center justify-center space-y-2">
                <h1 className="flex items-center space-x-3 text-4xl font-bold tracking-tighter lg:text-6xl mb-10">
                    {/* Affichage du code d'erreur 404 sous forme de bouton renvoyant à la page d'acceuil */}
                    <Link href={"/"}>
                        <span className="bg-blue-900 rounded-lg text-white px-3 py-1">404</span>
                    </Link>
                    {/* Message indiquant que la page n'a pas été trouvée */}
                    <span>Page non trouvée :(</span>
                </h1>
                <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                    {"Désolé, nous n'avons pu trouver la page que vous recherchez."}
                </p>
            </div>
        </div>
    )
}