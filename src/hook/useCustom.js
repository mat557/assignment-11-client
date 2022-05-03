import { useEffect, useState } from "react"

const useCustom = () =>{
    const [data,setData] = useState([]);
    
    // process.env.PUBLIC_URL}/productss.json
    useEffect(()=>{
         fetch(`http://localhost:5000/services`)
         .then(res => res.json())
         .then(data => setData(data))
     },[])
     return [data,setData];
}

export default useCustom;