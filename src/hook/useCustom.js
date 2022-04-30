import { useEffect, useState } from "react"

const useCustom = () =>{
    const [data,setData] = useState([]);
     useEffect(()=>{
         fetch('productss.json')
         .then(res => res.json())
         .then(data => setData(data))
     },[])
     return [data,setData];
}

export default useCustom;