export interface Package {
  id: string;
  title: string;
  price: number;
  capacity: string;
  description: string;
  items: string[];
  images: string[];
  bestSeller?: boolean;
}

export const packages: Package[] = [
  {
    id: "bronce",
    title: "Paquete Bronce",
    price: 55,
    capacity: "Para 2 personas",
    description: "Para citas íntimas. Ideal para 2 personas.",
    items: [
      "Velas",
      "2 Colchas",
      "1 Mesa",
      "4 Cojines",
      "Manteles",
      "Pizarrón",
      "Floreros",
      "2 Copas",
      "Candelabros",
      "Flores artificiales",
    ],
    images: [
      "/img/picnics/picnic-paquete-bronce-1.webp",
      "/img/picnics/picnic-paquete-bronce-2.webp",
      "/img/picnics/picnic-paquete-bronce-3.webp",
      "/img/picnics/picnic-paquete-bronce-4.webp",
    ],
  },
  {
    id: "esmeralda",
    title: "Paquete Esmeralda",
    price: 60,
    capacity: "Para 6 personas",
    description: "Reuniones de amigos. Máximo 6 personas.",
    items: [
      "Velas",
      "2 Colchas",
      "1 Mesa",
      "6 Cojines",
      "Manteles",
      "Pizarrón",
      "Floreros",
      "Candelabros",
      "Flores artificiales",
    ],
    images: [
      "/img/picnics/picnic-paquete-esmeralda-1.webp",
      "/img/picnics/picnic-paquete-esmeralda-2.webp",
      "/img/picnics/picnic-paquete-esmeralda-3.webp",
      "/img/picnics/picnic-paquete-esmeralda-4.webp",
    ],
  },
  {
    id: "rubi",
    title: "Paquete Rubí",
    price: 70,
    capacity: "Para 2 personas (Incluye Estructura/Tipi)",
    description:
      "Para citas especiales con estructura elegante.",
    items: [
      "Velas",
      "2 Colchas",
      "1 Mesa",
      "3 Cojines",
      "Manteles",
      "Estructura",
      "Floreros",
      "2 Copas",
      "Mini pizarra",
      "Candelabros",
      "Flores artificiales",
    ],
    images: [
      "/img/picnics/picnic-paquete-rubi-1.webp",
      "/img/picnics/picnic-paquete-rubi-2.webp",
      "/img/picnics/picnic-paquete-rubi-3.webp",
    ],
  },
  {
    id: "plata",
    title: "Paquete Plata",
    price: 75,
    capacity: "Para 12 personas",
    description: "Celebraciones grupales. Máximo 12 personas.",
    items: [
      "Velas",
      "3 Colchas",
      "2 Mesas",
      "12 Cojines",
      "Manteles",
      "Pizarrón",
      "Floreros",
      "Candelabros",
      "Flores artificiales",
    ],
    images: [
      "/img/picnics/picnic-paquete-plata-1.webp",
      "/img/picnics/picnic-paquete-plata-2.webp",
      "/img/picnics/picnic-paquete-plata-3.webp",
      "/img/picnics/picnic-paquete-plata-4.webp",
    ],
    bestSeller: true,
  },
  {
    id: "oro",
    title: "Paquete Oro",
    price: 100,
    capacity: "Para 20 personas",
    description: "Grandes eventos. Hasta 20 personas.",
    items: [
      "Velas",
      "4 Colchas",
      "3 Mesas",
      "20 Cojines",
      "Manteles",
      "Pizarrón",
      "Floreros",
      "Candelabros",
      "Flores artificiales",
    ],
    images: [
      "/img/picnics/picnic-paquete-oro-1.webp",
      "/img/picnics/picnic-paquete-oro-2.webp",
      "/img/picnics/picnic-paquete-oro-3.webp",
      "/img/picnics/picnic-paquete-oro-4.webp",
    ],
  },
];