import { useEffect, useState } from "react"

const useCustom = () =>{
    const [data,setData] = useState([]);
     useEffect(()=>{
         fetch(`${process.env.PUBLIC_URL}/productss.json`)
         .then(res => res.json())
         .then(data => setData(data))
     },[])
     return [data,setData];
}

export default useCustom;