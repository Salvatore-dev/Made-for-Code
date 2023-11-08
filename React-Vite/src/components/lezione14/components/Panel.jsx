import TextInput from "./TextInput";
import CheckInput from "./CheckInput";
import RadioInput from "./RadioINput";
function Panel() {
  return (
    <div className="flex flex-row gap-3 justify-around items-center">
     
     <TextInput />
      
    <CheckInput />
    <RadioInput />

    </div>
  );
}

export default Panel;
