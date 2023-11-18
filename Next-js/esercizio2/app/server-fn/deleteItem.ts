'use server'
import { products } from "../data/products"

let el = products
let removedElements: any[] = []

async function remove(id: number) {
    // Trova l'elemento da eliminare
    const removedItem = el.find((item) => item.id === id);

    // Se l'elemento esiste, rimuovilo dall'array originale
    if (removedItem) {
        el = el.filter((item) => item.id !== id);

        // Aggiungi l'elemento eliminato all'array "removedElements"
        removedElements.push(removedItem);
    }

    console.log(el);
    console.log("Elementi eliminati:", removedElements);

    return el;
}

export { remove }