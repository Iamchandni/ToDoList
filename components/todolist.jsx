import React from "react";

const ToDoList=(props)=>{
   
    return (
        <>
      <div className="flex justify-evenly ">
     
    
     <i onClick={()=>{
      props.onSelect(props.id);
    }} className="fa-solid fa-trash cursor-pointer">
      </i>
        <li> {props.text}</li>
        
      </div>
    </>
)};

export default ToDoList;