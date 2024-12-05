import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
//apikey : Sulbs6gSMrB73zuBASfJs7mKEiHhQpn7

export const GifExpectApp = () => {

  const [categories, setCategories] = useState([ 'One Punch']);

  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory) ) return;

    setCategories([ newCategory, ...categories]);
  }

  return (  

    <>
        <h1>GifExpectApp</h1>

        <AddCategory 
        onNewCategory={event => onAddCategory(event)}
        />


      { 
        categories.map(category => 
          (
            <GifGrid key={ category } 
            category={ category } />
          ))
      }
    

    </>

  )

}
