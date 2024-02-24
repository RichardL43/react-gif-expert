import { AddCategories, GifGrif } from './components';
import {useState} from 'react';


export const GifExpertApp = () => {

  const [state, setstate] = useState([ 'dragon ball' ]);
  // Tarea
  const onAddCategory = (newCategory) => {
    if(state.includes(newCategory)) return;

    setstate([newCategory, ...state])
    // console.log(newCategory)
  }
 
  return (
  <>  

    {/* titulo */}
    <h1>Busca tu Gif</h1>
    
     <AddCategories 
      onNewCategory={onAddCategory}
      />  
    {/* <button onClick={onAddCategory}>Agregar</button> */}
    
      { 
        state.map(category => (
          <GifGrif 
            key={category}
            categoria={category}    
          />
      )
      )}

  </>

)

}
