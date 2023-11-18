"use client"

// globalContext.tsx
import { createContext, useContext, ReactNode, useEffect, useState, useMemo } from 'react'; // importazione degli hooks e dei componenti utilizzati
import Product from '@/app/types/product'; // importazione di un type, puo essere la tipizzazione del tipo di dato che mi serve

interface GlobalContextProps { // questo e' il tuipo di dato che sara assunto dal context, in questo caso un arrya di type importati e oppure null
  products: Product[] | null; 
}

const GlobalCtx = createContext<GlobalContextProps | null>(null); // creazione del contesto

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => { //esporto uncomponente che avra tutti i cildren, si puo inserire nel layout
  // Inizializza gli stati globali qui
  const [products, setProducts] = useState<Product[] | null>(null); // uno state che mipermette di impostare il valore che voglio passare come value

  useEffect(() => { // una chiamata, un modo per prendere un dato e passarlo allo use state
    async function getProducts() {
      try {
        const r = await fetch('/api/products');
        const resp = await r.json();

        setProducts(resp);
      } catch (error) {
        console.error('Errore nella chiamata API', error);
      }
    }

    getProducts();
  }, []); // Aggiungi dipendenze se necessario

  return <GlobalCtx.Provider value={{ products }}>{children}</GlobalCtx.Provider>; // assegnazione del valore e spazio per i cildren che faranno parte del contesto
};

export const useGlobalContext = () => { // esporto a parte la use globalContect per ottener nei cildren il valore
  const context = useContext(GlobalCtx);
  if (!context) {
    throw new Error('useGlobalContext deve essere utilizzato all\'interno di un GlobalProvider');
  }
  return context;
};



//secondo esempio da documentazione React

// This is a simpler example, but you can imagine a more complex object here
type ComplexObject = {
  kind: string
};

// The context is created with `| null` in the type, to accurately reflect the default value.
const Context = createContext<ComplexObject | null>(null);

// The `| null` will be removed via the check in the Hook.
const useGetComplexObject = () => {
  const object = useContext(Context);
  if (!object) { throw new Error("useGetComplexObject must be used within a Provider") }
  return object;
}

export default function MyApp() {
  const object = useMemo(() => ({ kind: "complex" }), []);

  return (
    <Context.Provider value={object}>
      <MyComponent />
    </Context.Provider>
  )
}

function MyComponent() {
  const object = useGetComplexObject();

  return (
    <div>
      <p>Current object: {object.kind}</p>
    </div>
  )
}