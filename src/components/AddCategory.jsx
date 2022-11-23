import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => { 
    const [inputValue, setInputValue] = useState('')

    // Obtengo el texto que hay en el input
    const onInputChange = ( {target} ) => {
        setInputValue(  target.value )
    }

    // Cuando el usuario pulsa enter
    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        //setCategories( categories =>  [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar GIF"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
  )
}
