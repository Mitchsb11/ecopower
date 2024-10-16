import { Card, CardContent } from "@/components/ui/card" // Import des composants depuis le répertoire des composants UI
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"

export function RightPanel({ cover, images }: { cover: any, images: any }) {

    const medias = [ // Création d'un tableau de médias contenant l'image de couverture et les images supplémentaires
        {
            image: cover.url,
            alt: cover.alt
        },
        // Ajout des images supplémentaires dans le tableau de médias
        ...images.map(({ image }: any) => { return { image: image.url, alt: image.alt } })]

    return <>
        {/* Conteneur pour l'image (grosse) avec position relative */}
        <div className="flex flex-col w-full lg:w-1/2" >
            <div className="relative">
                {/* Carousel pour permettre le changement de l'image avec les boutons */}
                <Carousel>
                    <CarouselContent>
                        {medias.map((media, index) => (
                            <CarouselItem key={index}>
                                <div className="p-0">
                                    <Card className="overflow-hidden rounded-lg border-2 border-gray-200">
                                        <CardContent >
                                            <img src={media.image} alt={media.alt} className="w-full h-auto" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            {/* Conteneur pour les petites images */}
            <div className="grid grid-cols-4 gap-4 mt-4">
                {medias.map((media: {
                    image: string;
                    alt: string;
                }, index: number) => (
                    // eslint-disable-next-line react/jsx-key
                    <img
                        alt={media.alt!}
                        className="w-full rounded-lg h-auto border-2 border-gray-200"
                        height="100"
                        src={media.image!}
                        style={{
                            aspectRatio: "100/100",
                            objectFit: "cover",
                        }}
                        width="100"
                    />
                ))}
            </div>
        </div >
    </ >
}
