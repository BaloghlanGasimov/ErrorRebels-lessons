import React, { useEffect, useState } from 'react'
import SingleCard from './SingleCard'
import axios from 'axios'

const Shop = () => {


  //pass by value
//   var numb1 = 5;
//   var numb2 = numb1; //5 
//   var numb2 =3; //3


//   console.log("numb1 : ",numb1);
//   console.log("numb2 : ",numb2);

//   //Hecer numb1 : 3 numb2 : 3 
//   //Ramazan  numb1 : 3 numb2 : 3
//   //Ayla    numb1 : 5 numb2 : 3


//   // pass by reference

// var arr1 = [1,2,3]    //900  arr1 -----> 900 [3,2,3]
// var arr2 = arr1;      //900 arr2 ----->900 [3,2,3]

// //pass by reference
// function arrayiDeyis(any){

//   arr2[1]=5;

// }
// arrayiDeyis(arr2);

// arr2[0] = 3;

// for(let i=0;i<arr1.length;i++){

//   console.log("arr1",arr1[i]);


// }
// console.log("-------------");

// for(let i=0;i<arr1.length;i++){

//   console.log("arr2",arr2[i]);

// }


//Hecer arr1 : [1,2,3] arr2 : [3,2,3]
  //Ramazan  arr1 : [1,2,3] arr2 : [3,2,3]
  //Ayla    arr1 : [1,2,3] arr2 : [3,2,3]


  for(let i=0;i<5;i++){
    setTimeout(() => {
      console.log(i+" iteration, value:"+i);
    }, 1000);
    console.log("yoxlama");
  }

  // console.log("countum: ",count);

  const [apiData,setApiData]=useState([]);
  const [filteredData,setFilteredData] = useState([]);

  const [rangeData,setRangeData] = useState([]);


  const [inputValue,setInputValue] = useState(1000);

  useEffect(()=>{

    axios
    .get("https://fakestoreapi.com/products")
    .then((res)=>{

      setApiData(res.data)
      setFilteredData(res.data)
      setRangeData(res.data)
      // console.log(res.data);
    })
    

  },[])
  
  const filterFunc=(category)=>{

      let categoryData = apiData.filter(p=>p.category==category)

      const rangeCategoryData = categoryData.filter(p=>p.price<=inputValue)

      setRangeData(rangeCategoryData);

      setFilteredData(categoryData);


  }

  const rangeFunc=()=>{

    const myTemp = filteredData.filter(p=>p.price<=inputValue);


    setRangeData(myTemp);

  }


  return (
    <div>

      
      
      <div className="container mt-3">
      <button className='btn btn-success me-2' onClick={()=>{filterFunc("men's clothing")}} >Men</button>
      <button className='btn btn-primary me-2' onClick={()=>{filterFunc("women's clothing")}} >Women</button>
      <button className='btn btn-warning me-2' onClick={()=>{filterFunc("jewelery")}} > Jewelery</button>
      <button className='btn btn-danger me-2' onClick={()=>{filterFunc("electronics")}} >Electronics</button>
      <div className="row mt-5 ">

        <input type="range" className='mb-5' min={0} max={1000} defaultValue={0} 
        onChange={(e)=>{
          setInputValue(e.target.value)
          rangeFunc()
        }
          
          } name="" id="" />

        <p>Araliq 0 dan {inputValue}</p>

      {rangeData.map((item,i)=>{
        return(
          <SingleCard key={i} price={item.price} id={item.id} image={item.image} category={item.category} title={item.title} />
        )
      })}

    </div>
    </div>

    </div>
  )
}

export default Shop