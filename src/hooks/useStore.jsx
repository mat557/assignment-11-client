import { useEffect, useState } from "react"

const useStore = () =>{
    const [store,setStore] = useState();

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setStore(data))
    },[])
    return [store,setStore]
}

export default useStore;