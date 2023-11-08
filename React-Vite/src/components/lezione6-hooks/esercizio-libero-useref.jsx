import React, { useRef } from 'react';

function MyForm() {
  // Definisci riferimenti per i campi di input
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // Funzione per gestire l'invio del modulo
  const handleSubmit = (e) => {
    e.preventDefault();

    // Esempio di come accedere ai valori dei campi di input utilizzando i riferimenti
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    console.log(messageRef);

    // Puoi fare qualcos'altro con i valori, ad esempio inviarli al server o eseguire un'azione
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Esempio di Form con Tailwind CSS e React</h1>

      {/* Modulo di esempio */}
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Nome:</label>
          <input type="text" id="name" name="name" className="border p-2 w-full" placeholder="Inserisci il tuo nome" ref={nameRef} />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input type="email" id="email" name="email" className="border p-2 w-full" placeholder="Inserisci la tua email" ref={emailRef} />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Messaggio:</label>
          <textarea id="message" name="message" className="border p-2 w-full" placeholder="Inserisci il tuo messaggio" ref={messageRef}></textarea>
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Invia</button>
      </form>
    </div>
  );
}

export default MyForm;