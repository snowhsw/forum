'use client'

import useHandle from "./chage";


const InputComponent = ({init, placeholder, name, none}) =>{

    const [value,  handleChange] = useHandle(init)

    return(
        <>
            <input 
                type="text" 
                name={name} 
                value={value} 
                placeholder={placeholder} 
                onChange={handleChange}
                style={{display:none}}
            /> 
        </>
    )
}

export default InputComponent;