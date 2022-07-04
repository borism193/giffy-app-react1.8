import { useState } from "react"
import { AddCategory,GifGrid} from "./components/"

useState


//apikey=v2j4nFZlsxeYenPYXCRaN1qFu1CJ6J6j

export const GiffApp = () => {

const [categories, setcategories] = useState(['one punch'])

const onAddCategory = (NewCategory) =>{
    if(categories.includes(NewCategory))return;
   
    setcategories([NewCategory, ...categories])
}
return(
<>
    <h1>GiffApp</h1>

    <AddCategory 
        onNewCategory={onAddCategory}
    />

        {
            categories.map((category) => (
                <GifGrid key={category} category={category}/>                
            ))
            
        } 

</>


)
}