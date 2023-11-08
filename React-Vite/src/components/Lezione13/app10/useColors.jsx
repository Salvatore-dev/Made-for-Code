import { useEffect, useState } from 'react';

function useColors() {
  useEffect(() => {
    console.log('ciao use colors');
  }, []);

  const [i, setI] = useState(0);
  const colors = ['red', 'blue', 'green'];

  const updateColor = () => {
    setI((prev) => (prev < colors.length - 1 ? ++prev : 0));
  };

  return [colors[i], updateColor];
}

export { useColors };