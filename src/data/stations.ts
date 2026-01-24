export interface Station {
    id: string;
    title: string;
    description: string;
    images: string[];
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
        id: "llavero",
        title: "Decora tu Llavero",
        description:
            "¡Lleva la diversión contigo! Los invitados podrán crear sus propios llaveros personalizados con diferentes materiales y colores.",
        images: [
            "https://images.unsplash.com/photo-1599694522028-65abc96dfd2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXljaGFpbiUyMGNyYWZ0JTIwd29ya3Nob3B8ZW58MXx8fHwxNzY1MDQzMjkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1715341731308-447fb22698bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwaWNuaWMlMjBzZXR1cHxlbnwxfHx8fDE3NjQ5NTg0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        ],
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
            "https://images.unsplash.com/photo-1702879805834-9f1d23cbb991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZGVjb3JhdGlvbiUyMGNyYWZ0fGVufDF8fHx8MTc2NTA0MzI5MXww&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1751040956411-5ba34e6d8237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGRlY29yfGVufDF8fHx8MTc2NDkyNzY3MHww&ixlib=rb-4.1.0&q=80&w=1080",
        ],
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
            "https://images.unsplash.com/photo-1715374033196-0ff662284a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbWFraW5nJTIwY3JhZnR8ZW58MXx8fHwxNzY1MDQzMjkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1764265930328-72716076e3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwb3V0ZG9vciUyMGRpbmluZ3xlbnwxfHx8fDE3NjQ5NTg0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        ],
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
            "https://images.unsplash.com/photo-1700760933941-3a06a28fbf47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBza2luY2FyZSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjQ5Njk5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1755704282977-340323fa52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGFydHklMjBzZXR1cHxlbnwxfHx8fDE3NjQ5NTg0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        ],
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
            "https://images.unsplash.com/photo-1752235166456-1427bc046f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlJTIwZGVjb3JhdGluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2NTA0MzI5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1760669348014-c23b78739fe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNlbGVicmF0aW9uJTIwdGFibGV8ZW58MXx8fHwxNzY0OTU4NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        ],
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
            "https://images.unsplash.com/photo-1644222091475-9e130051c92a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWJibGUlMjBwYXJ0eSUyMGtpZHN8ZW58MXx8fHwxNzY1MDQzMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1635607194541-122f95591b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBwaWNuaWMlMjByb21hbnRpY3xlbnwxfHx8fDE3NjQ5NTg0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        ],
        includes: [
            "Solución de burbujas",
            "Varitas gigantes",
            "Máquina de burbujas",
        ],
    },
    {
        id: "arte",
        title: "Estación de Arte",
        description:
            "¡Libera tu imaginación! Crea obras maestras con colores, creatividad y risas garantizadas.",
        images: [
            "https://images.unsplash.com/photo-1757085242675-1a047a53c04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBwYWludGluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2NDk0ODE3NXww&ixlib=rb-4.1.0&q=80&w=1080",
            "https://images.unsplash.com/photo-1758315526786-3ef1e3b07f7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFtcGFnbmUlMjBjZWxlYnJhdGlvbiUyMG91dGRvb3J8ZW58MXx8fHwxNzY0OTU4NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        ],
        includes: [
            "Lienzos",
            "Lápices de colores",
            "Marcadores",
            "Acuarelas",
            "Caballetes portátiles",
        ],
    },
];
