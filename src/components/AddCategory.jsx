import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('one punch')
    
    const onInputChange= (event) => {
        setInputValue(event.target.value)

    }
    

    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <=1 ) return;
        
        //setcategories(categories => [...categories, inputValue]);
        onNewCategory(inputValue.trim())
        setInputValue('');
    }
 
    return (

        <form onSubmit= {onSubmit}>

            <input type="text"
            placeholder="buscar gif"
            value={inputValue}
            onChange={onInputChange} />
        
        </form>
  )
}
