import React, { useState } from 'react';

function TodoList(props){
    return(
        <div>
            <li className='list-item'>
                {props.item}
            </li> 
        </div>
    )
}

export default TodoList;