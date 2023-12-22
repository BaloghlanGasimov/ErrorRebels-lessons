const myInput = document.querySelector(".myInput");
const myBtn = document.querySelector("button");



const funcYoxla = ()=>{

    const qiymet = myInput.value;

    console.log("Menim inputumun qiymeti: ", qiymet);

    if(qiymet=="Ramazan"){
        alert("Duzgundur")
    }else{
        alert("Yanlisdir")
    }
    
}



myBtn.onclick=funcYoxla;

// myInput.value="salam"

