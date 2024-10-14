// Page de chargement affichée pendant le chargement des données
'use client'

import { Loader } from 'lucide-react'; // Icone de chargement impoté de lucide-react

function LoadingPage() {
    return (
        <div className='flex flex-col items-center justify-center w-full min-h-[80vh] py-6 space-y-4'>
            <div className='pb-4 text-gray-500 text-2xl font-medium'>
                Donnez-nous une seconde.
            </div>
            <div className='flex justify-center items-center text-gray-500 space-x-3 text-1xl font-medium'>
                Chargement... <Loader className="h-6 w-6 animate-spin" />
            </div>
        </div>
    );
}

export default LoadingPage;
