
import { Button } from "@/components/ui/button"

export default function Thanks() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 md:px-6">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
        <div className="flex flex-col items-center space-y-6">
          <CircleCheckIcon className="text-green-500 w-16 h-16" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Merci Pour Votre Achat</h1>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Votre commande va être traîtée avec succès.
          </p>
          <a href="/">
            <Button className="w-full md:w-auto" size="lg" a="/">
              Continuer
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}