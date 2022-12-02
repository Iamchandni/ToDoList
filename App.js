import React ,{useState, useEffect} from "react";
import ToDoList from "./components/todolist";
import Timeline from "./components/timeline";
import UsingFetch from "./components/fetchApi";
const App=() => {

  //objects for taking todo list and deadline as input
 const [input,setInput] = useState("");
 const [InputTime,setInputTime] = useState("");

//declaring array to store time and to do list
 const [todos, setTodos]= useState([]);
 const [time,setTime]= useState([]);

 //handling events
const submitInput=(event)=>{  
     setInput(event.target.value);  
}
const submitTime=(event)=>{
  setInputTime(event.target.value)
}

//storing to do list and their deadline in two different arrays using react state
 const itemsList=(e)=>{
     e.preventDefault();
      setTodos((items) =>{
        if(items!==" ")
          return [...items, input];
      });
      setTime((data)=>{
        return[...data,InputTime];
      })
      setInput("");
      setInputTime("")
  };

  //deleting to do list items and their timetag
    const deleteItems=(id)=>{
    console.log("deleted");
    setTodos((items) =>{
      return items.filter((currentElement,index) => {
        return  index!==id;    
      })
    });
    setTime((items) =>{
      return items.filter((currentElement,index) => {
        return  index!==id;    
      })
    });
  };
  return (
     <>
     <UsingFetch />
     <div className="w-1/2 h-screen bg-blue-100 m-2 border-2xl rounded-lg mx-10">
       <h1 className=" text-center mb-7 mt-2 bg-blue-800 text-3xl text-white font-bold">ToDo List</h1>
      
     <div className="flex justify-center align-center justify-evenly"> 
     <form onSubmit={itemsList}>
       <input required={true} value={input} onChange={submitInput} className="w-1/2 placeholder-grey-50 p-2 m-2 border-2xl rounded-lg" type="text" placeholder="Add your task here" />
       <span>
       <input required={true} type="date" value={InputTime} onChange={submitTime}></input>
       </span>
       <span>
       <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">ADD</button>
       </span>
       </form>
       </div>
      
       <ol>
            
             {todos.map((value,index) => {
              return <ToDoList
              key={index}
              id={index}
              onSelect={deleteItems}
               text={value} />
             })
          }
          {
            time.map((value)=> {
              return <Timeline 
               timeTag={value} />

            })
            
          }
       </ol>
       </div>
     </>
  );
}

export default App;
