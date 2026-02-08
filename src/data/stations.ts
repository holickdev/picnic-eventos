export interface Station {
    id: string;
    title: string;
    description: string;
    images: string[];
    referencial_images?: boolean;
    includes: string[];
}

export const stations: Station[] = [
    {
        id: "maceta",
        title: "Decora tu Maceta",
        description:
            "¡Haz que tu fiesta florezca! Pinta, diseña y personaliza tu propia maceta mientras te diviertes con amigos.",
        images: [
            "/img/estaciones/estacion-decora-tu-maceta-1.webp",
            "/img/estaciones/estacion-decora-tu-maceta-2.webp",
            "/img/estaciones/estacion-decora-tu-maceta-3.webp",
            "/img/estaciones/estacion-decora-tu-maceta-4.webp",
        ],
        includes: [
            "Macetas de cerámica",
            "Pinturas acrílicas",
            "Pinceles variados",
            "Plantita decorativa",
            "Protector de mesa",
        ],
    },
    {
        id: "arte",
        title: "Estación de Arte",
        description:
            "¡Libera tu imaginación! Crea obras maestras con colores, creatividad y risas garantizadas.",
        images: [
            "/img/estaciones/estacion-de-arte-1.webp",
            "/img/estaciones/estacion-de-arte-2.webp",
            "/img/estaciones/estacion-de-arte-3.webp",
            "/img/estaciones/estacion-de-arte-4.webp",
        ],
        includes: [
            "Lienzos",
            "Lápices de colores",
            "Marcadores",
            "Acuarelas",
            "Caballetes portátiles",
        ],
    },
    {
        id: "llavero",
        title: "Decora tu Llavero",
        description:
            "¡Lleva la diversión contigo! Los invitados podrán crear sus propios llaveros personalizados con diferentes materiales y colores.",
        images: [
            "/img/estaciones/estacion-decora-tu-llavero-1.webp",
            "/img/estaciones/estacion-decora-tu-llavero-2.webp",
            "/img/estaciones/estacion-decora-tu-llavero-3.webp",
        ],
        referencial_images: true,
        includes: [
            "Materiales variados",
            "Llaveros base",
            "Accesorios decorativos",
            "Herramientas necesarias",
        ],
    },
    {
        id: "lentes",
        title: "Decora tus Lentes",
        description:
            "¡Estilo y creatividad en un solo lugar! Personaliza tus propias gafas de sol con colores, pegatinas y mucho más.",
        images: [
            "/img/estaciones/estacion-decora-tus-lentes-1.webp",
            "/img/estaciones/estacion-decora-tus-lentes-2.webp",
            "/img/estaciones/estacion-decora-tus-lentes-3.webp",
        ],
        referencial_images: true,
        includes: [
            "Gafas base de sol",
            "Pegatinas variadas",
            "Cristales decorativos",
        ],
    },
    {
        id: "bisuteria",
        title: "Estación de Bisutería",
        description:
            "¡Haz que tu cumple brille! Crea joyas únicas con tus amigos. Diseñar y lucir tus propias piezas es la mejor manera de celebrar.",
        images: [
            "/img/estaciones/estacion-bisuteria-1.webp",
            "/img/estaciones/estacion-bisuteria-2.webp",
            "/img/estaciones/estacion-bisuteria-3.webp",
        ],
        referencial_images: true,
        includes: [
            "Cuentas y dijes variados",
            "Hilos y cadenas",
            "Herramientas de joyería",
            "Cierres y enganches",
        ],
    },
    {
        id: "spa",
        title: "Estación de SPA",
        description:
            "El mejor regalo para las fashionistas. Relájate mientras disfrutas de tratamientos de skincare, masajes y más.",
        images: [
            "/img/estaciones/estacion-spa-1.webp",
            "/img/estaciones/estacion-spa-2.webp",
            "/img/estaciones/estacion-spa-3.webp",
            "/img/estaciones/estacion-spa-4.webp",
        ],
        referencial_images: true,
        includes: [
            "Mascarillas faciales",
            "Esmaltes de uñas",
            "Cremas",
            "Lociones",
            "Toallas suaves",
        ],
    },
    {
        id: "cupcake",
        title: "Decora tu Cupcake",
        description:
            "¡Dulces y creatividad! Conviértete en todo un chef y decora tus propios cupcakes con glaseados y chispas.",
        images: [
            "/img/estaciones/estacion-decora-tu-cupcake-1.webp",
            "/img/estaciones/estacion-decora-tu-cupcake-2.webp",
            "/img/estaciones/estacion-decora-tu-cupcake-3.webp",
            "/img/estaciones/estacion-decora-tu-cupcake-4.webp",
        ],
        referencial_images: true,
        includes: [
            "Cupcakes horneados",
            "Glaseados variados",
            "Chispas de colores",
            "Manga pastelera",
            "Decoraciones comestibles",
        ],
    },
    {
        id: "burbuja",
        title: "Estación Burbuja",
        description:
            "¡Magia en cada burbuja! Sumérgete en un mundo de diversión creando y jugando con burbujas gigantes.",
        images: [
            "/img/estaciones/estacion-burbuja-1.webp",
            "/img/estaciones/estacion-burbuja-2.webp",
            "/img/estaciones/estacion-burbuja-3.webp",
        ],
        referencial_images: true,
        includes: [
            "Solución de burbujas",
            "Varitas gigantes",
            "Máquina de burbujas",
        ],
    },
];
