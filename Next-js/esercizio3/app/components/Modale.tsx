"use client"
import React, { useReducer, useState } from 'react'
import { Button, Modal } from 'flowbite-react';
import { Label, TextInput, Textarea } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import Product from '../types/product';
import { memo } from 'react';


function Modale({ product, onEdit }: { product: Product; onEdit: (a: any) => void }) {

    interface Product2  {
        label: string;
        description: string;
        price: number;
        category: number,
        image: string
      }
      
      interface Action {
        type: string;
        data?: any;
      }
      
      const initialState: Product2 = {
        label: '',
        description: '',
        price: 0,
        category : 0,
        image: ''
      };
      
    const [inputs, setImputs] = useReducer((state: Product2, action: Action): Product2 => {
        switch (action.type) {
          case 'SET_NAME':
            return { ...state, label: action.data };
          case 'SET_DESCRIPTION':
            return { ...state, description: action.data };
          case 'SET_PRICE':
            return { ...state, price: action.data };
            default:
                return state;
        }
      }, initialState);
  
   // console.log(product);

    //console.log("vedi gli inputs", inputs);
    

    const [openModal, setOpenModal] = useState(false);

    // const handleEditClick = () => {
    //   setOpenModal(true);
    //   onEdit(false);
    // };

    async function closeForm() {
        setOpenModal(false)
        async function makePost() {
           const data = fetch('/api/products', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                    id: product.id,
                    label: inputs.label,
                    description: inputs.description,
                    price: inputs.price,
                    category: product.category,
                    image: inputs.label.replace(/\s/g, "_") + ".png"
              })
            })
           return (await data).json()
            
          }
          
          
          const response = await makePost()
          if (response.success) {
            onEdit({inputs, id : product.id})
          }
    }

    return (
        <>
            <Button className="h-10" onClick={()=> setOpenModal(true)}>Modifica</Button>
            <Modal show={openModal} size="xl" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Stai modificando il prodotto: {product?.label}
                        </h3>
                        <div className="flex max-w-md flex-col gap-4 text-start">
                            <div className="mb-2 block ">
                                <Label htmlFor="base" value="Label" />
                                <TextInput id="base" type="text" sizing="md" onChange={(e)=>
                                    setImputs({
                                        type: "SET_NAME",
                                        data : e.target.value
                                    })
                                
                            } 
                            defaultValue={product.label}
                                required />
                            </div>
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="comment" value="Description" />
                                </div>
                                <Textarea id="comment" placeholder="Write a description..." onChange={(e)=>
                                    setImputs({
                                        type: "SET_DESCRIPTION",
                                        data : e.target.value
                                    })
                                } defaultValue={product.description} required rows={4} />
                            </div>
                            <div className="mb-2 block ">
                                <Label htmlFor="base" value="Price" />
                                <TextInput id="base" type="number" onChange={(e)=>
                                    setImputs({
                                        type: "SET_PRICE",
                                        data : e.target.value
                                    })
                                } defaultValue={product.price} sizing="md" />
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 mt-4">
                            <Button color="success" onClick={closeForm}>
                                {"Aggiorna prodotto"}
                            </Button>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default memo(Modale)
