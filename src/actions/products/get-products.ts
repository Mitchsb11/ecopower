import payload from "payload";

export const getProducts = async ({sortOption, whereOption}: { sortOption: any, whereOption: any }) => {
    // Définir la clause de tri en fonction de l'option sélectionnée
    let sortClause = 'id'; // Valeur par défaut

    if (sortOption === 'new') {
        sortClause = 'createdAt'; // Tri par nouveauté
    } else if (sortOption === 'priceLow') {
        sortClause = 'price'; // Tri par prix bas
    } else if (sortOption === 'priceHigh') {
        sortClause = '-price'; // Tri par prix élevé
    } else if (sortOption === 'sale') {
        sortClause = '-sale'; // Tri par articles en promotion
    } else {
        sortClause = 'id';
    }

    // Définir la clause where en fonction de l'option sélectionnée
    let whereClause = { };

    if (whereOption === 'SR') {
        whereClause = { category: { equals: "SR" } };
    } else if (whereOption === 'TS') {
        whereClause = { category: { equals: "TS" } };
    } else if (whereOption === 'CR') {
        whereClause = { category: { equals: "CE" } };
    }else if (whereOption === 'PR') {
        whereClause = { category: { equals: "PR" } };
    } else if (whereOption === 'SRP') {
        whereClause = { category: { equals: "SRP" } };
    }else if (whereOption === 'price200') {
        whereClause = { price: { lessThan: 200} };
    }else if (whereOption === 'price500') {
        whereClause = { price: { lessThan: 500 } };
    }else if (whereOption === 'N' || whereOption === 'B') {
        whereClause = { colors: { equals: "Blanc & Noir" } };
    }else if (whereOption === 'G') {
        whereClause = { colors: { equals: "Gris" } };
    }else if (whereOption === '5stars') {
        whereClause = { review: { equals: 5 } };
    }else if (whereOption === '4stars') {
        whereClause = { review: { equals: 4 } };
    }else if (whereOption === '3stars') {
        whereClause = { review: { equals: 3 } };
    } else {
        whereClause = { };
    }

    // Exécuter la recherche avec les options de tri et de filtre
    const { docs } = await payload.find({
        collection: "Produits",
        sort: sortClause,
        where: whereClause,
    });

    return docs;
};
