import * as mydata from './data.js'

const arr=[
    {
        qiymet:10,
        ad:""
    },
    {
        qiymet:12,
        ad:""
    },

]

console.log(mydata.arr);



const value1="men's clothing";
                
const funct = (value)=>{
    fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{

    // console.log(data);

    console.log("test",data[0].category);

    // for(let i=0;i<)


    // console.log(data);
    // const filteredArray = data.filter(cd=>cd.category==value)
    
    // console.log("My filtered Array: ", filteredArray);
    

    const arr=[];
    
    var count = 0;

    data.map((cd,i)=>{


       
        if( cd.category === value){
            arr[count]=cd;
          count++; 
        }

       
    })

        console.log(arr);

})
}

// funct("men's clothing");
funct(value1);