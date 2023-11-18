"use client"

// Importa React e gli hook di React necessari
import React, { useState, useRef } from 'react';

// Interfaccia per definire la struttura del prodotto
interface Product {
    label: string;
    description: string;
    price: number;
    image: string;
}

// Props per il componente ProductModal
interface ProductModalProps {
    isOpen: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

// Componente ProductModal
const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose}) => {
    const formRef = useRef<HTMLFormElement>(null);
    // Stati per i campi del form

    // Funzione per gestire l'invio del form
    async function handleSubmit(e : any) {
        e.preventDefault();
        const label = e.target.elements.label.value
        const description = e.target.elements.description.value
        const price = e.target.elements.price.value
        const image = label.replace(/\s/g, "_") + ".jpeg"

        console.log("vedi label", label);


        // Crea un oggetto Product con i dati inseriti
        const newProduct: Product = {
            label,
            description,
            price,
            image,
        };
        console.log("vedi il modale", newProduct);

        const data = await fetch('/api/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
          })
          const response = await data.json()
          console.log(response.success);
          if (response.success) {
           onClose(false);
           formRef.current?.reset();
          }
        
    };

    return (
        // Verifica se la modale è aperta
        isOpen && (
          <>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
                <div className="relative bg-white p-8 rounded-md max-w-md">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Aggiungi Prodotto</h3>
                  <form ref={formRef} onSubmit={handleSubmit} method='POST' className="space-y-4" action="">
                    {/* Campo del form */}
                      <label htmlFor="label" className="block text-sm font-medium text-gray-700">
                        Label
                      </label>
                      <input
                        type="text"
                        id="label"
                        name="label"
                        className="mt-1 p-2 w-full border rounded-md text-xl text-black"
                        required
                      />
                    {/* Campo del form */}
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        className="mt-1 p-2 w-full border rounded-md text-xl text-black"
                        required
                      ></textarea>
                    {/* Campo del form */}
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        step={0.1}
                        className="mt-1 p-2 w-full border rounded-md text-xl text-black"
                        required
                      />
      
                    <div className="flex justify-end space-x-4">
                      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                        Aggiungi
                      </button>
                      <button onClick={() => onClose(prev => !prev)} className="bg-blue-500 text-white py-2 px-4 rounded-md">
                        Annulla
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )
      );
};

export default ProductModal;