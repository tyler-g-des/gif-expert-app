import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'hunter x hunter',]);
  
  const onAddCategory = ( category ) => {
   if(categories.includes(category)) return;
   //setCategories(['Valorant']);
   setCategories([category, ...categories]);
  }

  console.log(categories);
  return (
    <>
       {/* titulo */}
       <h1>GifExpertApp</h1>
       {/* Input */}
       <AddCategory onNewCategory={onAddCategory}/>

       {/* Listado de Gif */}
       {/* <button onClick={onAddCategory}>Agregar</button> */}

       {
         categories.map( (category) => ( 
            <GifGrid 
            key={category} 
            category={category}
            />
         ))
       }
    </>
  )
}
