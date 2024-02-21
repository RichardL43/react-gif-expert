import {GifItem} from './GifItem';
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrif = ({categoria}) => {

    const {images,isLoading} = useFetchGifs( categoria );


    
    return (
    <>
        <h3>{categoria}</h3>
        {
            isLoading && <h2>Cargando...</h2>
        }

        <div className="card-grid">
            {
                images.map((x) => (
                    // <li key={id}>{title}</li>
                    <GifItem 
                    key={x.id}
                    // para esparsir las propiedades 
                    {...x}
                    />  
                ))
            }
    
        </div>
     
    </>
    )
}
