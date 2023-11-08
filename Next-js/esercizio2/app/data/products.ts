import { Product, Category } from "./types";

const categories : Category[] = [
    { id: 1, label: "Elettrodomestici" },
    { id: 2, label: "Elettronica" },
    { id: 3, label: "Abbigliamento Sportivo" },
    { id: 4, label: "Libri" },
    { id: 5, label: "Mobili" },
    { id: 6, label: "Orologi" },
    { id: 7, label: "Accessori Moda" },
    { id: 8, label: "Giochi da Tavolo" },
    { id: 9, label: "Sport e AttivitÃ  all'Aperto" },
    { id: 10, label: "Casa e Cura Personale" },
    { id: 11, label: "Arredamento Interno" },
    { id: 12, label: "Strumenti Musicali" }
  ];
  
  const products : Product[] = [
    {
      id: 1,
      label: "Lavatrice Samsung",
      description: "Lavatrice a carica frontale con display LED.",
      price: 499.99,
      id_category: 1
    },
    {
      id: 2,
      label: "Smartphone iPhone 13",
      description: "Ultimo modello di iPhone con fotocamera avanzata.",
      price: 899.99,
      id_category: 2
    },
    {
      id: 3,
      label: "Scarpe da Corsa Nike",
      description: "Scarpe leggere e comode per il running.",
      price: 79.99,
      id_category: 3
    },
    {
      id: 4,
      label: "Libro 'Il Signore degli Anelli'",
      description: "Il classico fantasy di J.R.R. Tolkien.",
      price: 14.99,
      id_category: 4
    },
    {
      id: 5,
      label: "Tavolo da Pranzo in Legno",
      description: "Tavolo elegante per la sala da pranzo.",
      price: 299.99,
      id_category: 5
    },
    {
      id: 6,
      label: "Fotocamera Canon EOS",
      description: "Fotocamera reflex digitale ad alte prestazioni.",
      price: 699.99,
      id_category: 2
    },
    {
      id: 7,
      label: "Forno a Microonde Panasonic",
      description: "Forno a microonde con funzioni avanzate.",
      price: 129.99,
      id_category: 1
    },
    {
      id: 8,
      label: "Orologio da Polso Casio",
      description: "Orologio digitale resistente all'acqua.",
      price: 49.99,
      id_category: 6
    },
    {
      id: 9,
      label: "Borsa a Tracolla Puma",
      description: "Borsa sportiva per l'uso quotidiano.",
      price: 34.99,
      id_category: 7
    },
    {
      id: 10,
      label: "Cuffie Sony WH-1000XM4",
      description: "Cuffie wireless con cancellazione del rumore.",
      price: 249.99,
      id_category: 2
    },
    {
      id: 11,
      label: "Maglia da Calcio Adidas",
      description: "Maglia ufficiale di una squadra di calcio.",
      price: 59.99,
      id_category: 3
    },
    {
      id: 12,
      label: "Televisore 4K LG",
      description: "TV con schermo 4K ultra HD e Smart TV integrata.",
      price: 699.99,
      id_category: 2
    },
    {
      id: 13,
      label: "Gioco da Tavolo 'Catan'",
      description: "Gioco di strategia per la famiglia.",
      price: 39.99,
      id_category: 8
    },
    {
      id: 14,
      label: "Bicicletta da Corsa Trek",
      description: "Bicicletta leggera per gli amanti del ciclismo.",
      price: 899.99,
      id_category: 9
    },
    {
      id: 15,
      label: "Forno Elettrico Kenmore",
      description: "Forno elettrico con funzioni di cottura avanzate.",
      price: 349.99,
      id_category: 1
    },
    {
      id: 16,
      label: "Cuscino Memory Foam",
      description: "Cuscino ortopedico in schiuma memory foam.",
      price: 29.99,
      id_category: 10
    },
    {
      id: 17,
      label: "Borsa da Viaggio Samsonite",
      description: "Borsa resistente per viaggiatori frequenti.",
      price: 149.99,
      id_category: 7
    },
    {
      id: 18,
      label: "Monitor Dell Ultrasharp",
      description: "Monitor da 27 pollici per grafica e design.",
      price: 349.99,
      id_category: 2
    },
    {
      id: 19,
      label: "Tappeto Shaggy Moderno",
      description: "Tappeto morbido per il soggiorno.",
      price: 79.99,
      id_category: 11
    },
    {
      id: 20,
      label: "Strumento Musicale Violino",
      description: "Violino acustico per musicisti aspiranti.",
      price: 199.99,
      id_category: 12
    }
  ];