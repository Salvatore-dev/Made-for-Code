interface MyButtonProps {
    /** The text to display inside the button */
    title: string;
    /** Whether the button can be interacted with */
    disabled: boolean;
    funx: React.Dispatch<React.SetStateAction<number>>;
  }

  
  function MyButton({ title, disabled, funx }: MyButtonProps) {
    return (
      <div className="flex flex-row justify-around gap-4">
        <button className="bg-gray-100  text-gray-800 border rounded-xl text-center w-fit p-3" onClick={()=>funx(n => n+1)} disabled={disabled}>Incrementa {title}</button>
        <button className="bg-gray-100  text-gray-800 border rounded-xl text-center w-fit p-3" onClick={()=>funx(n => n-1)} disabled={disabled}>Decrementa {title}</button>
      </div>
      
    );
  }
  
export default MyButton;
  