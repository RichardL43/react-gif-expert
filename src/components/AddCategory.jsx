import { useState } from "react"
// import setCategorie from 'module';
export const AddCategories = ({onNewCategory}) => {

  const [InputValue, setInputValue] = useState('');
  // funciones
  const InputChance = (e) => {
    setInputValue(e.target.value)
  }

   const onSubmit = (e) => {
    e.preventDefault();
    // console.log(InputValue);
    if(InputValue.trim().length <= 1) return;
    onNewCategory(InputValue);
    // setstate(callback => [InputValue,...callback])
    setInputValue('');
  }
 


  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Buscar gifs"
        value={InputValue}
        onChange={InputChance}
      />
    </form>

    )
}

