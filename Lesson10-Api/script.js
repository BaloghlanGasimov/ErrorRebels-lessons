// const text = document.querySelector(".text");




// const myApiFunc=()=>{
//     axios
//     .get("https://fakestoreapi.com/product")
//     .then((res)=>{
        
//         let data = res.data;

//         data.map((item)=>{

//             text.innerHTML+=`<li> ${item.category}   </li>`;

//         })

//     })

//     .catch((err)=>{

//         text.innerHTML="Interde problem var"
//         console.log("interde");
//     })

// }

// myApiFunc();


const arr={
    book:"new",
    page:"196"
};


const toString = JSON.stringify(arr);
// toString="[1,2,3,4]"

localStorage.setItem("mydata",toString);

const localData = JSON.parse(localStorage.getItem("mydata"));

console.log(localData);

// console.log(localStorage.getItem("mydata"));