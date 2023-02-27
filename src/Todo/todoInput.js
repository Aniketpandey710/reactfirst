import React, { useState } from 'react';

function Todoinput(props){
    const [inputText,setInputText]=useState('');
    return(
        <div>
            <input 
                type="text" 
                className='input-box'
                placeholder='Enter Task'
                value={inputText}
                onChange={e=>{
                    setInputText(e.target.value)
                }}
                >
            </input>
            <button 
                className='add-btn'
                onClick={()=>{
                    props.addList(inputText)
                    setInputText("")
                }}
                >+</button>
        </div>
    )
}

export default Todoinput