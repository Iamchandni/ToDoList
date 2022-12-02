import React ,{useState, useEffect} from "react";

const UsingFetch=()=>
{
    const [quotesData, setQuotesData]=useState([]);


    const fetchData =()=>{
        fetch("https://favqs.com/api/qotd")
        .then(res =>res.json())
        .then(data => setQuotesData(data.quote.body));
      
      }
      
      useEffect(()=> {
        fetchData()
       },[])
       
       return (
        <div>
            {quotesData}
        </div>
       )
    
}
export default UsingFetch;