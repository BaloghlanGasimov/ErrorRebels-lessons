import React, { useEffect, useState } from 'react'
import SingleCard from './SingleCard'
import axios from 'axios'

const Shop = () => {

  const [apiData,setApiData]=useState([]);
  const [filteredData,setFilteredData] = useState([]);

  useEffect(()=>{

    axios
    .get("https://fakestoreapi.com/products")
    .then((res)=>{

      setApiData(res.data)
      setFilteredData(res.data)
      // console.log(res.data);
    })
    

  },[])
  
  const filterFunc=(category)=>{

    const tempData = apiData.filter(p=>p.category==category)

      setFilteredData(tempData);
    


  }

//   console.log("filtered data state", filteredData);


  return (
    <div>

      
      
      <div className="container mt-3">
      <button className='btn btn-success me-2' onClick={()=>{filterFunc("men's ")}} >Men</button>
      <button className='btn btn-primary me-2' onClick={()=>{filterFunc("women's clothing")}} >Women</button>
      <button className='btn btn-warning me-2' onClick={()=>{filterFunc("jewelery")}} > Jewelery</button>
      <button className='btn btn-danger me-2' onClick={()=>{filterFunc("electronics")}} >Electronics</button>
      <div className="row mt-5 ">

      {filteredData.map((item,i)=>{
        return(
          <SingleCard key={i} id={item.id} image={item.image} category={item.category} title={item.title} />
        )
      })}

    </div>
    </div>

    </div>
  )
}

export default Shop