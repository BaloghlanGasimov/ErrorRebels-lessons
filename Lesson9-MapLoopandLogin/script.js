

// button.onclick = myFunc;
// checkButton.onclick = checkFunc2;
// // checkButton.onclick = checkFunc2;




const inputPass= document.querySelector(".password");

const inputName = document.querySelector(".name");
const eyeBtn = document.querySelector(".eyeBtn");
const checkBtn = document.querySelector(".checkBtn");




const data=[
    {
        email:"hecer@gmail.com",
        password:"hecer123"
    },
    {
        email:"baloglan@gmail.com",
        password:"baloglan123"
    },
    {
        email:"ayla@gmail.com",
        password:"ayla123"
    },
]

// function myFunc (){
    
// }

// for(let i of data){

// }

data.map((item,index)=>{

    if(index==0){
        console.log(item.password);
    }


    // item.password=1;

    // console.log("indexim: ",index);
    
})

console.log("----------------------");

for(let i=0;i<data.length;i++){

    console.log(data[0].password);
    
}




const eyeFunc=()=>{

    if(inputPass.type=="text"){
        inputPass.type="password"
    }else{
        inputPass.type="text";
    }
    
    
}






eyeBtn.onclick = eyeFunc;




