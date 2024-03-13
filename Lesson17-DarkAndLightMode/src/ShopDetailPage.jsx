import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ShopDetailPage = () => {

  

    const {key} = useParams();

    const [apiData,setApiData] = useState([]);

    const [loading,setLoading] = useState(true);

    const [networkError,setNetworkError] = useState(false);


    console.log(key);

    useEffect(()=>{
        axios
        .get(`https://fakestoreapi.com/products11`)
        .then((res)=>{

            setApiData(res.data)
            setLoading(false)

        })
        .catch((err)=>{
          setLoading(false);
          setNetworkError(true);
        })
    },[])

    const filteredProduct = apiData.find(p=>p.id==key);

    console.log(filteredProduct);

  return (
    <div>ShopDetailPage

        <p>id: {key}</p>

        {/* {filteredProduct.length==0? <p> loading...</p> : <p>{filteredProduct[0].title}</p> } */}

        {loading ?
         <p>Loading...</p>
         :

         networkError
         ?
         <p>yuklenen zaman xeta oldu</p>
         :
         <img src={filteredProduct.image} alt="" />

        
        }

       

    </div>
  )
}

export default ShopDetailPage