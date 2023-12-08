// let st = "   yeni   il   gelirr        necesen           "; 

// let start=0,end=0,isStart=true;
// var trimSt="";

// for(let i=1;i<st.length;i++){

//    if(isStart){
//     if(st[i-1]==" "){
//         if(st[i]!=" "){
//             start=i;
//             isStart=false;
//         }
//     }
//    }

   
//         if(st[i]!=" "){
//             if(st[i+1]=" "){
//                     end=i
//             }
//         }
   
// }


// for(let j=start;j<=end;j++){
//     trimSt+=st[j];
// } 


// console.log("start: ",start);
// console.log("end: ",end);

// console.log(st);
// console.log(trimSt);



// //st.trim();










            
const arr = [1,2,3,4,5,3,7,2];

const obj = {
    az:["ana sehife","elaqe"],
    en:{
        dil:"ingilis"
    }
}

console.log(obj.en.dil);

const arr2 =[
    {
        title:"Samsung",
        weight:"100gr"
    },
    {
        title:"Xiaomi",
        weight:"120gr"
    }
]

console.log(arr2[0].weight);

console.log(arr);



for(let i=arr.length;i>1;i--){
    console.log(arr[i]+ " ");
}

//Ayla 1 3 5
//Ramazan 1 3 5
//Hecer 1 3 5
//Naile 1 3 5


//Ayla 5 4 3 2
//Ramazan 5 4 3 2
//Hecer 5 4 3 2
//Naile 5 4 3 2