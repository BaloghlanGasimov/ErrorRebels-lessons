import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ShopDetailPage = () => {

    const {key} = useParams();

    const [apiData,setApiData] = useState([]);

    console.log(key);

    useEffect(()=>{
        axios
        .get(`https://fakestoreapi.com/products`)
        .then((res)=>{

            setApiData(res.data)

        })
    },[])

    const filteredProduct = apiData.filter(p=>p.id==key);

    console.log(filteredProduct);

  return (
    <div>ShopDetailPage

        <p>id: {key}</p>

        {filteredProduct.length==0? <p> loading...</p> : <p>{filteredProduct[0].title}</p> }

       

    </div>
  )
}

export default ShopDetailPage