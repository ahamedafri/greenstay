import {useEffect, useState} from "react"
import axios from "axios"

const useFetch = (url) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

  useEffect(()=>{
    const fetchData = async () =>{
        setLoading(true);
        try{
            const res = await axios.get(url);
            setData(res.data)
        } catch {
            setError(error);
        }
        setLoading(false)
    };
    fetchData();
  },[url])

  const reFetch = async() => {
    setLoading(true);
    try{
        const res = await axios.get(url);
        setData(res.data)
    }catch {
        setError(error)
    } 
    setLoading(true);
  };

  return {data,error,reFetch,loading};
};

export default useFetch;